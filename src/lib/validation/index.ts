import { z } from "zod"

export const SignUpValidation = z.object({
    username: z.string().min(2 , {message : 'Too Short'}),
    name: z.string().min(2, {message : 'Too Short'}),
    email: z.string().email(),
    password:z.string().min(8, {message:'Password must contain 8 characters.'})
})