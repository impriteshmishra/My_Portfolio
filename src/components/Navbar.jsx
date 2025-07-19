import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Pritesh Mishra
      </Link>
      <ul className="flex gap-6 text-gray-700  font-medium">
        <li>
          <Link href="/about" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar