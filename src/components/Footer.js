"use client";

import React from "react";
import { format } from "date-fns/format";

import { Clock } from "react-feather";

export default function Footer() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, [50]);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  return (
    <nav className="flex flex-row p-5 w-3/4 mx-auto left-1/2 border-2 border-ctp-green m-5 rounded-2xl bg-taupe-900/20">
      <div className="basis-1/3 items-center justify-center">
        <p className="">@ 2026 Genevieve Van Niekerk</p>
      </div>
      <div className="basis-2/3 inline-flex items-center justify-center">
      <Clock width="20" height="20"/>
        <p className="inline-flex items-center px-2 text-ctp-green">
           {time ? format(time, "hh:mm:ss") : "---"}
        </p>
        <p>-</p>
        <p>views</p>
        {/* socials */}
      </div>
    </nav>
  );
}
