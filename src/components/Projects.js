import Image from "next/image";

import Kiwi from "../public/Kiwi.svg";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Wordle",
      description: "The Wordle game where you try to guess the word.",
      link: "Git/Wordle",
      href: "https://wordle-blue-gamma.vercel.app/"
    },
    {
      id: 2,
      title: "Toast Pop-Ups",
      description: "A simple toast pop-up notification system.",
      link: "Git/Toast-Pop-Ups",
      href: "https://toast-pop-ups.vercel.app/"
    },
    {
      id: 3,
      title: "Blog Project",
      description: "A simple blog project with interactive elements.",
      link: "Git/blog-project",
      href: "https://blog-project-jade-five.vercel.app/"
    },
  ];
  return (
    <>
      <div className="flex flex-row rounded-2xl w-3/4 mx-auto mt-20">
        <Image
          src={Kiwi}
          alt="Me"
          className=" w-12 h-12 rounded-full object-cover "
        />
        <span className="text-ctp-green text-4xl font-bold inline-flex items-center">
          Projects
        </span>
      </div>
      <div className="flex flex-row rounded-2xl w-3/4 mx-auto m-5 h-70">
        {myProjects.map((project) => (
          <ProjectBox
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            href={project.href}
          />
        ))}
      </div>
    </>
  );
}

function ProjectBox({ title, description, link, href }) {
  return (
    <div className=" group relative overflow-hidden border-taupe-900 border-2 basis-6xl h-fit rounded-2xl mx-5 m-5 hover:shadow-xl shadow-ctp-green/10 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-ctp-green">
      <div className="group-hover:blur-xs p-3 flex flex-col hover:bg-taupe-900/30">
        <span className="text-ctp-green pb-2 font-bold text-2xl m-2">
          {title}
        </span>
        <span className="mb-2 mx-2">{description}</span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-taupe-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <span className="text-white font-semibold text-lg mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-ctp-green hover:text-taupe-500">
            {link}
          </a>
        </span>
    </div>
    </div>
  );
}
