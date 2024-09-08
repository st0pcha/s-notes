import { User } from '@prisma/client'
import { prisma } from '../lib/database'

export const getUserByEmail = async (email: string): Promise<User | null> => {
	return await prisma.user.findUnique({ where: { email } })
}

export const getUserById = async (id: string): Promise<User | null> => {
	return await prisma.user.findUnique({ where: { id } })
}
