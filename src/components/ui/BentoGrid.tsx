import { cn } from "@/utils/cn";
import Link from "next/link";

export const BentoGrid = ({
	className,
	children,
}: { className?: string; children?: React.ReactNode }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-full",
				className,
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	dataCategory,
	href,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	image?: string;
	dataCategory?: string;
	href: string;
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 border border-transparent justify-between flex flex-col space-y-4",
				className,
			)}
		>
			{header}
			<div className="group-hover/bento:translate-x-2 transition duration-200">
				{icon}
				<Link href={href} className="group" target="_blank">
					<div className="font-bold text-black mb-2 mt-2">{title}</div>
					<div className="flex items-center justify-between">
						<div className="font-normal text-xs text-black">{description}</div>
						<div className="flex-shrink-0 mr-2 group-hover:rotate-45">
							<svg
								width="32px"
								height="32px"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Grid Bento Icon</title>
								<circle
									cx="10"
									cy="10"
									r="9"
									stroke="#000000"
									strokeWidth="0.5"
									fill="none"
								/>
								<path
									d="M7 13L13 7M13 7H8M13 7V12"
									stroke="#000000"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</Link>
				<div className="hidden">{dataCategory}</div>
			</div>
		</div>
	);
};
