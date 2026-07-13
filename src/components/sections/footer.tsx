import { ThumbsUp, Camera, Phone, MapPin } from "lucide-react";
import { business, nav } from "@/data/siteData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark/60 pt-16 pb-28 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-ink">
              {business.name}
              <span className="ml-1.5 text-xs font-body font-medium uppercase tracking-[0.2em] text-rose-deep">
                {business.nameAccent}
              </span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {business.slogan}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream"
              >
                <ThumbsUp className="size-4.5" />
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:bg-ink hover:text-cream"
              >
                <Camera className="size-4.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Gyorslinkek
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-rose-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Elérhetőség
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-rose-deep"
            >
              <Phone className="size-4" /> {business.phoneDisplay}
            </a>
            <p className="mt-2.5 flex items-start gap-2 text-sm text-ink-soft">
              <MapPin className="mt-0.5 size-4 shrink-0" /> {business.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink-soft sm:flex-row">
          <p>
            © {year} {business.name} {business.nameAccent}. Minden jog fenntartva.
          </p>
          <p>Az árak és nyitvatartás tájékoztató jellegűek, egyeztetés alapján változhatnak.</p>
        </div>
      </div>
    </footer>
  );
}
