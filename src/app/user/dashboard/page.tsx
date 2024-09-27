import React from 'react'
import { authUserSesion } from '@/app/libs/auth-libs'
import Image from 'next/image';

const UserDashboard = async () => {
    const userInfo = await authUserSesion();
  return (
        <div>
            <h1>User Dashboard</h1>
            <h3>{userInfo?.email}</h3>
            <h3>{userInfo?.name}</h3>
            <Image src={userInfo?.image || ''} width={250} height={250} alt='profile picture'/>
        </div>
  )
}

export default UserDashboard