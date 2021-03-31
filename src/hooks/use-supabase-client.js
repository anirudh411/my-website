import { createClient } from "@supabase/supabase-js";

export default function useSupaBaseClient() {
	return createClient(
		process.env.GATSBY_SUPABASE_URL,
		process.env.GATSBY_SUPABASE_KEY
	).storage;
}
