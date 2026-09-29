import Image from "next/image";

import Clock from "./Clock.js";
import Socials from "./Socials.js";
import StatusCard from "./StatusCard.js";
import IntroTools from "./IntroTools.js";

export default function Intro() {
  const Pfp = [
    <Image
      src="/KiwiSweet.jpg"
      alt="Me"
      key="crypto.randomUUID()"
      width="80"
      height="80"
      className="w-30 h-30 rounded-full object-cover object-bottom"
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
    <div className="flex flex-row border-ctp-green border-2 rounded-2xl w-3/4 mx-auto bg-taupe-900/20 shadow-xl shadow-ctp-green/10">
      <div className="basis-1/7 p-3 flex flex-col items-center">
        <div className="">{Pfp}</div>
        <StatusCard />
        <Socials />
        <Clock />
      </div>
      <div className="basis-6/7 p-3 flex flex-col">
        <span className="text-ctp-green text-2xl">Genevieve</span>
        <span className="">A.K.A KiwiSweet</span>
        <div className="inline-flex items-center">
          {kiwiIcon}
          <span className=" inline-flex text-ctp-green text-2xl">About Me</span>
        </div>
        <span>

        I&apos;m learning and growing as a front-end developer, creating websites that are interactive, creative, and fun to use. I&apos;m always experimenting, learning new things, and turning ideas into something I can bring to life with code.

        </span>
        <IntroTools />
      </div>
    </div>
  );
}
