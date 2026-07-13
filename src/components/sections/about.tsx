import { CheckCircle2 } from "lucide-react";
import { business } from "@/data/siteData";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="bemutatkozas" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md order-2 lg:order-1">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sand/70" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-portrait.svg"
            alt={`${business.name} munka közben`}
            className="w-full rounded-[2rem] border border-white/60 object-cover shadow-soft"
            width={560}
            height={640}
          />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
            Bemutatkozás
          </span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Ismerjük meg egymást
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            {business.intro}
          </p>

          <ul className="mt-8 space-y-5">
            {business.highlights.map((h) => (
              <li key={h.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg text-ink">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {h.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
