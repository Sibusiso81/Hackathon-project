import { createClient } from "@supabase/supabase-js";

const superbaseUrl = import.meta.env.superbaseUrl;
const superbaseKey = import.meta.env.superbaseKey;

export const superbase = createClient(superbaseUrl, superbaseKey);
