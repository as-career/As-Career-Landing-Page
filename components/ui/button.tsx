import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-[#1a2a4a] text-white hover:bg-[#13213a]",
  outline:
    "border border-[#1a2a4a] bg-transparent text-[#1a2a4a] hover:bg-[#1a2a4a] hover:text-white",
  gold: "bg-[#c8972b] text-[#0f172a] hover:bg-[#b07f1e]",
  ghost: "bg-transparent text-[#1a2a4a] hover:bg-[#f5efe1]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8972b] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
