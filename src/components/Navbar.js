'use client'
// required if you’re using client-side interactivity

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Roshan.dev</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">About Me</Link>
          </li>
          <li>
            <Link href="/writings" className="hover:text-blue-400">Writings</Link>
          </li>
          <li>
            <Link href="/links" className="hover:text-blue-400">Links</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

