"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminDashboard() {
  const [online, setOnline] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) return;

    // Fetch the current state from the database on load
    const getCurrentStatus = async () => {
      const { data } = await supabase
        .from("user_status")
        .select("is_online")
        .eq("id", 1)
        .single();
      
      if (data) setOnline(data.is_online);
      setLoading(false);
    };

    getCurrentStatus();
  }, []);

  const toggleStatus = async () => {
    if (!supabase) return;
    setLoading(true);
    
    const newStatus = !online;

    // Update row 1 in your user_status table
    const { error } = await supabase
      .from("user_status")
      .update({ is_online: newStatus })
      .eq("id", 1);

    if (!error) {
      setOnline(newStatus);
    } else {
      console.error("Error updating status:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 font-sans max-w-md mx-auto text-center dark:bg-taupe-900 bg-taupe-100 rounded-2xl border my-10">
      <h1 className="text-2xl font-bold mb-4 dark:text-taupe-100 text-taupe-800">
        Status Control Center
      </h1>
      
      <div className="mb-6 p-4 rounded-xl border-2 inline-block">
        Current Public Status:{" "}
        <span className={`font-bold ${online ? "text-kiwi-11" : "text-taupe-500"}`}>
          {online ? "🟢 ONLINE" : "🔴 OFFLINE"}
        </span>
      </div>

      <div>
        <button
          onClick={toggleStatus}
          disabled={loading}
          className={`px-6 py-3 rounded-xl font-bold transition-all text-white ${
            online 
              ? "bg-red-500 hover:bg-red-600" 
              : "bg-kiwi-11 hover:bg-opacity-90"
          } disabled:opacity-50`}
        >
          {loading ? "Updating..." : online ? "Switch to OFFLINE" : "Switch to ONLINE"}
        </button>
      </div>
    </div>
  );
}
