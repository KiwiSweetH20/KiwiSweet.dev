"use client";
import { useEffect, useState } from "react";
import { supabase } from "../app/lib/supabase";

export default function StatusCard() {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    // Listen to the shared presence channel instead of database rows
    const channel = supabase.channel("admin-presence-room");

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const adminIsHere = Boolean(state["admin"] && state["admin"].length > 0);
        setOnline(adminIsHere);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <fieldset className="relative border-2 border-taupe-900 dark:border-taupe-100 w-fit h-fit rounded-2xl p-2 my-2 dark:bg-taupe-50/20 bg-taupe-100">
      <span className="absolute flex size-4 -top-5 right-1">
        <span className={`absolute inline-flex h-full w-full rounded-full ${online ? "bg-kiwi-11 opacity-75 animate-ping " : "hidden"}`}></span>
        <span className={`relative inline-flex size-4 rounded-full ${online ? "bg-kiwi-11" : "bg-taupe-800"}`}></span>
      </span>
      <legend className="dark:text-kiwi-9 text-taupe-800">Status</legend>
      <div>
        <span className="text-center dark:text-taupe-800 text-taupe-700">
          I&apos;M{" "}
          <span className="dark:text-kiwi-9 text-kiwi-11 font-bold">
            {online ? "ONLINE" : "OFFLINE"}
          </span>
        </span>
      </div>
    </fieldset>
  );
}
