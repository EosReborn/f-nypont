import { Phone, CalendarCheck } from "lucide-react";
import { business } from "@/data/siteData";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-sand-dark/50 bg-cream/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 py-3 text-sm font-medium text-ink"
      >
        <Phone className="size-4" />
        Hívás
      </a>
      <a
        href="#kapcsolat"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-medium text-cream shadow-soft"
      >
        <CalendarCheck className="size-4" />
        Időpontfoglalás
      </a>
    </div>
  );
}
