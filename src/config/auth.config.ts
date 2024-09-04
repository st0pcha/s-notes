import { prisma } from '@/lib/database'
import { getUserByEmail } from '@/lib/database/user.db'
import { comparePassword } from '@/lib/password.util'
import { LoginSchema } from '@/schemas/login.schema'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default {
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},

			async authorize(credentials) {
				const validatedData = LoginSchema.safeParse(credentials)
				if (validatedData.success) {
					const { email, password } = validatedData.data

					const user = await getUserByEmail(email)
					if (!user || !user.password) return null

					const isCorrectPassword = await comparePassword(
						password,
						user.password
					)

					if (isCorrectPassword) return user
				}

				return null
			},
		}),
	],
} satisfies NextAuthConfig
