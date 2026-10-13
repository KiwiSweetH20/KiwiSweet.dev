import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";

import IntroTools from "../../components/IntroTools.js";

export default function Page() {
  return (
    <div>
      {/* <MainBackground className="-z-10" /> */}
      <div className=" flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-32 font-(family-name:--font-comic-relief)">
        <div className="flex flex-row justify-center w-full border-2 p-5 gap-5">
          <div className="basis-1/3 ">
            <Image
              src="/Gen.jpeg"
              alt="Me"
              key="crypto.randomUUID()"
              width="480"
              height="500"
              className="rounded-l-md"
            />
          </div>
          <div className="flex flex-col gap-5 justify-start basis-2/3 border-2">
            <div className="flex-col text-lg text-justify  px-3">
              <p className="pb-6">
                I&apos;m a creative-minded web developer who enjoys bringing
                ideas to life through code and design.
              </p>
              <p className="pb-6">
                With experience using JavaScript, React, Tailwind CSS, and
                GitHub, I&apos;m building my skills in creating modern,
                responsive, and interactive web experiences.
              </p>
              <p className="pb-6">
                I love exploring new possibilities, experimenting with ideas,
                and finding creative ways to solve problems. My goal is to
                combine design and technology to create digital experiences that
                are not only functional but memorable.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center px-2 gap-2">
              <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="text-ctp-green">
                  <GitHub />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md bg-taupe-800/40 backdrop-blur-sm px-3 py-1.5 text-sm text-ctp-green opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border-ctp-green border-2">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="text-ctp-green">
                  <Linkedin />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md bg-taupe-800/40 backdrop-blur-sm px-3 py-1.5 text-sm text-ctp-green opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border-ctp-green border-2">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/KiwiSweetH20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="text-ctp-green">
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
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md bg-taupe-800/40 backdrop-blur-sm px-3 py-1.5 text-sm text-ctp-green opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border-ctp-green border-2">
                  X
                </span>
              </a>
              <a
                href="..."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="text-ctp-green">
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"
                    ></path>
                  </svg>
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md bg-taupe-800/40 backdrop-blur-sm px-3 py-1.5 text-sm text-ctp-green opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border-ctp-green border-2">
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
