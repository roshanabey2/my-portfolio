'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../app/navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  // Keep the ref in sync with state

  // open the nav 1s after mount
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsOpen(true), 800)
    return () => clearTimeout(timeoutId)
  }, [])

  // close nav when scrolled past 20%
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;

      if (scrollFraction >= 0.2 && isOpen) {
        setIsOpen(false)
      } else if ((scrollFraction <= 0.1) && !isOpen) {
        setIsOpen(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // in case you're already past 20% on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])



  return (
    <>
      <div className="navbar-icon hover:grayscale-10 hover:brightness-75" onClick={() => setIsOpen(open => !open)} >  <Image
        src="/panda_icon.jpg"
        alt="icon"
        width={35}
        height={35}
        className="rounded-full"
      />
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`} >
        <div className="flex justify-end items-center mx-5">


          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/writings">Writings</Link>
            </li>
            <li>
              <Link href="/links">Links</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

