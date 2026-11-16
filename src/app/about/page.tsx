"use client";

import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
import { useSyncExternalStore } from "react";

import Skills from "../../components/Skills";
import { Skeleton } from "@/components/ui/skeleton";

const subscribe = () => () => {};

export default function Page() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const bulb = [
      <Image
        src="/images/bulb.svg"
        alt="light bulb"
        key="crypto.randomUUID()"
        width="10"
        height="10"
        className="w-10 h-10 "
      />,
    ];

  const puzzel = [
      <Image
        src="/images/puzzel.svg"
        alt="puzzel piece"
        key="crypto.randomUUID()"
        width="10"
        height="10"
        className="w-10 h-10 "
      />,
    ];

  const graduateHat = [
      <Image
        src="/images/graduateHat.svg"
        alt="graduate hat"
        key="crypto.randomUUID()"
        width="10"
        height="10"
        className="w-10 h-10 "
      />,
    ];

  const growth = [
      <Image
        src="/images/growth.svg"
        alt="growth"
        key="crypto.randomUUID()"
        width={40}
        height={40}
        className="w-10 h-10 object-contain "
      />,
    ];

  return (
    <div>
      <div className=" flex flex-col justify-center w-full max-w-5xl mx-auto py-10 lg:py-25 md:py-32 font-(family-name:--font-comic-relief)">
        <div className="flex flex-col gap-2 justify-baseline w-full px-5">
          <p className=" text-4xl dark:text-kiwi-9 text-kiwi-11 font-bold">
            About Me
          </p>
          <p className="pb-2 text-taupe-800 text-lg">
            A LITTLE ABOUT MY JOURNEY
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center w-full p-5 gap-5">
          <div className="basis-1/3 justify-center md:items-center lg:items-baseline">
            {isMounted ? (
              <Image
                src="/images/Gen.jpeg"
                alt="KiwiSweet"
                key="crypto.randomUUID()"
                width="280"
                height="300"
                className=" h-auto w-auto rounded-md"
              />
            ) : (
              <Skeleton className="w-80 h-106.5 rounded-md" />
            )}
          </div>
          <div className="flex flex-col gap-5 justify-around items-baseline md:justify-center lg:justify-baseline basis-2/3 ">
            <div className="flex-col text-lg text-justify px-3 text-taupe-800">
              <p className="pb-3 text-3xl">
                It started with a website and a spark of creativity.
              </p>
              <p className="pb-3">
                I&apos;m a creative and driven individual who enjoys exploring
                the intersection of technology, design and problem-solving. I
                have a passion for bringing ideas to life and finding new ways
                to turn imagination into something meaningful.
              </p>
              <p className="pb-3">
                I&apos;m naturally curious, enjoy thinking outside the box and
                love exploring new possibilities. Whether I&apos;m experimenting
                with a new idea, learning a skill or working through a
                challenge, I find excitement in the process of discovering what
                I can create.
              </p>
            </div>

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
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/genevieve-van-niekerk-6013653b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
              >
                <span className="dark:text-kiwi-9 text-kiwi-11">
                  <Linkedin />
                </span>
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  LinkedIn
                </span>
              </a>
              {/* <a
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
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  X
                </span>
              </a> */}
              {/* <a
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
                <span className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded-md dark:bg-taupe-400/40 bg-kiwi-6/40 backdrop-blur-sm px-3 py-1.5 text-sm dark:text-kiwi-9 text-taupe-800 font-medium opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap dark:border-kiwi-9 border-kiwi-11 border-2">
                  BlueSky
                </span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-15 mb-15">
          <p className="text-4xl text-center text-kiwi-9">
            It started with a website and a spark of creativity.
          </p>
          <p className="text-lg text-center text-taupe-800">
            It started with a website and a spark of creativity.
          </p>
          <div className=" flex flex-col gap-3 w-4xl justify-center p-3 border-3 border-taupe-500 rounded-sm">
            <p className="text-3xl text-center text-kiwi-9">
              R&M Web Developers
            </p>
            <p className="text-center text-kiwi-9">
              WordPress · Divi · Client Websites
            </p>
            <p className="text-center text-taupe-800">
              My journey into web development began when I had the oppertunity
              to work with R&M Web Developers, where I gained hands-on
              experience creating client websites using WordPress and Divi.
            </p>
            <p className="text-center text-taupe-800">
              This experience introduced me to the creative side of web
              delopment and sparked my interest in combining technology and
              design to bring ideas to life.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-15">
            <p className="text-3xl text-center text-kiwi-9">
              Always moving forward with curiosity
            </p>
            <div className="flex flex-row gap-4 w-4xl">
              <div className="bg-kiwi-3 w-fit h-fit rounded-2xl p-3">
                <p className="w-10 h-10">
                  {bulb}
                </p>
                <p>Creativity</p>
                <p>Exploring ideas and new possiblities.</p>
              </div>
              <div className="bg-kiwi-3 w-fit h-fit rounded-2xl p-3">
                <p className="w-10 h-10">
                  {puzzel}
                </p>
                <p>Problem-solving</p>
                <p>Finding ways to overcome challenges.</p>
              </div>
              <div className="bg-kiwi-3 w-fit h-fit rounded-2xl p-3">
                <p className="w-10 h-10">
                  {graduateHat}
                </p>
                <p>Learning</p>
                <p>Constantly developing new skills.</p>
              </div>
              <div className="bg-kiwi-3 w-fit h-fit rounded-2xl p-3">
                <p className="w-10 h-10">
                  {growth}
                </p>
                <p>Growth</p>
                <p>Taking on challenges and imporoving.</p>
              </div>
              </div>
              <div>
                <Skills />
              </div>
              <div className="flex flex-col justify-center gap-4 w-4xl">
                <p className="text-3xl text-kiwi-9">
                  The journey is just getting started.
                </p>
                <p className=" text-taupe-800">
                  I&apos;m excited to keep learning, take on new challenges and find oppertunites to contribute my creativity and growing technical skills.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
