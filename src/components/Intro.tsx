"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react"

import Time from "./Time";
import StatusCard from "./StatusCard";
import PixelSprite from "./PixelSprite";
import SkeletonText from "./SkeletonText";

const subscribe = () => () => {};

export default function Intro() {
const isMounted = useSyncExternalStore(subscribe, () => true, () => false);

  const Pfp = [
    <Image
      src="/images/KiwiSweet.jpg"
      alt="Me"
      key="crypto.randomUUID()"
      width="80"
      height="80"
      className="w-20 h-20 lg:w-30 lg:h-30 md:w-30 md:h-30 rounded-full object-cover object-bottom"
    />,
  ];
  const kiwiIcon = [
    <Image
      src="/images/Kiwi.svg"
      alt="Me"
      key="crypto.randomUUID()"
      width="12"
      height="12"
      className=" w-12 h-12 rounded-full object-cover "
    />,
  ];

  return (
    <div className="flex flex-row border-taupe-800 dark:border-kiwi-9 border-2 rounded-2xl w-full max-w-4xl md:p-4 mx-auto bg-kiwi-9/70 dark:bg-taupe-100/20 shadow-xl shadow-taupe-800/40 dark:shadow-kiwi-9/10">
      <div className="basis-1/5 p-3 flex flex-col items-center">
        <div className="">{Pfp}</div>
        <StatusCard />
        {/* <Socials /> */}
        <PixelSprite bgImage={{ light: "/images/DayBg.png", dark: "/images/NightBg.jpg" }} />
      </div>
      <div className="basis-4/5 p-3 flex flex-col">
        <div className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-col">
            <span className="dark:text-kiwi-9 text-taupe-900 text-2xl">Genevieve</span>
            <span className=" text-taupe-800">A.K.A KiwiSweet</span>
          </div>
          <div className=" text-taupe-800"><Time /></div>
          
        </div>
        <div className="flex flex-col my-2">
          <div className="inline-flex items-center my-1">
            {kiwiIcon}
            <span className=" inline-flex dark:text-kiwi-9 text-taupe-900 text-2xl">
              Hi! I&apos;m Genevieve
            </span>
          </div>
          {!isMounted ? (
            <div className="m-1 mt-2">
              <SkeletonText/>
            </div>
            )
            : (
              <span className="m-1 text-taupe-800">
            I&apos;m learning and growing as a front-end developer, creating
            websites that are interactive, creative, and fun to use. I&apos;m
            always experimenting, learning new things, and turning ideas into
            something I can bring to life with code.
          </span>
            )
          }
        </div>
      </div>
    </div>
  );
}
