import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  const hasPlaceholders = testimonials.some((t) => t.isPlaceholder);

  return (
    <section id="velemenyek" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
            Vélemények
          </span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Amit a vendégeim mondanak
          </h2>
          {hasPlaceholders && (
            <p className="mt-4 text-sm text-ink-soft">
              Ezek a kártyák jelenleg helyőrzők — cseréld le valódi vendégvéleményekre.
            </p>
          )}
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card
                className={`relative h-full p-7 ${
                  t.isPlaceholder ? "border-dashed border-rose-deep/40 bg-blush/30" : ""
                }`}
              >
                {t.isPlaceholder && (
                  <span className="absolute -top-3 left-6 rounded-full bg-rose-deep px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
                    Helyőrző szöveg
                  </span>
                )}
                <Quote className="size-7 text-gold" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`size-4 ${
                        s < t.rating ? "fill-gold text-gold" : "text-sand-dark"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 font-display text-base text-ink">{t.name}</p>
                {t.role && <p className="text-xs text-ink-soft">{t.role}</p>}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
