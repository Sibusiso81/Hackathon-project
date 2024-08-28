import { createClient } from "@supabase/supabase-js";
const superbasekey = import.meta.env.VITE_SUPERBASE_KEY;
const superbaseUrl = import.meta.env.VITE_SUPERBASE_URL;
export const superbase = createClient({
  superbaseUrl,
  superbasekey,
});

console.log(superbaseUrl);
