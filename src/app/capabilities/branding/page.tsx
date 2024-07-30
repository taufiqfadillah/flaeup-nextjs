import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar.jsx";
import Hamburger from "@/components/hamburger.jsx";
import Branding from "@/components/capabilities/branding/branding.jsx";
import Footer from "@/components/footer.jsx";
import FooterMobile from "@/components/footer-mobile.jsx";

export const metadata: Metadata = {
	title: "Branding | Creativity is centar to our design",
	description: "Generated by https://taufiqproject.my.id",
};

export default function BrandingPage() {
	return (
		<>
			<Navbar />
			<Hamburger />

			<Branding />

			<Footer />
			<FooterMobile />
		</>
	);
}
