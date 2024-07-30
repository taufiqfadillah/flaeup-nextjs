import type { Metadata } from "next";
import "/public/css/tailwind-min.css";
import localFont from "next/font/local";
import SmoothScrolling from "@/libs/SmoothScrolling.jsx";
import CustomCursor from "@/libs/CustomCursor";
import FaviconSwitcher from "@/libs/FaviconSwitcher";
import Loader from "@/components/loader.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "Flaeup",
	description: "Generated by https://taufiqproject.my.id",
	keywords: [
		"Flaeup",
		"Creativity is centar to our design",
		"taufiq project",
		"Design Indonesia",
		"Jasa Desain Indonesia",
	],
	publisher: "Taufiq Project visit: https://taufiqproject.my.id",
	openGraph: {
		title: "Flaeup | Creativity is centar to our design",
		description: "Generated by https://taufiqproject.my.id",
	},
};

const Aeonik = localFont({
	src: [
		{
			path: "./fonts/Aeonik-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Aeonik-RegularItalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/Aeonik-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/Aeonik-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={Aeonik.className}>
			<head>
				<link
					id="favicon"
					rel="icon"
					type="image/svg+xml"
					href="/images/favicon_blue.ico"
				/>
			</head>
			<body>
				<Loader />
				<SpeedInsights />
				<FaviconSwitcher>
					<SmoothScrolling>{children}</SmoothScrolling>
					<CustomCursor />
				</FaviconSwitcher>
			</body>
		</html>
	);
}
