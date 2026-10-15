"use client";

import React from "react";
import { format } from "date-fns/format";

export default function Time() {
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
      <div className="flex flex-col justify-baseline gap-1">
        <p>{time ? format(time, "do LLL") : "---"}</p>
        <p>{time ? format(time, "hh:mm:ss a") : "---"}</p>
      </div>
  );
}
