import { ComponentType, FC, ReactNode, useState, useEffect } from "react";

interface WithCopyToClipboardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

const withCopyToClipboard = (
  Component: ComponentType<any>
): FC<WithCopyToClipboardProps> => {
  return (props) => {
    const [tooltipText, setTooltipText] = useState("Click to Copy");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      const textToCopy =
        typeof props.children === "string" ? props.children : "";
      navigator.clipboard.writeText(textToCopy);
      setTooltipText("Copied!");
      setTimeout(() => setTooltipText("Click to Copy"), 5000);
    };

    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <div className="relative group" style={{ display: "inline-block" }}>
        <Component {...props} onClick={handleClick} />
        <span
          className="fixed px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y - 60,
          }}
        >
          {tooltipText}
        </span>
      </div>
    );
  };
};

const CopyToClipboardLink = withCopyToClipboard((props) => <a {...props} />);

export default CopyToClipboardLink;
