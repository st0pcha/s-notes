import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

interface AuthCardProps {
	children: React.ReactNode
	title: string
}

const AuthCard = ({ children, title }: AuthCardProps) => {
	return (
		<Card className='w-[400px] bg-bg/50 dark:bg-bg-DARK/50'>
			<CardHeader>
				<div className='w-full flex flex-col gap-y-4 items-center justify-center'>
					<h1 className='text-4xl underline'>{title}</h1>
				</div>
			</CardHeader>

			<CardContent>{children}</CardContent>
		</Card>
	)
}

export default AuthCard
