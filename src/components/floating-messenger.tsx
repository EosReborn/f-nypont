import { MessageCircle } from "lucide-react";
import { business } from "@/data/siteData";

export function FloatingMessenger() {
  return (
    <a
      href={business.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Írj üzenetet Messengeren"
      className="fixed bottom-24 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-deep to-ink text-cream shadow-soft transition-transform hover:-translate-y-1 hover:scale-105 sm:bottom-8"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
