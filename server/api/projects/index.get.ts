import { prisma } from '~~/server/prisma'
import { z } from 'zod'

const LIMIT = 6

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const paginationSchema = z.object({
    cursor: z.string().uuid().optional(),
  })

  try {
    const { cursor } = paginationSchema.parse(query)

    const products = await prisma.project.findMany({
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      take: LIMIT + 1,
    })

    return {
      data: products.slice(0, LIMIT),
      hasMore: products.length > LIMIT,
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    })
  }
})
