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

    const channel = supabase.channel("admin-presence-room", {
      config: {
        presence: {
          key: "admin",
        },
      },
    });

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
    <div className="p-8 font-sans max-w-md mx-auto text-center dark:bg-taupe-500 bg-kiwi-3 border-taupe-800 dark:border-kiwi-9 rounded-2xl border-2 my-10">
      <h1 className="text-2xl font-bold mb-4 dark:text-taupe-100 text-taupe-800">
        Live Presence Broadcaster
      </h1>
      <div className="mb-4 p-4 rounded-xl border-2 inline-block bg-taupe-800 dark:bg-taupe-100">
        <span className={`font-bold ${connected ? "text-kiwi-9 " : "text-taupe-500"}`}>
          {connected ? "🟢 BROADCASTING ONLINE" : "🟡 CONNECTING..."}
        </span>
      </div>
      <p className="text-sm text-taupe-500 dark:text-taupe-400">
        This live status is synced via WebSockets.
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
