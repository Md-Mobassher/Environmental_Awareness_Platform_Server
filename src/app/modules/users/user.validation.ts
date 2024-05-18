import { z } from 'zod'

const createUserValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .min(6),

  contactNo: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  address: z.string().min(3),
})

const updateUserValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
  contactNo: z.string().optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  dateOfBirth: z.string().optional(),
  address: z.string().min(3).optional(),
})

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
}
