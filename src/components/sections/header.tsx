"use client";

import * as React from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, nav } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-xl sm:text-2xl tracking-wide text-ink">
          {business.name}
          <span className="ml-1.5 text-sm font-body font-medium uppercase tracking-[0.2em] text-rose-deep">
            {business.nameAccent}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-rose-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href={business.phoneHref}>
              <Phone className="size-4" />
              Időpontfoglalás
            </a>
          </Button>
        </div>

        <button
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-ink shadow-soft"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobil menü */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-40 bg-cream/98 backdrop-blur-md transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={cn(
                "font-display text-3xl text-ink transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-4">
            <a href={business.phoneHref} onClick={() => setOpen(false)}>
              <Phone className="size-4" />
              Időpontfoglalás
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
