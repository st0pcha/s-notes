import StartNowButton from '@/app/(public)/_components/start-now.button'
import ThemeSwitcher from '../../../components/buttons/theme-switcher.button'
import Logo from '../../../components/logo'

const Header = () => {
	return (
		<div className='bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50 fixed top-0 w-full p-6 px-4 flex items-center justify-between'>
			<Logo className='text-3xl' />

			<div className='flex items-center gap-4'>
				<StartNowButton />
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Header
