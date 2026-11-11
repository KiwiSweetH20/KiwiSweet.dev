"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../lib/supabase";

function AdminContent() {
  const [connected, setConnected] = useState(false);

  const searchParams = useSearchParams();
  const userSecret = searchParams.get("secret");
  const systemSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET_PASSPHRASE || "KiwiSweetH20Admin";
  const isAuthorized = userSecret === systemSecret;

  useEffect(() => {
    if (!isAuthorized || !supabase) return;

    // 1. Join a shared Realtime channel with a unique key for the admin
    const channel = supabase.channel("admin-presence-room", {
      config: {
        presence: {
          key: "admin",
        },
      },
    });

    // 2. Subscribe and broadcast your online presence once connected
    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({
          online_at: new Date().toISOString(),
          role: "admin",
        });
        setConnected(true);
      } else {
        setConnected(false);
      }
    });

    // 3. Clean up automatically when the tab closes or component unmounts
    return () => {
      channel.untrack();
      supabase.removeChannel(channel);
    };
  }, [isAuthorized]);

  if (!isAuthorized) {
    return (
      <div className="p-8 text-center text-red-500 font-bold max-w-md mx-auto my-20 border-2 border-red-500 bg-red-100/10 rounded-2xl">
        🛑 403 - Unauthorized Access Blocked.
      </div>
    );
  }

  return (
    <div className="p-8 font-sans max-w-md mx-auto text-center dark:bg-taupe-900 bg-taupe-100 rounded-2xl border my-10">
      <h1 className="text-2xl font-bold mb-4 dark:text-taupe-100 text-taupe-800">
        Live Presence Broadcaster
      </h1>
      <div className="mb-4 p-4 rounded-xl border-2 inline-block">
        <span className={`font-bold ${connected ? "text-kiwi-11" : "text-taupe-500"}`}>
          {connected ? "🟢 BROADCASTING ONLINE" : "🟡 CONNECTING..."}
        </span>
      </div>
      <p className="text-sm text-taupe-500">
        Your live status is synced via WebSockets. Simply close this tab to go Offline automatically.
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading interface configuration...</div>}>
      <AdminContent />
    </Suspense>
  );
}
