import React from "react";
import Image from "next/image";

import KiwiSweet from "../public/KiwiSweet.jpg";
import Kiwi from "../public/Kiwi.svg";

function Home() {
  return (
    <main className="isolate overflow-hidde px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 pt-24 font-(family-name:--font-comic-relief)">
      {/* <div className="fixed inset-0-z-10 bg-slate-950">
        {/* {interactive background} */}
      {/* </div> */}

      {/* Intro */}
      <div className="flex flex-row border-ctp-green border-2 rounded-2xl w-3/4 mx-auto">
        <div className="basis-1/6 p-3 flex flex-col items-center">
          <div className="">
            <Image
              src={KiwiSweet}
              alt="Me"
              className="w-30 h-30 rounded-full object-cover object-bottom"
            />
          </div>
          <span>status</span>
          <span>socials</span>
          <span>clock</span>
        </div>
        <div className="basis-5/6 p-3 flex flex-col">
          <span className="text-ctp-green text-2xl">Genevieve</span>
          <span className="">A.K.A KiwiSweet</span>
          <div className="inline-flex items-center">
            <Image
              src={Kiwi}
              alt="Me"
              className=" w-12 h-12 rounded-full object-cover "
            />
            <span className=" inline-flex text-ctp-green text-2xl">
              About Me
            </span>
          </div>
          <span>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
          <div className="inline-flex items-center">
            <Image
              src={Kiwi}
              alt="Me"
              className=" w-12 h-12 rounded-full object-cover "
            />
            <span className=" inline-flex text-ctp-green text-2xl">Tools</span>
          </div>
          <span>
            React · Next.js · Tailwind · Vercel · Node.js · Git · Github
          </span>
          {/* alt + 250 = · */}
          <div className="inline-flex items-center">
            <Image
              src={Kiwi}
              alt="Me"
              className=" w-12 h-12 rounded-full object-cover "
            />
            <span className=" inline-flex text-ctp-green text-2xl">
              Languages
            </span>
          </div>
          <span>Javascript | Jsx | Html | CSS </span>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-row rounded-2xl w-3/4 mx-auto mt-20">
        <Image
          src={Kiwi}
          alt="Me"
          className=" w-12 h-12 rounded-full object-cover "
        />
        <span className="text-ctp-green text-4xl font-bold inline-flex items-center">Projects</span>
      </div>
      <div className="flex flex-row rounded-2xl w-3/4 mx-auto m-5 h-70">
      <div className=" border-taupe-900 border-2 basis-6xl h-fit rounded-2xl mx-5 m-5 hover:shadow-xl shadow-ctp-green/10 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-ctp-green">
        <div className="hover:blur-xs p-3 flex flex-col hover:bg-taupe-900/30">
          <span className="text-ctp-green pb-2 font-bold text-2xl m-2">Wordle</span>
        <span className="mb-2 mx-2">The Wordle game where you try to guess the word.</span>
        </div>
      </div>

      <div className=" border-taupe-900  border-2 basis-6xl h-fit rounded-2xl mx-5 m-5 p-5 flex flex-col hover:shadow-xl shadow-ctp-green/10 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-ctp-green">
       <dive><Image
          src={KiwiSweet}
          alt="Me"
          className=" w-full h-30 object-bottom object-cover m-2"
        /></dive>
        <span className="text-ctp-green pb-2 font-bold text-2xl">Wordle</span>
        <span>The Wordle game where you try to guess the word.</span>
      </div>

      <div className=" border-taupe-900  border-2 basis-6xl h-fit rounded-2xl mx-5 m-5 p-5 flex flex-col hover:shadow-xl shadow-ctp-green/10 hover:scale-105 transition-transform duration-300 ease-in-out hover:border-ctp-green">
       <dive><Image
          src={KiwiSweet}
          alt="Me"
          className=" w-full h-1/3 object-top m-2"
        /></dive>
        <span className="text-ctp-green pb-2 font-bold text-2xl">Wordle</span>
        <span>The Wordle game where you try to guess the word.</span>
      </div>
      </div>
    </main>
  );
}

export default Home;
