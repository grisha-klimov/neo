import { prisma } from '~~/server/prisma'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  image: z.string(),
})

export default defineEventHandler(async (event) => {
  const body = await readBody<z.infer<typeof schema>>(event)
  const { data, error } = schema.safeParse(body)

  if (error) {
    throw createError({
      statusCode: 400,
      message: error.message,
    })
  }

  const { name, shortDescription, description, image } = data

  try {
    return await prisma.project.create({
      data: {
        name,
        shortDescription,
        description,
        image,
      },
    })
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    })
  }
})
