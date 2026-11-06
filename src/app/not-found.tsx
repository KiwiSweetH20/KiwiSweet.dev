import React from "react";
import Link from "next/link";

export const NotFound = () => {
    return (
<main className="flex justify-center w-full min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold dark:text-kiwi-9 text-kiwi-11">404</p>
    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-taupe-900 sm:text-7xl">Page not found</h1>
    <p className="mt-6 text-lg font-medium text-pretty text-taupe-800 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <Link className="mt-10 flex items-center justify-center gap-x-6" href="/">
      <a className="text-sm font-semibold text-taupe-900 dark:hover:text-kiwi-9 hover:text-kiwi-11 transition-colors duration-200">Back to home page <span aria-hidden="true">&rarr;</span></a>
    </Link>
  </div>
</main>
    )
}

export default NotFound;