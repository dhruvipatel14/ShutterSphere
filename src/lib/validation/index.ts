import { z } from "zod"

export const SignUpValidation = z.object({
    username: z.string().min(2, { message: 'Too Short' }),
    name: z.string().min(2, { message: 'Too Short' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be between 8 and 265 characters long, and should not be one of the commonly used password.' }
    ).max(256, { message: 'Password must be between 8 and 265 characters long, and should not be one of the commonly used password.' })
})

export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be between 8 and 265 characters long, and should not be one of the commonly used password.' }
    ).max(256, { message: 'Password must be between 8 and 265 characters long, and should not be one of the commonly used password.' })
})


export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string()
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, {message:"Name should contain at least 2 characters."}),
    username: z.string().min(2, {message:"Name should contain at least 2 characters."}),
    email: z.string().email(),
    bio: z.string()
})