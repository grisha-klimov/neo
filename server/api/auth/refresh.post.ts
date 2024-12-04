import { prisma } from '~~/server/prisma'

export default defineEventHandler({
  onRequest: [handleAuth],
  async handler(event) {
    const userId = event.context.userId as string
    const { refreshToken } = await readBody<{ refreshToken: string }>(event)

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        tokens: true,
      },
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found',
      })
    }

    const existingTokens = user.tokens.map(t => t.token)

    if (existingTokens.includes(refreshToken)) {
      const token = await prisma.token.findFirst({
        where: {
          token: refreshToken,
          userId,
        },
      })

      if (token) {
        await prisma.token.delete({
          where: { id: token.id },
        })
      }

      return generateTokens(user)
    }

    return generateTokens(user)
  },
})
