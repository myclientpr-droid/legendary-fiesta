'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignUpButton, 
  UserButton 
} from '@clerk/nextjs'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

// Desktop links
  const desktopNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'News', href: '/news' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'About', href: '/about' },
  ];
  // mobile links 
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'News', href: '/news' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];
  // mobile horizontal navs
  const horizonNavLinks = [
    { name: 'Programs', href: '/programs' },
    { name: 'News', href: '/news' },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed z-[999]">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              className="h-10 w-10 bg-primary-600 rounded-full object-cover"
              src='/logo.jpg' 
              width={40} 
              height={40} 
              alt='logo'
            />
            <span className="ml-3 text-xl font-bold text-gray-900">ASH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Auth Buttons - Desktop */}
            {/*<div className="flex items-center space-x-4 ml-4">
              <SignedOut>
                <div className="flex items-center space-x-4">
                  <SignInButton mode="modal">
                    <button className="text-gray-700 hover:text-primary-600 font-medium transition duration-300">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium px-5 py-2 hover:bg-[#5a3ce5] transition duration-300">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-primary-600 font-medium transition duration-300"
                  >
                    Dashboard
                  </Link>
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>*/}

            <Link
              href="/donate"
              className="bg-emerald-700 text-white rounded-full font-medium px-5 py-2 hover:bg-emerald-800 transition duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/*<SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-primary-600 font-medium text-sm">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  }
                }}
              />
            </SignedIn>*/}
            {/* horizonNavLinks */}
            {horizonNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        {isMenuOpen ? (
        <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
          ) : (
        <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
  )}
</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Auth Buttons - Mobile */}
            {/*<div className="px-4 pt-4 mt-4 border-t border-gray-100 space-y-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <button 
                    className="block w-full py-3 text-center text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button 
                    className="block w-full bg-[#6c47ff] text-white rounded-full font-medium py-3 hover:bg-[#5a3ce5] transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/"
                  className="block py-3 px-4 text-gray-700 hover:text-primary-600 font-medium hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              </SignedIn>
            </div>*/}

            <div className="px-4 pt-4">
              <Link
                href="/donate"
                className="block w-full bg-emerald-700 text-white rounded-full font-medium py-3 text-center hover:bg-emerald-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar