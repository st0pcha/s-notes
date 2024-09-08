import { signOut } from '@/actions/signout'
import { Button } from '@/components/ui/button'

const SignoutButton = () => {
	return (
		<form action={signOut}>
			<Button type='submit' variant='outline'>
				Sign Out
			</Button>
		</form>
	)
}

export default SignoutButton
