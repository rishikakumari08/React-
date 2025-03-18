import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <nav className='flex justify-between items-center bg-gray-800 text-white px-5 py-5'>
        <h2 className='text-2xl'>Apna Kuch</h2>
        <div className='flex justify-between items-center gap-5'>
        <Link to="/" className='text-xl'>Home</Link>
        <Link to="/about" className='text-xl'>About</Link>
        <Link to="/contact" className='text-xl'>Contact</Link>
        <Link to="/services" className='text-xl'>Services</Link>
        </div>
        
    </nav>
    </>
  )
}

export default Nav