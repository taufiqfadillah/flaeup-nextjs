import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://flaeup.co",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://flaeup.co/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://flaeup.co/work",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: "https://flaeup.co/about",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.3,
		},
		{
			url: "https://flaeup.co/capabilities/branding",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.1,
		},
		{
			url: "https://flaeup.co/capabilities/retouching",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.1,
		},
		{
			url: "https://flaeup.co/capabilities/packaging",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.1,
		},
		{
			url: "https://flaeup.co/capabilities/uiuxdesign",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.1,
		},
	];
}
