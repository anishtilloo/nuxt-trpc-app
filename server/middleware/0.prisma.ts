import { PrismaClient } from "@prisma/client";
import { prisma } from "~/server/utils/prisma";

let IPrisma: PrismaClient;

declare module "h3" {
  interface H3EventContext {
    prisma: PrismaClient;
  }
}

export default eventHandler((event) => {
  if (!IPrisma) {
    IPrisma = prisma;
  }
  event.context.prisma = IPrisma;
});
