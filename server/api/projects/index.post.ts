import type { Prisma } from '@prisma/client'
import { prisma } from '~~/server/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Prisma.ProjectCreateInput>(event)

    const { name, description, image } = body

    if (!name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Field `name` is required',
      })
    }

    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        image,
      },
    })

    return {
      statusCode: 201,
      data: newProject,
    }
  }
  catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message,
      })
    }
    else {
      throw createError({
        statusCode: 500,
        statusMessage: 'An unknown error occurred',
      })
    }
  }
})
