import { prisma } from '~~/server/prisma'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
})

export default defineEventHandler(async (event) => {
  const body = await readBody<z.infer<typeof schema>>(event)
  const { data, error } = schema.safeParse(body)

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    })
  }

  const { name, description, image } = data

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        image,
      },
    })

    return newProject
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'An unknown error occurred',
    })
  }
})
