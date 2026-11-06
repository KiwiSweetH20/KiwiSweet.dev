"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../lib/supabase";

// 1. Put your actual logic here inside a sub-component
function AdminContent() {
  const [online, setOnline] = useState(false);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const userSecret = searchParams.get("secret");

  // Calculate authorization immediately during render logic
  const systemSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET_PASSPHRASE || "Jesus@2007##";
  const isAuthorized = userSecret === systemSecret;

  useEffect(() => {
    if (!isAuthorized || !supabase) {
      return;
    }

    const getCurrentStatus = async () => {
      try {
        const { data } = await supabase
          .from("user_status")
          .select("is_online")
          .eq("id", 1)
          .single();
        
        if (data) setOnline(data.is_online);
      } catch (error) {
        console.error("Error fetching status:", error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentStatus();
  }, [isAuthorized]);

  if (!isAuthorized) {
    return (
      <div className="p-8 text-center text-red-500 font-bold max-w-md mx-auto my-20 border-2 border-red-500 bg-red-100/10 rounded-2xl">
        🛑 403 - Unauthorized Access Blocked.
      </div>
    );
  }

  const toggleStatus = async () => {
    if (!supabase) return;
    setLoading(true);
    const newStatus = !online;

    const { error } = await supabase
      .from("user_status")
      .update({ is_online: newStatus })
      .eq("id", 1);

    if (error) {
      console.error("Error updating status:", error.message);
    } else {
      setOnline(newStatus);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 font-sans max-w-md mx-auto text-center dark:bg-taupe-900 bg-taupe-100 rounded-2xl border my-10">
      <h1 className="text-2xl font-bold mb-4 dark:text-taupe-100 text-taupe-800">Status Control Center</h1>
      <div className="mb-6 p-4 rounded-xl border-2 inline-block">
        Current Public Status: <span className={`font-bold ${online ? "text-kiwi-11" : "text-taupe-500"}`}>{online ? "🟢 ONLINE" : "🔴 OFFLINE"}</span>
      </div>
      <div>
        <button
          onClick={toggleStatus}
          disabled={loading}
          className={`px-6 py-3 rounded-xl font-bold transition-all text-white ${online ? "bg-red-500 hover:bg-red-600" : "bg-kiwi-11 hover:bg-opacity-90"} disabled:opacity-50`}
        >
          {loading ? "Updating..." : online ? "Switch to OFFLINE" : "Switch to ONLINE"}
        </button>
      </div>
    </div>
  );
}

// 2. Export a main layout wrapper that uses Suspense to bypass the Vercel build error
export default function AdminDashboard() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading interface configuration...</div>}>
      <AdminContent />
    </Suspense>
  );
}
