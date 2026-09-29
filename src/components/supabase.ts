import { createClient } from "@supabase/supabase-js";

// Safe fallbacks to prevent build-time prerendering crashes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
