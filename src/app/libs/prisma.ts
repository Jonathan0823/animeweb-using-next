import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
}
prisma = globalThis.prisma;
}

export default prisma   