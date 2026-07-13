import { Phone, Sparkles, ArrowDown } from "lucide-react";
import { business } from "@/data/siteData";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-cream to-cream pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Dekoratív, lágy háttérformák */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold-light/40 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-rose/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep shadow-soft">
            <Sparkles className="size-3.5" />
            {business.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {business.name}
            <span className="block text-rose-deep">{business.slogan}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft lg:mx-0">
            {business.intro}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="lg">
              <a href={business.phoneHref}>
                <Phone className="size-4" />
                Időpontot foglalok
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#szolgaltatasok">Szolgáltatások</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
            <div>
              <p className="font-display text-2xl text-ink">1D–4D</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Szempilla technikák
              </p>
            </div>
            <div className="h-8 w-px bg-ink/15" />
            <div>
              <p className="font-display text-2xl text-ink">13+</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Gyantázási zóna
              </p>
            </div>
            <div className="h-8 w-px bg-ink/15" />
            <div>
              <p className="font-display text-2xl text-ink">100%</p>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Személyre szabott
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-light/50 to-rose/30 blur-2xl" />
          <div className="overflow-hidden rounded-[2.5rem] border border-white/60 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-portrait.svg"
              alt={`${business.name} ${business.nameAccent} — szépségszalon`}
              className="h-full w-full object-cover"
              width={640}
              height={800}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white/90 px-5 py-4 shadow-soft backdrop-blur sm:block">
            <p className="font-display text-lg text-ink">&bdquo;{business.slogan}&rdquo;</p>
          </div>
        </div>
      </div>

      <a
        href="#bemutatkozas"
        className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-soft sm:flex animate-float"
      >
        Görgess tovább <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
