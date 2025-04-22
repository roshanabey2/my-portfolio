'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../app/navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(prev => !prev)
  return (
    <>
      <div className="navbar-icon hover:grayscale-10 hover:brightness-75" onClick={toggleNav}>  <Image
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

