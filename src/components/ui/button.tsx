import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Dark Dramatic Variants
        forest: "bg-forest-canopy text-foreground border border-neon-cyan/30 hover:border-neon-cyan/60 hover:bg-forest-moss shadow-lg transition-all hover:shadow-[0_0_20px_hsla(180,100%,50%,0.2)]",
        golden: "bg-gradient-to-r from-temple-gold to-accent text-accent-foreground font-semibold hover:from-accent hover:to-temple-gold shadow-[0_0_30px_hsla(45,100%,50%,0.3)] transition-all",
        mist: "backdrop-blur-sm bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/20 transition-all",
        nature: "bg-forest-moss/80 text-foreground border border-neon-green/40 hover:border-neon-green/70 backdrop-blur-sm transition-all hover:shadow-[0_0_15px_hsla(150,100%,45%,0.2)]",
        sos: "bg-destructive text-destructive-foreground font-bold animate-pulse hover:animate-none hover:bg-destructive/90 shadow-lg shadow-destructive/50",
        hero: "bg-gradient-to-r from-primary via-neon-cyan to-neon-green text-background font-display text-lg font-semibold border-2 border-primary/50 hover:border-primary shadow-[0_0_30px_hsla(180,100%,50%,0.5),0_0_60px_hsla(100,100%,45%,0.3)] hover:shadow-[0_0_50px_hsla(180,100%,50%,0.7),0_0_80px_hsla(150,100%,45%,0.5)] hover:scale-105 active:scale-95 transition-all duration-300",
        neon: "bg-transparent text-primary border-2 border-primary hover:bg-primary/10 shadow-[0_0_20px_hsla(180,100%,50%,0.3)] transition-all hover:shadow-[0_0_30px_hsla(180,100%,50%,0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
