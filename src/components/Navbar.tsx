"use client";

import Link from "next/link";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const subscribe = () => () => {};

export default function Navbar() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const kiwiIcon = [
    isMounted ? (
      <Image
        src="/images/Kiwi.svg"
        alt="Me"
        key="crypto.randomUUID()"
        width="12"
        height="12"
        className=" w-12 h-12 rounded-full object-cover overflow-hidden hover:animate-spin"
      />
    ) : (
      <Skeleton
        key="kiwi-skeleton"
        className="inline-flex w-7 h-7 rounded-full m-2"
      />
    ),
  ];

  return (
    <nav className="fixed top-10 z-50 left-1/2 -translate-x-1/2 flex items-center gap-4 dark:border-2 border-3 border-kiwi-9 rounded-3xl dark:bg-taupe-100/30 bg-kiwi-3/30 px-6 py-3 backdrop-blur-md whitespace-nowrap w-max-content max-w-calc(100vw-2rem)">
      <div className="">
        {kiwiIcon}
      </div>
      <div className="h-6 w-px bg-white/20"></div>
      <Link
        className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief)"
        href="/"
      >
        Home
      </Link>
      <Link
        className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief)"
        href="/about"
      >
        About
      </Link>
      <Link
        className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief)"
        href="/projects"
      >
        Projects
      </Link>
    </nav>
  );
}
