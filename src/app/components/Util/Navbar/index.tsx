import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-4 md:flex-row flex-col'>
      <Link href='/' className='font-bold text-white md:text-3xl text-2xl'>ANIMELIST🤑</Link>
      <div className='flex gap-4'>
      <InputSearch />
      <Link href="/api/auth/signin" className='md:text-xl md:display-none'>Sign in</Link>
      </div>
    </nav>
  )
}

export default Navbar