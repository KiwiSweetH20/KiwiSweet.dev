import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";

import IntroTools from "../../components/IntroTools.js";

export default function Page() {
  return (
    <div>
      {/* <MainBackground className="-z-10" /> */}
      <div className=" flex flex-col justify-center w-full max-w-5xl mx-auto py-32 font-(family-name:--font-comic-relief)">
        <div className="flex justify-baseline w-full px-5">
          <p className=" text-4xl dark:text-kiwi-9 text-kiwi-11 font-bold">
            About Me
          </p>
        </div>
        <div className="flex flex-row justify-center w-full p-5 gap-5">
          <div className="basis-1/3 items-baseline">
            <Image
              src="/Gen.jpeg"
              alt="Me"
              key="crypto.randomUUID()"
              width="280"
              height="300"
              className=" h-auto w-auto rounded-md"
            />
          </div>
          <div className="flex flex-col gap-5 justify-around items-baseline basis-2/3 ">
            <div className="flex-col text-lg text-justify px-3 dark:text-taupe-400 text-taupe-800">
              <p className="pb-6">
                I&apos;m a creative and driven individual with a passion for
                bringing ideas to life through technology and design.
              </p>
              <p className="pb-6">
                I enjoy exploring new possibilities, thinking outside the box,
                and finding creative solutions to challenges. I&apos;m naturally
                curious and always eager to learn, pushing myself beyond my
                comfort zone to develop new skills and turn unfamiliar problems
                into opportunities for growth.
              </p>
              <p className="pb-6">
                I believe that creativity, determination, and a willingness to
                figure things out can take an idea a long way. I&apos;m excited
                to contribute fresh perspectives, embrace new challenges, and
                grow alongside a team where I can make a meaningful impact.
              </p>
            </div>

            {/* socials */}
            <div className="flex flex-row items-center justify-center px-2 gap-2">
              <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <GitHub />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <Linkedin />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
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
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  X
                </span>
              </a>
              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"
                    ></path>
                  </svg>
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-800/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  BlueSky
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <IntroTools />
        </div>
      </div>
    </div>
  );
}
