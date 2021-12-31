import { PrismaClient } from "@prisma/client"

const IN_PRODUCTION = process.env.NODE_ENV === `production`

let db: PrismaClient

declare global {
  /* eslint-disable-next-line no-var*/
  var __db: PrismaClient | undefined
}

if (IN_PRODUCTION) {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient()
    global.__db.$connect()
  }
  db = global.__db
}

export { db }
