import { prisma } from '~~/server/prisma'

export default defineEventHandler({
  onRequest: [handleId],
  async handler(event) {
    const id = event.context.id as string

    try {
      const project = await prisma.project.findUnique({
        where: { id },
      })

      if (!project) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Project not found',
        })
      }

      return project
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
  },
})
