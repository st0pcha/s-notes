import { z } from 'zod'

export const RegisterSchema = z.object({
	email: z.string().email({ message: 'Email is required!' }),
	name: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters!',
		})
		.max(16, {
			message: 'Name must be 16 characters or less!',
		}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters!',
	}),
	repeatedPassword: z.string().min(6, {
		message: 'Password must be at least 6 characters!',
	}),
})
