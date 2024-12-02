import type { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

export function generateToken(data: Record<string, unknown>, expiresIn: string) {
  const { jwtSecret } = useRuntimeConfig()

  return jwt.sign(data, jwtSecret, { expiresIn })
}

export function generateTokens(user: Omit<User, 'password'>) {
  const accessToken = generateToken(user, '1h')
  const refreshToken = generateToken(user, '7d')

  return { accessToken, refreshToken }
}
