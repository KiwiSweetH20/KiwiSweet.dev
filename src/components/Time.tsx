"use client";

import React from "react";
import { useState } from "react";

import { format } from "date-fns/format";

export default function Time() {
  const [time, setTime] = useState<Date | undefined>();

  React.useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setTime(new Date());
    });

    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      cancelAnimationFrame(frameId);
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
