import { z } from 'zod';
import { publicProcedure, router } from '~/server/trpc/trpc';
import { UserSchema } from '~/schemas/user.schema';
import { IdSchema } from '~/schemas/get.schema';


export const userRouter = router({
    addUser: publicProcedure
    .input(UserSchema)
    .mutation(async ({ input, ctx }) => {
    // This is what you're returning to your client
          try {
            const addUserInDB = await ctx.prisma.user.create({
                data: {
                    userName: input.userName,
                    userMobileNumber: input.userMobileNumber,
                    userEmail: input.userEmail,
                    userAddress: input.userAddress,
                    userHobbies: input.userHobbies,
                }
            })
            return {
                success: true,
                message: "User Created",
                data: addUserInDB,
                error: null 
            }
          } catch (error) {
            return {
                success: false,
                message: "Something went wrong, user not created",
                data: null,
                error: error
            }
          }
    }),

    getUser: publicProcedure
        .input(IdSchema)
        .query( async ({ input, ctx }) => {
            try {
                const getUserFromDB = await ctx.prisma.user.findUnique({
                    where: {
                        id: input.id
                    }
                })
                return {
                    success: true,
                    message: "User Fetched",
                    data: getUserFromDB,
                    error: null 
                }
              } catch (error) {
                return {
                    success: true,
                    message: "Something went wrong, user not fetched",
                    data: null,
                    error: error
                }
              }
        })
})