import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-ink/15 bg-white/70 px-4 py-2 text-sm text-ink placeholder:text-ink-faint shadow-sm transition-colors outline-none",
        "focus-visible:border-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep/25",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
