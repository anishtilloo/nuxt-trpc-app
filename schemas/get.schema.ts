import { z, infer as Zinfer } from "zod";

export const IdSchema = z.object({
   id: z.string()
})

export type IdSchemaType = Zinfer<typeof IdSchema>;