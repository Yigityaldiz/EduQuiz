import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white p-2 text-center font-semibold dark:border-gray-800 dark:bg-gray-950",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-gray-50 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-gray-900">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-gray-900 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gray-900 dark:bg-gray-50 dark:group-hover:bg-gray-50"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
