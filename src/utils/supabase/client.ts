import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Supabase URL or ANON KEY is not defined in environment variables",
		);
	}

	return createBrowserClient(supabaseUrl, supabaseAnonKey);
};
