import { getServerSession } from 'next-auth/next'
import { authOption } from '@/app/api/auth/[...nextauth]/route'

const authUserSesion = async () => {
    const session = await getServerSession(authOption)
    return session?.user
}

export { authUserSesion }