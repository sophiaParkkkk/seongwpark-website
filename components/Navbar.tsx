"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50">
      <ul className="flex justify-center space-x-6 text-white text-lg">
        <li><Link href="/#home" className="hover:underline">Home</Link></li>
        <li><Link href="/#aboutme" className="hover:underline">About</Link></li>
        <li><Link href="/#experience" className="hover:underline">Experience</Link></li>
        <li><Link href="/#projects" className="hover:underline">Projects</Link></li>
        <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}
