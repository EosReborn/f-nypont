import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/siteData";
import { DynamicIcon } from "@/components/icon-map";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="szolgaltatasok" className="bg-sand/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
            Szolgáltatások
          </span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Amiben segíthetek
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Görgess tovább a részletes árlistáért, vagy válaszd ki, mi érdekel — minden
            kategória alatt megtalálod a pontos árakat.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <a href={`#arlista-${s.id}`}>
                <Card className="group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush text-rose-deep transition-colors group-hover:bg-ink group-hover:text-cream">
                    <DynamicIcon name={s.icon} className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rose-deep">
                    Árlista
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
