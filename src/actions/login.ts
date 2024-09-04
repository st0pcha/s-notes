'use server'

import { signIn } from '@/auth'
import { prisma } from '@/lib/database'
import { comparePassword } from '@/lib/password.util'
import { LoginSchema } from '@/schemas/login.schema'
import { AuthError } from 'next-auth'
import { z } from 'zod'

interface LoginResponse {
	error?: string
	success?: string
}

export const login = async (
	data: z.infer<typeof LoginSchema>
): Promise<LoginResponse> => {
	const validatedData = LoginSchema.safeParse(data)
	if (!validatedData.success) return { error: 'Invalid data!' }

	const { email, password } = validatedData.data

	const user = await prisma.user.findUnique({ where: { email } })

	if (!user) return { error: 'The user with this email does not exist!' }
	if (!user.password)
		return { error: 'The user with this email is connected to social!' }

	const isCorrectPassword = await comparePassword(password, user.password)
	if (!isCorrectPassword) return { error: 'Invalid password!' }

	try {
		await signIn('credentials', { email, password, redirect: false })
	} catch (err) {
		if (err instanceof AuthError) {
			switch (err.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid data!' }
				default:
					return { error: 'Unknown error! ' }
			}
		}

		throw err
	}

	return { success: 'Success login!' }
}
