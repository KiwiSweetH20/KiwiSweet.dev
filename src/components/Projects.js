import Image from "next/image";

import {ExternalLink} from 'react-feather';

export default function Projects() {
  const myProjects = [
    {
      id: crypto.randomUUID(),
      title: "Wordle",
      description: "The Wordle game where you try to guess the word.",
      link: " /Wordle",
      gitLink: "https://github.com/KiwiSweetH20/Wordle",
      site: "https://wordle-blue-gamma.vercel.app/"
    },
    {
      id: crypto.randomUUID(),
      title: "Toast Pop-Ups",
      description: "A simple toast pop-up notification system.",
      link: "/Toast-Pop-Ups",
      gitLink:"https://github.com/KiwiSweetH20/Toast-Pop-Ups",
      site: "https://toast-pop-ups.vercel.app/",
    },
    {
      id: crypto.randomUUID(),
      title: "Blog Project",
      description: "A simple blog project with interactive elements.",
      link: "/Blog-Project",
      gitLink:"https://github.com/KiwiSweetH20/Blog-Project",
      site: "https://blog-project-jade-five.vercel.app/",
    },
  ];
  return (
    <div className="p-20 flex flex-col w-full h-fit justify-center">
      <div className="inline-flex rounded-2xl mx-auto items-center md:items-left lg:items-left">
        <Image
          src="/Kiwi.svg"
          alt="Me"
          width="12"
          height="12"
          className="w-12 h-12 rounded-full object-cover "
        />
        <span className="dark:text-kiwi-9 text-taupe-800 inline-flex text-4xl font-bold ">
          Projects
        </span>
      </div>
      <div className="flex flex-col mx-auto rounded-2xl md:flex-row lg:flex-row w-full sm:max-w-full md:max-w-4xl lg:max-w-4xl text-center md:text-left lg:text-left h-190 sm:h-150 md:h-fit lg:h-fit mt-5">
        {myProjects.map((project) => (
          <ProjectBox
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            gitLink={project.gitLink}
            site={project.site}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectBox({ title, description, link, gitLink, site }) {
  const gitIcon = [
    <svg
      width="24"
      height="24"
      viewBox="0 0 98 96"
      className="fill-current transition-colors duration-300"
      xmlns="http://w3.org"
      key="kiwiHoverIcon"
    >
      <g clipPath="url(#clip0_730_27136)">
        <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" />
      </g>
      <defs>
        <clipPath id="clip0_730_27136">
          <rect width="98" height="96" />
        </clipPath>
      </defs>
    </svg>,
  ];

  return (
    <div className=" group relative overflow-hidden dark:border-taupe-900 border-kiwi-9 border-2 basis-6xl rounded-2xl m-5 hover:shadow-xl dark:shadow-kiwi-9/10 shadow-taupe-800/40 hover:scale-105 transition-transform duration-300 ease-in-out dark:hover:border-kiwi-9 hover:border-taupe-800 w-full">
      <div className="group-hover:blur-xs p-3 flex flex-col dark:hover:bg-taupe-900/30 hover:bg-kiwi-11/30 transition-colors duration-300">
        <span className="dark:text-kiwi-9 text-taupe-800 pb-2 font-bold text-2xl m-2">
          {title}
        </span>
        <span className="mb-2 mx-2 dark:text-taupe-400 text-kiwi-11">{description}</span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center dark:hover:bg-taupe-950/60 hover:bg-kiwi-6/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 ">
        <span className="inline-flex items-center dark:text-kiwi-9 text-taupe-800 font-bold text-2xl">
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="inline-flex dark:hover:text-taupe-500 hover:text-taupe-600 transition-colors duration-300 ">
            {gitIcon}{link}
          </a>
        </span>
        <button className=" m-3 p-0.5 px-2 rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={site} target="_blank" rel="noopener noreferrer" className="dark:text-taupe-500 text-taupe-700 font-bold inline-flex items-center hy-auto">
            Site <ExternalLink size={20}/> 
          </a>
          </span>
        </button>
      </div>
    </div>
  );
}
