"use client";

import * as React from "react";
import { Phone, MapPin, Clock, ThumbsUp, Camera, Send, CheckCircle2 } from "lucide-react";
import { business, serviceCategories } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Frontend bemutató: nincs valódi backend / adatküldés.
    // Éles használatba vételkor köss ide egy API route-ot, űrlapkezelő
    // szolgáltatást (pl. Formspree, Resend) vagy e-mail integrációt.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section id="kapcsolat" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-rose-deep/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Kapcsolat &amp; időpontfoglalás
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Foglalj időpontot még ma
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Hívj telefonon, írj Messengeren, vagy töltsd ki az alábbi űrlapot — hamarosan
            jelentkezem.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Elérhetőségek */}
          <Reveal className="space-y-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-colors hover:bg-white/10"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/60">
                  Telefon
                </span>
                <span className="font-display text-lg">{business.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-colors hover:bg-white/10"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                <ThumbsUp className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/60">
                  Facebook
                </span>
                <span className="font-display text-lg">{business.facebookName}</span>
              </span>
            </a>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 transition-colors hover:bg-white/10"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                <Camera className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/60">
                  Instagram
                </span>
                <span className="font-display text-lg">{business.instagramHandle}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-cream/60">
                  Cím
                </span>
                <span className="font-display text-lg">{business.address}</span>
              </span>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-light/20 text-gold-light">
                  <Clock className="size-5" />
                </span>
                <span className="text-xs uppercase tracking-wide text-cream/60">
                  Nyitvatartás
                </span>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm">
                {business.openingHours.map((o) => (
                  <li key={o.day} className="flex justify-between text-cream/85">
                    <span>{o.day}</span>
                    <span className="font-medium text-cream">{o.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-cream/60">
                {business.openingNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-soft">
              <iframe
                title="Térkép — helyszín"
                src={business.mapEmbedUrl}
                className="h-56 w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Kapcsolatfelvételi űrlap */}
          <Reveal delay={100}>
            <div className="rounded-[2rem] bg-cream p-6 text-ink shadow-soft sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="size-12 text-rose-deep" />
                  <p className="font-display text-2xl">Köszönjük az üzenetet!</p>
                  <p className="max-w-sm text-sm text-ink-soft">
                    Ez egy frontend bemutató űrlap — éles környezetben itt automatikusan
                    e-mailt vagy értesítést kapnál a beküldött adatokkal.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Új üzenet küldése
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label htmlFor="name">Név</Label>
                    <Input id="name" name="name" required placeholder="Teljes neved" className="mt-1.5" />
                  </div>
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone">Telefonszám</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+36 20 000 0000"
                      className="mt-1.5"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="service">Választott szolgáltatás</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-1.5 flex h-12 w-full rounded-2xl border border-ink/15 bg-white/70 px-4 text-sm text-ink shadow-sm outline-none focus-visible:border-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep/25"
                    >
                      <option value="" disabled>
                        Válassz szolgáltatást
                      </option>
                      {serviceCategories.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Üzenet</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Írd meg, milyen napszak / időpont lenne ideális, vagy ha bármi kérdésed van."
                      className="mt-1.5"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      <Send className="size-4" />
                      {loading ? "Küldés..." : "Üzenet küldése"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
