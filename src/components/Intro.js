import Image from "next/image";

import KiwiSweet from "../public/KiwiSweet.jpg";
import Kiwi from "../public/Kiwi.svg";

export default function Intro() {
  const Pfp = [
    <Image
      src={KiwiSweet}
      alt="Me"
      key="pfp"
      className="w-30 h-30 rounded-full object-cover object-bottom"
    />,
  ];
  const kiwiIcon = [
    <Image
      src={Kiwi}
      alt="Me"
      key="kiwiIcon"
      className=" w-12 h-12 rounded-full object-cover "
    />,
  ];

  return (
    <div className="flex flex-row border-ctp-green border-2 rounded-2xl w-3/4 mx-auto">
      <div className="basis-1/6 p-3 flex flex-col items-center">
        <div className="">{Pfp}</div>
        <span>status</span>
        <span>socials</span>
        <span>clock</span>
      </div>
      <div className="basis-5/6 p-3 flex flex-col">
        <span className="text-ctp-green text-2xl">Genevieve</span>
        <span className="">A.K.A KiwiSweet</span>
        <div className="inline-flex items-center">
          {kiwiIcon}
          <span className=" inline-flex text-ctp-green text-2xl">About Me</span>
        </div>
        <span>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
        <div className="inline-flex items-center">
          {kiwiIcon}
          <span className=" inline-flex text-ctp-green text-2xl">Tools</span>
        </div>
        <span>
          React · Next.js · Tailwind · Vercel · Node.js · Git · Github
        </span>
        {/* alt + 250 = · */}
        <div className="inline-flex items-center">
          {kiwiIcon}
          <span className=" inline-flex text-ctp-green text-2xl">
            Languages
          </span>
        </div>
        <span>Javascript | Jsx | Html | CSS </span>
      </div>
    </div>
  );
}
