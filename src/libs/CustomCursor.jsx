"use client";

import { useState, useEffect } from "react";

const CustomCursor = () => {
	const [cursor, setCursor] = useState(null);

	useEffect(() => {
		const cursorElement = document.createElement("div");
		cursorElement.className = "custom-cursor";
		document.body.appendChild(cursorElement);
		setCursor(cursorElement);

		const handleMouseEnter = () => {
			cursorElement.classList.add("expanded");
		};

		const handleMouseLeave = () => {
			cursorElement.classList.remove("expanded");
		};

		const links = document.querySelectorAll("a");
		for (const link of links) {
			link.addEventListener("mouseenter", handleMouseEnter);
			link.addEventListener("mouseleave", handleMouseLeave);
		}

		const handleMouseMove = (e) => {
			cursorElement.style.left = `${e.clientX}px`;
			cursorElement.style.top = `${e.clientY}px`;
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			for (const link of links) {
				link.removeEventListener("mouseenter", handleMouseEnter);
				link.removeEventListener("mouseleave", handleMouseLeave);
			}
			document.removeEventListener("mousemove", handleMouseMove);
			cursorElement.remove();
		};
	}, []);

	return null;
};

export default CustomCursor;
