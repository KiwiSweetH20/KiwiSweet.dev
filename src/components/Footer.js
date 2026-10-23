"use client";

import React from "react";
import { format } from "date-fns/format";

import { Clock, GitHub, Linkedin } from "react-feather";

export default function Footer() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, [50]);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  return (
    <nav className="flex flex-col gap-2 md:flex-row lg:flex-row items-center md:place-items-center p-5 w-3/4 mx-auto left-1/2 border-2 dark:border-kiwi-9 border-taupe-800 m-5 rounded-2xl dark:bg-taupe-900/20 bg-kiwi-3">
      <div className="basis-1/3 items-center justify-center dark:text-taupe-400 text-kiwi-11">
        <p>@ 2026 Genevieve Van Niekerk</p>
      </div>

      {/* Time */}
      <div className="basis-2/3 inline-flex items-center justify-center dark:text-taupe-400 text-kiwi-11">
        <Clock width="20" height="20" />
        <p className="inline-flex items-center px-2 dark:text-kiwi-9 text-taupe-800">
          {time ? format(time, "hh:mm:ss") : "---"}
        </p>

        {/* socials */}
        <div className="flex flex-row items-center justify-center px-2 gap-2">
          <a
            href="https://github.com/KiwiSweetH20"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block cursor-pointer"
          >
            <span className="dark:text-kiwi-9 text-taupe-800">
              <GitHub />
            </span>
            <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-taupe-800 border-2">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block cursor-pointer"
          >
            <span className="dark:text-kiwi-9 text-taupe-800">
              <Linkedin />
            </span>
            <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-taupe-800 border-2">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/KiwiSweetH20"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block cursor-pointer"
          >
            <span className="dark:text-kiwi-9 text-taupe-800">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-taupe-800 border-2">
              X
            </span>
          </a>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block cursor-pointer"
          >
            <span className="dark:text-kiwi-9 text-taupe-800">
              <svg width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"></path></svg>
            </span>
            <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-taupe-800 border-2">
              BlueSky
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
