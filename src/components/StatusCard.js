"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase.ts";

export default function StatusCard() {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const channel = supabase.channel("my-presence", {
      config: {
        presence: {
          key: "genevieve",
        },
      },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();

        const isOnline = Object.keys(state).length > 0;

        setOnline(isOnline);
      })
      .on("presence", { event: "join" }, () => {
        setOnline(true);
      })
      .on("presence", { event: "leave" }, () => {
        const state = channel.presenceState();

        setOnline(Object.keys(state).length > 0);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            user: "genevieve",
            online_at: new Date().toISOString(),
          });

          setOnline(true);
        }
      });

    return () => {
      channel.untrack();
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <fieldset className=" relative border-2 border-taupe-800 w-fit h-fit rounded-2xl p-2 bg-taupe-950/20 ">
      <span className="absolute flex size-4 -top-5 right-1">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${
            online ? "bg-ctp-green opacity-75 animate-ping " : "hidden"
          }`}
        ></span>
        <span
          className={`relative inline-flex size-4 rounded-full ${
            online ? "bg-ctp-green" : "bg-taupe-800"
          }`}
        ></span>
      </span>
      <legend className="text-ctp-green">Status</legend>
      <div>
        <div
          className={`absolute  h-5 w-5 rounded-full transition-all duration-300 `}
        />
        <span className="text-center">
          I&apos;M{" "}
          <span className="text-ctp-green font-bold">
            {online ? "ONLINE" : "OFFLINE"}
          </span>
        </span>
      </div>
    </fieldset>
  );
}
