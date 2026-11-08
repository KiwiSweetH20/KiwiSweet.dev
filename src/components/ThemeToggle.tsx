"use client";

import { useTheme } from "@teispace/next-themes";
import { useSyncExternalStore } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isMounted || !resolvedTheme) {
    return (
      <div className="flex w-full justify-center md:justify-end mt-36 md:mt-12 md:pr-25">
        <Skeleton className="w-13 h-13 rounded-lg" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex w-full justify-center md:justify-end mt-36 md:mt-12 md:pr-25">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="rounded-lg bg-slate-3 dark:bg-slate-6 text-slate-12 cursor-pointer hover:opacity-80 transition-all duration-200"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          /* Sun Icon */
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-13 h-13 text-kiwi-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          /* Moon Icon */
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-13 h-13 text-taupe-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
