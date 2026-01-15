import React from 'react'
import { Menu } from 'lucide-react';
import { Chromium } from 'lucide-react';



function Navbar() {
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

            <button>
                <Menu />
            </button>
      
    </div>

    </nav>
    
  )
}

export default Navbar
