import {z} from 'zod'

export const registerSchema= z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    surname: z.string({
        required_error: 'Surname is required'
    }),

    id_number: z.string({
        required_error: 'Identification number is required'
    }).min(10, {
        message: 'Identification number must be of 10 numbers'
    }).max(10, {
        message: 'Identification number must be of 10 numbers'
    }),

    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),

    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }), 

    repeatPassword: z.string({
        required_error: 'Repeat password is required'
    })
}).superRefine(({ repeatPassword, password }, ctx) => {
  if (repeatPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }), 

    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
});