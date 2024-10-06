import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/authoptions'

const authUserSesion = async () => {
    const session = await getServerSession(authOptions)
    return session?.user
}

export { authUserSesion }