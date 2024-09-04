import { DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'

const Footer = () => {
	return (
		<div className='bg-background-LIGHTMUTED/50 dark:bg-background-DARKMUTED/50 relative bottom-0 w-full p-6 text-center'>
			<Logo className='text-3xl' />

			<div className='flex gap-4 justify-center'>
				<Button variant='ghost' asChild>
					<Link href='https://github.com/st0pcha/s-note'>
						<GitHubLogoIcon className='mr-2 h-4 w-4' /> GitHub
					</Link>
				</Button>
				<Button variant='ghost' asChild>
					<Link href='https://discord.gg/NDK5Swdp'>
						<DiscordLogoIcon className='mr-2 h-4 w-4' /> Discord
					</Link>
				</Button>{' '}
			</div>
		</div>
	)
}

export default Footer
