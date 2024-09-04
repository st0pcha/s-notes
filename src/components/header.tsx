import StartNowButton from './buttons/start-now.button'
import ThemeSwitcher from './buttons/theme-switcher.button'
import Logo from './logo'

const Header = () => {
	return (
		<div className='bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50 fixed top-0 w-full p-6 flex items-center'>
			<Logo className='text-3xl' />

			<div className='flex ml-auto items-center justify-between gap-4'>
				<StartNowButton />
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Header
