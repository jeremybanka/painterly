import { PrismaClient } from "@prisma/client"

const getColorSchemes = () => [
  {
    name: `Red`,
    description: `A red color scheme`,
  },
  {
    name: `Blue`,
    description: `A blue color scheme`,
  },
  {
    name: `Green`,
    description: `A green color scheme`,
  },
]

const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getColorSchemes().map((colorScheme) =>
      db.colorScheme.create({ data: colorScheme })
    )
  )
}

seed()
