import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email(),
    password: z.string({
        required_error: 'Password is required'
    })
    .min(6, {message: "Password musst be al least 6 characters"})
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalidar email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6,  {message: "Password musst be al least 6 characters"})
})