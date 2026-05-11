import React from "react";
import { cn } from "@/app/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-neo-yellow text-black",
      secondary: "bg-neo-cyan text-black",
      accent: "bg-neo-pink text-black",
      outline: "bg-white text-black",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-6 py-3 text-base font-bold",
      lg: "px-8 py-4 text-lg font-black",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-black border-3 border-black shadow-brutal neo-btn-lift cursor-pointer uppercase tracking-wide",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
