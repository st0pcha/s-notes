import StartNowButton from '@/components/buttons/start-now.button'
import Logo from '@/components/logo'

const Heading = () => {
	return (
		<div className='max-w-3xl space-y-6 shadow-xl rounded-xl p-6'>
			<Logo className='text-4xl sm:text-5xl md:text-6xl' />

			<h3 className='text-2xl sm:text-3xl md:text-4xl font-medium'>
				- your thoughts are your tasks.
			</h3>

			<StartNowButton />
		</div>
	)
}

export default Heading
