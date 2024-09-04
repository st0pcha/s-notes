import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from './form/login.form'
import RegisterForm from './form/register.form'

const AuthTab = () => {
	return (
		<Tabs defaultValue='login' className='shadow-xl rounded-xl p-6 sm:p-6'>
			<TabsList className='grid w-full grid-cols-2 bg-background-LIGHTMUTED dark:bg-background-DARKMUTED rounded-xl '>
				<TabsTrigger value='login' className='rounded-xl'>
					Login
				</TabsTrigger>
				<TabsTrigger value='register' className='rounded-xl'>
					Register
				</TabsTrigger>
			</TabsList>

			<TabsContent value='login' className='rounded-xl shadow-xl p-2 md:p-4'>
				<LoginForm />
			</TabsContent>

			<TabsContent value='register' className='rounded-xl shadow-xl p-2 md:p-4'>
				<RegisterForm />
			</TabsContent>
		</Tabs>
	)
}

export default AuthTab
