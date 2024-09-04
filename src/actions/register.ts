'use server'

import { prisma } from '@/lib/database'
import { hashPassword } from '@/lib/password.util'
import { RegisterSchema } from '@/schemas/register.schema'
import { z } from 'zod'

interface RegisterResponse {
	error?: string
	success?: string
}

export const register = async (
	data: z.infer<typeof RegisterSchema>
): Promise<RegisterResponse> => {
	const validatedData = RegisterSchema.safeParse(data)
	if (!validatedData.success) return { error: 'Invalid data!' }

	const { email, username, password, repeatedPassword } = validatedData.data

	if (password !== repeatedPassword)
		return { error: "The passwords don't match" }

	const user = await prisma.user.findFirst({
		where: {
			OR: [{ email }, { username }],
		},
	})

	if (user)
		return { error: 'The user with this email or username already exists!' }

	await prisma.user.create({
		data: {
			email,
			username,
			password: await hashPassword(password),
		},
	})

	return { success: 'Success register!' }
}
