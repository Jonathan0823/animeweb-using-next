import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-4 md:flex-row flex-col'>
      <Link href='/' className='font-bold text-white md:text-3xl text-2xl'>ANIMELIST</Link>
      <input type="text" placeholder='Search Anime' className='p-2 md:mt-0 mt-4 md:w-1/3'/>
    </nav>
  )
}

export default Navbar