import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPARBASE_KEY || "";
const supabaseUrl = import.meta.env.VITE_SUPARBASE_URL || "";

if (!supabaseKey) throw new error("invalid superbase key ");
if (!supabaseUrl) throw new error("url not found");

export const supabase = createClient(supabaseUrl, supabaseKey);
