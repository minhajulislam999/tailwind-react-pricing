import React from 'react'
import { Menu } from 'lucide-react';
import { Chromium } from 'lucide-react';
import { useState } from 'react';



function Navbar() {

    const [open, setOpen] =useState(true);

  return (
    <nav className='px-4 py-3 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>

            {/* Logo */}
                <Chromium />

            {/* Desktop Menu */}

            <ul className='hidden md:flex gap-6'>
                <li className='cursor-pointer hover:text-yellow-400'>Home</li>
                <li className='cursor-pointer hover:text-yellow-700'>About</li>
                <li className='cursor-pointer hover:text-amber-400'>Services</li>
                <li className='cursor-pointer hover:text-amber-500'>Contact</li>
            </ul>

            {/* Mobile Button */}

            <button
            className='md:hidden text-2xl'
            onClick={() => setOpen(!open)}>
                <Menu />
            </button>
      
    </div>

    { open &&(
        <ul className='md:hidden mt-3 space-y-3 bg-gray-800 p-4 rounded'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
            
        )
    }

    </nav>
    
  )
}

export default Navbar
