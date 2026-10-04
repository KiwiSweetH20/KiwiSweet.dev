"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 flex items-center gap-4 border-2 border-ctp-green/50 rounded-3xl bg-taupe-900/10 px-6 py-3 backdrop-blur-md whitespace-nowrap w-max-content max-w-[calc(100vw-2rem)]">
      <div className="">
        <Image
          src="/Kiwi.svg"
          alt="Me"
          width="10"
          height="10"
          className="w-10 h-10 rounded-full object-cover overflow-hidden hover:animate-spin "
        />
      </div>
      <div className="h-6 w-px bg-white/20"></div>
      <Link
        className="inline-block text-ctp-green hover:text-taupe-500 font-(family-name:--font-comic-relief)"
        href="/"
      >
        Home
      </Link>
      <Link
        className="inline-block text-ctp-green hover:text-taupe-500 font-(family-name:--font-comic-relief)"
        href="/about"
      >
        About
      </Link>
      <Link
        className="inline-block text-ctp-green hover:text-taupe-500 font-(family-name:--font-comic-relief)"
        href="/projects"
      >
        Projects
      </Link>
    </nav>
  );
}
