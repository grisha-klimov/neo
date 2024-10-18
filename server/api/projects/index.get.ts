import { prisma } from '~~/server/prisma'

export default defineEventHandler(async (event) => {
  const projects = await prisma.project.findMany({
    where: {
      id: '123',
      image: '123',
    },
  })

  return 123
})
