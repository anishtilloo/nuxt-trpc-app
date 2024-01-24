/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { publicProcedure, router } from '~/server/trpc/trpc'
import { userRouter } from './user';

export const appRouter = router({
  user: userRouter
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;