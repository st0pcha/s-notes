'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUser } from '@/hooks/use-user'
import SignoutButton from './signout.button'

const UserSettingsTab = () => {
	const user = useUser()
	if (!user) return null

	return (
		<Tabs defaultValue='account' className='w-[350px]'>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='account'>Account</TabsTrigger>
				<TabsTrigger value='password'>Password</TabsTrigger>
			</TabsList>

			<TabsContent value='account'>
				<Card>
					<CardHeader>
						<CardTitle>Account</CardTitle>
						<CardDescription>
							Make changes to your account here. Click save when you&apos;re
							done.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						{user.name && (
							<div className='space-y-1'>
								<Label htmlFor='name'>Username</Label>
								<Input id='name' defaultValue={user.name} />
							</div>
						)}

						{user.email && (
							<div className='space-y-1'>
								<Label htmlFor='name'>Email</Label>
								<Input id='name' defaultValue={user.email} />
							</div>
						)}

						<SignoutButton />
					</CardContent>
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</Card>
			</TabsContent>

			<TabsContent value='password'>
				<Card>
					<CardHeader>
						<CardTitle>Password</CardTitle>
						<CardDescription>
							Change your password here. After saving, you&apos;ll be logged
							out.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-2'>
						<div className='space-y-1'>
							<Label htmlFor='current'>Current password</Label>
							<Input id='current' type='password' />
						</div>
						<div className='space-y-1'>
							<Label htmlFor='new'>New password</Label>
							<Input id='new' type='password' />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Update password</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	)
}

export default UserSettingsTab
