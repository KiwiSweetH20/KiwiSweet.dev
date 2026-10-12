import Image from "next/image";

import IntroTools from "../../components/IntroTools.js";

export default function Page() {
  return (
    <>
      {/* <MainBackground className="-z-10" /> */}
      <div className=" flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-32 font-(family-name:--font-comic-relief)">
        <div className="flex flex-row justify-center w-full border-2 p-5">
          <div className="basis-1/3 border-2 px-3">
            <Image
                  src="/Gen.jpeg"
                  alt="Me"
                  key="crypto.randomUUID()"
                  width="30"
                  height="70"
                  className="   "
                />
          </div>
          <div className="basis-2/3 px-3">
            <p>
jackcbkjascbscbbckj
            </p>
          </div>
        </div>
          <div><IntroTools/></div>
      </div>
    </>
  );
}
