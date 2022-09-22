import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fkkkpxyxegslswfiepov.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZra2tweHl4ZWdzbHN3ZmllcG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM1ODIyMzUsImV4cCI6MTk3OTE1ODIzNX0.RMnHKg8eY9el3sfeg_pdt7ZsaKwi5rz8wQ0Ljc9fcfg"
);

export { supabase };
