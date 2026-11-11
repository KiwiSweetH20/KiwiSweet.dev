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
        loading="eager"
        className="shrink-0 size-12 rounded-full object-cover overflow-hidden hover:animate-spin"
      />
    ) : (
      <Skeleton key="kiwi-skeleton" className="flex w-7 h-7 rounded-full m-2" />
    ),
  ];

  return (
    <header className="fixed top-10 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 dark:border-2 border-3 border-kiwi-9 rounded-3xl dark:bg-taupe-100/30 bg-kiwi-3/30 px-3 py-3 backdrop-blur-md whitespace-nowrap w-max max-w-full overflow-x-auto">

        <div className="shrink-0 px-2">{kiwiIcon}</div>
        <div className="h-6 w-px bg-white/20"></div>
        <Link
          className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief) px-2 pl-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief) px-2"
          href="/about"
        >
          About
        </Link>
        <Link
          className="inline-block dark:text-kiwi-9 text-taupe-950 hover:text-kiwi-11 dark:hover:text-taupe-600 font-(family-name:--font-comic-relief) px-2"
          href="/projects"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
