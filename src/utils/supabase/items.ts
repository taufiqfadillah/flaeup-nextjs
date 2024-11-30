import { createClient } from "@/utils/supabase/client";

export async function fetchItems() {
	const supabase = createClient();
	const imageBaseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}`;

	const { data: Work, error } = await supabase.from("Work").select("*");

	if (error) {
		console.error("Error fetching data:", error);
		return [];
	}

	const items = Work.map((item) => ({
		...item,
		image: `${imageBaseUrl}/${item.image}`,
	}));
	return items;
}
