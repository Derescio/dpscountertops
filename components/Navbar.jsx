'use client'
import { useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'


const DesktopNav = () => (
  <nav className="hidden md:flex items-center space-x-4 md:text-black md:bg-white mt-2">
    <Link href="/" className="text-black">Home</Link>
    <Link href="/about" className="text-black">Products</Link>
    <Link href="/services" className="text-black">Tools</Link>
    <Link href="/contact" className="text-black">Contact</Link>
    <Link href="/contact" className="text-black">About Us</Link>
  </nav>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  return (
    <div className='absolute w-full flex justify-between items-center p-4 bg-white sm:z-30'>
    <Image 
      src='/DPS Countertopslogo.png' 
      width={500} 
      height={500} 
      alt='Counter Top Image' 
      style={{ width: 'auto', height: 'auto' }} 
    />
      <DesktopNav />
      <HiOutlineMenuAlt1 size={25} className='md:hidden z-20 text-white sm:text-black  cursor-pointer' onClick={toggleMenu}/>
      
    <div className={`md:hidden ${isOpen ? 'ease-in duration-300 fixed top-0 left-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'} `}>
    <ul className='flex flex-col space-y-2 w-full h-screen items-center justify-center text-white'>
    <Link href="/" className="text-white">Home</Link>
    <Link href="/about" className="text-white">Products</Link>
    <Link href="/services" className="text-white">Tools</Link>
    <Link href="/contact" className="text-white">Contact</Link>
    <Link href="/contact" className="text-white">About Us</Link>
    </ul>
    </div>
    </div>
  )
}

export default Navbar
