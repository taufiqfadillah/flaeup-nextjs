import React from "react";
import type { Metadata } from "next";
import Retouching from "@/components/capabilities/retouching/retouching";

export const metadata: Metadata = {
	title: "Retouching | Creativity is centar to our design",
	description: "Generated by https://taufiqproject.my.id",
};

export default function RetouchingPage() {
	return (
		<>
			<Retouching />
		</>
	);
}
