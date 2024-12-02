import { prisma } from '~~/server/prisma'
import { generateTokens } from '~~/server/utils/tokens'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw createError({
      statusCode: 404,
      message: 'No user found',
    })
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Invalid email or password',
    })
  }

  return generateTokens(user)
})
