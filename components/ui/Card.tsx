import React from "react";
import { cn } from "@/app/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "yellow" | "cyan" | "pink";
}

export const Card = ({
  className,
  variant = "white",
  children,
  ...props
}: CardProps) => {
  const variants = {
    white: "bg-white",
    yellow: "bg-neo-yellow",
    cyan: "bg-neo-cyan",
    pink: "bg-neo-pink",
  };

  return (
    <div
      className={cn(
        "border-3 border-black shadow-brutal p-6",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
