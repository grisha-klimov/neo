import { prisma } from '~~/server/prisma'
import { generateTokens } from '~~/server/utils/tokens'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: 'User already exists',
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  return generateTokens(user)
})
