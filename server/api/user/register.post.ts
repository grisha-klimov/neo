import { prisma } from '~~/server/prisma'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    throw createError({
      message: 'User already exists',
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  return {
    message: 'User created',
  }
})
