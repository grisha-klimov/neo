import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'

export function handleAuth(event: H3Event) {
  const { jwtSecret } = useRuntimeConfig()
  const authHeader = getHeader(event, 'Authorization')

  if (!authHeader) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, jwtSecret) as { id: string }

    event.context.userId = decoded.id
  }
  catch {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }
}
