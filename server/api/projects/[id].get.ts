import { prisma } from '~~/server/prisma'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    const idSchema = z.string().uuid('ID must be a valid UUID')

    const validatedId = idSchema.parse(id)

    const project = await prisma.project.findUnique({
      where: { id: validatedId },
    })

    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Project not found',
      })
    }

    return {
      statusCode: 200,
      data: project,
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
