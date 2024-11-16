import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'

const Navbar = async () => {
  const token = (await cookies()).get("token")

  return (
    <nav className='bg-blue-950 text-white py-2'>
      {/* <Link href={"/"} className='flex justify-center items-center'><span className='font-bold'>GetMeAChai</span></Link> */}
      <ul className='flex justify-center'>
        <Link href={"/"}><button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button></Link>
        {!token && <Link href={"/login"}><button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>}
        {token && <Link href={"/profile"}><button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Profile</button></Link>}
      </ul>
    </nav>
  )
}

export default Navbar