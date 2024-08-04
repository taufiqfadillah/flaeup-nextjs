import React, { type FC } from "react";
import * as Toast from "@radix-ui/react-toast";
import "./radix.css";

interface ToastDemoProps {
	open: boolean;
	message: string;
	type: "success" | "error";
	onClose: () => void;
}

const ToastDemo: FC<ToastDemoProps> = ({ open, message, type, onClose }) => {
	const toastStyle: string = type === "success" ? "ToastSuccess" : "ToastError";

	return (
		<Toast.Provider swipeDirection="right">
			<Toast.Root
				className={`ToastRoot ${toastStyle}`}
				open={open}
				onOpenChange={onClose}
			>
				<Toast.Title className="ToastTitle">
					{type === "success" ? "Success" : "Error"}
				</Toast.Title>
				<Toast.Description className="ToastDescription">
					{message}
				</Toast.Description>
				<Toast.Action className="ToastAction" asChild altText="Close">
					<button
						className={`Button small ${type === "success" ? "green" : "red"}`}
						type="button"
						onClick={onClose}
					>
						Close
					</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>
	);
};

export default ToastDemo;
