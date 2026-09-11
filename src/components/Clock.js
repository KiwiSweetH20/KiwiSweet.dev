"use client";

import React from "react";
import { format } from "date-fns/format";

export default function Clock() {
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
    <fieldset className="border-2 border-taupe-800 w-29 h-22 rounded-2xl p-2 bg-taupe-900/20">
      <legend className="border-taupe-800 text-ctp-green">Clock</legend>
      <div>
        <p>{time ? format(time, "hh:mm:ss a") : "---"}</p>
        <p>{time ? format(time, "do LLL") : "---"}</p>
      </div>
    </fieldset>

  );
}
