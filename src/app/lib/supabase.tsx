import { createClient } from "@supabase/supabase-js";

// Try reading the Vercel-approved short names first, then fall back to the public ones
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : (null as any);

if (!supabase) {
  console.warn("Supabase credentials missing. Realtime features will be disabled.");
}
