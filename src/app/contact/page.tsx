import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/contact/contact";

export const metadata: Metadata = {
	title: "Contact | Creativity is centar to our design",
	description: "Generated by https://taufiqproject.my.id",
};

export default function ContactPage() {
	return (
		<>
			<Contact />
		</>
	);
}
