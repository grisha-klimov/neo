import { prisma } from '~~/server/prisma'
import { z } from 'zod'

export default defineEventHandler({
  onRequest: [handleId],
  async handler(event) {
    try {
      const id = event.context.id as string
      const body = await readBody(event)

      const projectUpdateSchema = z.object({
        name: z.string().optional(),
        shortDescription: z.string().optional(),
        description: z.string().optional(),
        image: z.string().url('Field `image` must be a valid URL').optional(),
      })

      const validatedData = projectUpdateSchema.parse(body)

      if (Object.keys(validatedData).length === 0) {
        throw createError({
          statusCode: 400,
          message: 'No fields provided for update',
        })
      }

      const updatedProject = await prisma.project.update({
        where: { id },
        data: validatedData,
      })

      return {
        data: updatedProject,
      }
    }
    catch (error) {
      if (error instanceof Error) {
        throw createError({
          statusCode: 500,
          message: error.message,
        })
      }
      else {
        throw createError({
          statusCode: 500,
          message: 'An unknown error occurred',
        })
      }
    }
  },
})
