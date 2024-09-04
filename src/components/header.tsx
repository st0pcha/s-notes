import Logo from './logo'
import StartNowButton from './start-now.button'

const Header = () => {
	return (
		<div className='bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50 fixed top-0 w-full p-6 flex items-center'>
			<Logo className='text-3xl' />

			<div className='flex ml-auto items-center justify-between gap-4'>
				<StartNowButton />
			</div>
		</div>
	)
}

export default Header
