import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-cream shadow-soft hover:bg-rose-deep hover:shadow-card hover:-translate-y-0.5",
        gold:
          "bg-gradient-to-r from-gold-light to-gold text-ink shadow-soft hover:brightness-105 hover:-translate-y-0.5",
        outline:
          "border border-ink/25 text-ink bg-transparent hover:bg-ink hover:text-cream hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-blush",
        light:
          "bg-white/90 text-ink hover:bg-white hover:-translate-y-0.5 shadow-soft",
      },
      size: {
        default: "h-12 px-6 py-2 has-[>svg]:px-5",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
