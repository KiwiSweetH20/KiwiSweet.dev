"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { ExternalLink } from "react-feather";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: string;
  title: string;
  description: string;
  linkText: string;
  gitLink: string;
  site: string;
}

const GitHubIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 98 96"
    className="fill-current"
    xmlns="http://w3.org"
    aria-hidden="true"
  >
    <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" />
  </svg>
);

const PROJECTS: Project[] = [
  {
    id: "wordle",
    title: "Wordle",
    description: "The Wordle game where you try to guess the word.",
    linkText: "/Wordle",
    gitLink: "https://github.com/KiwiSweetH20/Wordle",
    site: "https://wordle-blue-gamma.vercel.app/",
  },
  {
    id: "toast-pop-ups",
    title: "Toast Pop-Ups",
    description: "A simple toast pop-up notification system.",
    linkText: "/Toast-Pop-Ups",
    gitLink: "https://github.com/KiwiSweetH20/Toast-Pop-Ups",
    site: "https://toast-pop-ups.vercel.app/",
  },
  {
    id: "blog-project",
    title: "Blog Project",
    description: "A simple blog project with interactive elements.",
    linkText: "/Blog-Project",
    gitLink: "https://github.com/KiwiSweetH20/Blog-Project",
    site: "https://blog-project-jade-five.vercel.app/",
  },
];

const subscribe = () => () => {};

export default function Projects() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <section className="flex w-full flex-col justify-center gap-6">
      <div className="mx-auto inline-flex items-center gap-3">
        {isMounted ? (
          <Image
            src="/images/Kiwi.svg"
            alt="Kiwi Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <Skeleton className="h-12 w-12 rounded-full" />
        )}
        <h2 className="text-4xl font-bold text-taupe-800 dark:text-kiwi-9">
          Projects
        </h2>
      </div>

      <div className="mx-auto mt-2 grid w-full max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, linkText, gitLink, site } = project;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-kiwi-9 dark:border-taupe-400 transition-all duration-300 ease-in-out shadow-taupe-800/40 dark:shadow-kiwi-9/20 md:hover:scale-105 md:hover:border-taupe-800 md:hover:shadow-xl md:dark:hover:border-kiwi-9">
      <div className="flex h-full flex-col justify-between p-5 text-left transition-all duration-300 md:group-hover:blur-xs">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-taupe-800 dark:text-kiwi-9">
            {title}
          </h3>
          <p className="text-taupe-800 dark:text-taupe-800">{description}</p>
        </div>

        {/* MOBILE action bar at the bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-kiwi-9/30 pt-4 dark:border-taupe-400/30 md:hidden">
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg py-1.5 text-sm font-bold text-taupe-800 active:scale-95 dark:text-kiwi-9"
          >
            {GitHubIcon}
            <span>Code</span>
          </a>

          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-kiwi-9/20 px-3.5 py-2 text-sm font-bold text-taupe-800 active:scale-95 dark:bg-taupe-400/20 dark:text-taupe-800"
          >
            <span>Live Site</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* DESKTOP Hover Overlay */}
      <div className="hidden md:flex md:absolute md:inset-0 md:flex-col md:items-center md:justify-center md:gap-4 md:bg-kiwi-6/80 md:p-4 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-within:opacity-100 md:dark:bg-taupe-50/80">
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl font-bold text-taupe-800 transition-colors duration-300 hover:text-taupe-600 dark:text-kiwi-9 dark:hover:text-taupe-500 "
        >
          {GitHubIcon}
          <span>{linkText}</span>
        </a>

        <a
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-2xl px-3 py-1 font-bold text-taupe-700 transition-transform duration-300 hover:scale-110 dark:hover:text-taupe-500 dark:text-taupe-800"
        >
          <span>Live Site</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
