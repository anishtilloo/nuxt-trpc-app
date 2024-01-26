import { z, infer as Zinfer } from "zod";

export const UserSchema = z.object({
    userName: z.string(),
    userMobileNumber: z.string(),
    userEmail: z.string().email(),
    userAddress: z.string(),
    userHobbies: z.string().array(),
})

export type UserSchemaType = Zinfer<typeof UserSchema>;