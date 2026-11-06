"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; 

export default function AdminTracker() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
  if (!supabase) return;

  const trackerChannel = supabase.channel("my-presence", {
    config: { presence: { key: "genevieve" } },
  });

  trackerChannel.subscribe(async (status: string) => {
    if (status === "SUBSCRIBED") {
      setStatus("🟢 Broadcasting: ONLINE");
      await trackerChannel.track({
        user: "genevieve",
        online_at: new Date().toISOString(),
      });
    } else {
      setStatus(`🔴 Channel status: ${status}`);
    }
  });

  return () => {
    supabase.removeChannel(trackerChannel);
  };
}, []);


  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Genevieve&apos;s Status Broadcaster</h1>
      <p>{status}</p>
      <p style={{ color: "gray" }}>Keep this tab open to stay marked as ONLINE on your main site.</p>
    </div>
  );
}
