import { prisma } from '~~/server/prisma'

export default defineEventHandler({
  onRequest: [handleAuth, handleId],
  async handler(event) {
    const id = event.context.id as string

    const project = await prisma.project.findUnique({
      where: { id },
    })

    if (!project) {
      throw createError({
        statusCode: 404,
        message: 'Project not found',
      })
    }

    return project
  },
})
