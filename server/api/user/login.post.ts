import { prisma } from '~~/server/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw createError({
      message: 'No user found',
    })
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    throw createError({
      statusMessage: 'Invalid email or password',
    })
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    secretKey,
    { expiresIn: '1h' },
  )

  return { token }
})
