"use client";

import { useState, useEffect } from "react";

const FaviconSwitcher = ({ children }) => {
	const [favicon, setFavicon] = useState(null);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const faviconElement = document.getElementById("favicon");
		setFavicon(faviconElement);

		const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDarkMode(matchMedia.matches);

		const handleMatchMediaChange = () => {
			setIsDarkMode(matchMedia.matches);
		};

		matchMedia.addEventListener("change", handleMatchMediaChange);

		return () => {
			matchMedia.removeEventListener("change", handleMatchMediaChange);
		};
	}, []);

	useEffect(() => {
		if (favicon) {
			favicon.href = isDarkMode
				? "/images/favicon_white.ico"
				: "/images/favicon_blue.ico";
		}
	}, [isDarkMode, favicon]);

	return children;
};

export default FaviconSwitcher;
