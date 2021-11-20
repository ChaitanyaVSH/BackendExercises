// Import client/accessor
const supabase = require("../supabaseClient");

// Querying the database "Opinions"
const fetchOpinions = async () => {
  let { data: opinions, error } = await supabase.from("opinions").select("*");

  return error ? error : opinions;
};

module.exports = fetchOpinions;
