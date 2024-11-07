import { z } from 'zod'

export const MessageSchmea = z.object({
    content: z
        .string()
        .min(10, { message: 'Contetn must be atleast of 10 characters' })
        .max(300,{message: 'Contetn must be no longer than 300 characters' })
})