import Link from 'next/link'
import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-4 md:flex-row flex-col'>
      <Link href='/' className='font-bold text-white md:text-3xl text-2xl hover:scale-110 transition-all'>ANIMELIST🤑</Link>
      <InputSearch />
    </nav>
  )
}

export default Navbar