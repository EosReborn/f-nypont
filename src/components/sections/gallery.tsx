"use client";

import * as React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/siteData";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const close = React.useCallback(() => setActiveIndex(null), []);
  const prev = React.useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const next = React.useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  React.useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section id="galeria" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
            Galéria
          </span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Néhány pillanat a szalonból
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "group relative block aspect-square w-full overflow-hidden rounded-2xl border border-white/60 shadow-card",
                  i === 0 && "sm:col-span-2 sm:row-span-2 sm:aspect-square"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Bezárás"
            onClick={close}
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <button
            aria-label="Előző kép"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery[activeIndex].src}
            alt={gallery[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-soft"
          />
          <button
            aria-label="Következő kép"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </section>
  );
}
