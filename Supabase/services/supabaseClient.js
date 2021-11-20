const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Creating a supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
