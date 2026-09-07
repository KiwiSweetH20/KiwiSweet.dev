"use client";

import Link from "next/link";
import Image from "next/image";

import Kiwi from "../public/Kiwi.svg";

// export default function Navbar() {
//   return (
//     <nav className=" sticky w-max max-w-[90vw] left-1/3 top-6 justify-center z-100 flex items-center gap-4 border border-white/20 rounded-3xl bg-white/5
//                     px-6 py-3 backdrop-blur-x1">
//       <div className="">Logo</div>
//       <div className="h-6 w-px bg-white/20"></div>
//         <Link className="inline-block" href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/projects">Projects</Link>
//     </nav>

//   );
// }

export default function Navbar() {
  return (
    <nav
      className="fixed top-6 z-50 left-1/2 -translate-x-1/2 flex items-center gap-4 border border-white/20 rounded-3xl bg-white/5 
                    px-6 py-3 backdrop-blur-md"
    >
      <div className="">
        <Image
          src={Kiwi}
          alt="Me"
          className=" w-10 h-10 rounded-full object-cover overflow-hidden "
        />
      </div>
      <div className="h-6 w-px bg-white/20"></div>
      <Link
        className="inline-block text-ctp-green font-(family-name:--font-comic-relief)"
        href="/"
      >
        Home
      </Link>
      <Link
        className="inline-block text-ctp-green font-(family-name:--font-comic-relief)"
        href="/about"
      >
        About
      </Link>
      <Link
        className="inline-block text-ctp-green font-(family-name:--font-comic-relief)"
        href="/projects"
      >
        Projects
      </Link>
    </nav>
  );
}
