"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

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

        const isOnline = state["genevieve"] !== undefined;

        setOnline(isOnline);
      })

      .on("presence", { event: "join" }, () => {
        const state = channel.presenceState();

        const isOnline = state["genevieve"] !== undefined;

        setOnline(isOnline);
      })

      .on("presence", { event: "leave" }, () => {
        const state = channel.presenceState();

        const isOnline = state["genevieve"] !== undefined;

        setOnline(isOnline);
      })

      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            user: "genevieve",
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <fieldset className=" relative border-2 border-taupe-900 w-fit h-fit rounded-2xl p-2 my-2 dark:bg-taupe-950/20 bg-kiwi-2">
      <span className="absolute flex size-4 -top-5 right-1">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${
            online ? "bg-kiwi-11 opacity-75 animate-ping " : "hidden"
          }`}
        ></span>
        <span
          className={`relative inline-flex size-4 rounded-full ${
            online ? "bg-kiwi-11" : "bg-taupe-800"
          }`}
        ></span>
      </span>
      <legend className="dark:text-kiwi-9 text-taupe-800">Status</legend>
      <div>
        <div
          className={`absolute  h-5 w-5 rounded-full transition-all duration-300 `}
        />
        <span className="text-center dark:text-taupe-500 text-taupe-700">
          I&apos;M{" "}
          <span className="dark:text-kiwi-9 text-kiwi-11 font-bold">
            {online ? "ONLINE" : "OFFLINE"}
          </span>
        </span>
      </div>
    </fieldset>
  );
}
