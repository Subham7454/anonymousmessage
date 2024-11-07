import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be not more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not conyain special charaters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: 'inavlid email address' }),
    password:z.string().min(6,{message:'password must be atleast 6 characters'})
})