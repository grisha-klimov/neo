import { prisma } from '~~/server/prisma'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    const paginationSchema = z.object({
      page: z.coerce
        .number()
        .int()
        .positive()
        .default(1),
      limit: z.coerce
        .number()
        .int()
        .positive()
        .default(10),
    })

    const { page, limit } = paginationSchema.parse(query)

    const skip = (page - 1) * limit

    const total = await prisma.project.count()

    const products = await prisma.project.findMany({
      skip,
      take: limit,
    })

    const totalPages = Math.ceil(total / limit)

    return {
      statusCode: 200,
      data: products,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    }
  }
  catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      })
    }
    else {
      throw createError({
        statusCode: 500,
        statusMessage: 'An unknown error occurred',
      })
    }
  }
})
