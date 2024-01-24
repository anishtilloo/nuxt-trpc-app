import { inferAsyncReturnType } from "@trpc/server";
import type { H3Event } from "h3";
/** * Creates context for an incoming request * @link https://trpc.io/docs/context */
export const createContext = (event: H3Event) => ({
  event: event,
  prisma: event.context.prisma,
});

export type Context = inferAsyncReturnType<typeof createContext>;