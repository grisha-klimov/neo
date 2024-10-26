import type { H3Event } from 'h3'
import { z } from 'zod'

export function handleId(event: H3Event) {
  const id = getRouterParam(event, 'id')

  const idSchema = z.string().uuid('ID must be a valid UUID')

  event.context.id = idSchema.parse(id)
}
