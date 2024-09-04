'use client'

import CardError from '@/components/cards/card-error'
import CardSuccess from '@/components/cards/card-success'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AuthCard from '../auth.card'

const LoginForm = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<string>('')

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (data: z.infer<typeof LoginSchema>) => {
		setError('')
		setSuccess('')

		console.log(data)
	}

	return (
		<AuthCard title='Login'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<div className='space-y-4'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='email'
											placeholder='example@email.com'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='password'
											placeholder='**********'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<CardSuccess message={success} />
					<CardError message={error} />

					<Button type='submit' className='w-full'>
						Login
					</Button>
				</form>
			</Form>
		</AuthCard>
	)
}

export default LoginForm
