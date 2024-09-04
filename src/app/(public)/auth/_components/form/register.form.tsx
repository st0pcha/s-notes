'use client'

import { register } from '@/actions/register'
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
import { RegisterSchema } from '@/schemas/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AuthCard from '../auth.card'

const RegisterForm = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<string>('')
	const [transition, setTransition] = useTransition()

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			name: '',
			password: '',
			repeatedPassword: '',
		},
	})

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		setError('')
		setSuccess('')

		setTransition(() => {
			register(data).then(res => {
				if (res.error) setError(res.error)
				if (res.success) setSuccess(res.success)
			})
		})
	}

	return (
		<AuthCard title='Register'>
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
											disabled={transition}
											placeholder='example@email.com'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='name'
							disabled={transition}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input {...field} type='text' placeholder='user' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='password'
							disabled={transition}
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

						<FormField
							control={form.control}
							name='repeatedPassword'
							disabled={transition}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Repeat Password</FormLabel>
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

export default RegisterForm
