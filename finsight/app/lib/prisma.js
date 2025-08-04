// import { PrismaClient } from "@prisma/client";

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }

// // globalThis.prisma: This global variable ensures that the Prisma client instance is
// // reused across hot reloads during development. Without this, each time your application
// // reloads, a new instance of the Prisma client would be created, potentially leading
// // to connection issues.

// lib/prisma.js

// import { PrismaClient } from "@prisma/client";

// // Prevent multiple instances of Prisma Client in development
// let prisma;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!globalThis.prisma) {
//     globalThis.prisma = new PrismaClient();
//   }
//   prisma = globalThis.prisma;
// }

// export const db = prisma;


import { PrismaClient } from '../../lib/generated/prisma'; // <-- adjust path based on location

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
