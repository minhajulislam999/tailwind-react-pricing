import React from 'react'
import { Menu } from 'lucide-react';


function Navbar() {
  return (
    <nav>
        <div>

            {/* Logo */}
            <h1>My Logo</h1>

            {/* Desktop Menu */}

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
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
