import Image from "next/image";

import Time from "./Time.js";
import Socials from "./Socials.js";
import StatusCard from "./StatusCard.js";

export default function Intro() {
  const Pfp = [
    <Image
      src="/KiwiSweet.jpg"
      alt="Me"
      key="crypto.randomUUID()"
      width="80"
      height="80"
      className="w-20 h-20 lg:w-30 lg:h-30 md:w-30 md:h-30 rounded-full object-cover object-bottom"
    />,
  ];
  const kiwiIcon = [
    <Image
      src="/Kiwi.svg"
      alt="Me"
      key="crypto.randomUUID()"
      width="12"
      height="12"
      className=" w-12 h-12 rounded-full object-cover "
    />,
  ];

  return (
    <div className="flex flex-row dark:border-kiwi-9 border-taupe-800 border-2 rounded-2xl w-full max-w-4xl md:p-4 mx-auto dark:bg-taupe-900/20 bg-kiwi-11/50 shadow-xl dark:shadow-kiwi-9/10 shadow-taupe-800/40">
      <div className="basis-1/5 p-3 flex flex-col items-center">
        <div className="">{Pfp}</div>
        <StatusCard />
        <Socials />
      </div>
      <div className="basis-4/5 p-3 flex flex-col">
        <div className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-col">
            <span className="dark:text-kiwi-9 text-taupe-900 text-2xl">Genevieve</span>
            <span className="dark:text-taupe-400 text-taupe-800">A.K.A KiwiSweet</span>
          </div>
          <div className="dark:text-taupe-400 text-taupe-800"><Time /></div>
          
        </div>
        <div className="flex flex-col my-2">
          <div className="inline-flex items-center my-1">
            {kiwiIcon}
            <span className=" inline-flex dark:text-kiwi-9 text-taupe-900 text-2xl">
              Hi! I&apos;m Genevieve
            </span>
          </div>
          <span className="m-1 dark:text-taupe-400 text-taupe-800">
            I&apos;m learning and growing as a front-end developer, creating
            websites that are interactive, creative, and fun to use. I&apos;m
            always experimenting, learning new things, and turning ideas into
            something I can bring to life with code.
          </span>
        </div>
      </div>
    </div>
  );
}
