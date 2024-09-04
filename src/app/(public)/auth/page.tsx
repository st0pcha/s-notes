import Logo from '@/components/logo'
import AuthTab from './_components/auth.tab'

const AuthPage = () => {
	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-center'>
			<Logo className='text-4xl sm:text-5xl md:text-6xl' />
			<AuthTab />
		</div>
	)
}

export default AuthPage
