'use client'
// required if you’re using client-side interactivity
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-[#150964] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/panda_icon.jpg"
          alt="icon"
          width={70}
          height={70}
          className="rounded-full"
        />

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
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

