'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-white shadow-sm fixed w-full py-2 z-10 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex flex-row items-center'>
              <Logo className='w-12 h-12 text-blue-600 mr-1' />
              <span className='text-blue-600 font-bold text-2xl'>Tsang</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-10 items-center'>
            <Link href='#home-hero'>
              <span className='text-gray-700 hover:text-blue-600'>Home</span>
            </Link>
            <Link href='#home-about'>
              <span className='text-gray-700 hover:text-blue-600'>About</span>
            </Link>
            <Link href='#home-getStarted'>
              <span className='inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700'>
                Get Started
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-blue-600 hover:text-blue-700 focus:outline-none'
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <nav className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              <span className='block text-gray-700 hover:text-blue-600'>
                Home
              </span>
            </Link>
            <Link href='/about' onClick={() => setIsMenuOpen(false)}>
              <span className='block text-gray-700 hover:text-blue-600'>
                About
              </span>
            </Link>
            <Link href='/get-started' onClick={() => setIsMenuOpen(false)}>
              <span className='block text-gray-700 hover:text-blue-600'>
                Get Started
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
