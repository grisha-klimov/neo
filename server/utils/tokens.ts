import type { User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { prisma } from '../prisma'

export function generateToken(data: Record<string, unknown>, expiresIn: string) {
  const { jwtSecret } = useRuntimeConfig()

  return jwt.sign(data, jwtSecret, { expiresIn })
}

export async function generateTokens({ password: _p, ...user }: User) {
  const accessToken = generateToken(user, '30m')
  const refreshToken = generateToken({ id: user.id }, '7d')

  await prisma.token.create({
    data: {
      token: refreshToken,
      userId: user.id,
    },
  })

  return { accessToken, refreshToken }
}
