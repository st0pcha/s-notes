import { User } from '@prisma/client'
import { prisma } from '.'

export const getUserByEmail = async (email: string): Promise<User | null> => {
	const user = await prisma.user.findUnique({ where: { email } })
	return user ? user : null
}
