import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as {
    prismaBugger: PrismaClient | undefined
}


export const prismaBugger = globalForPrisma.prismaBugger ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaBugger = prismaBugger;