"use client";

import * as React from "react";
import { serviceCategories } from "@/data/siteData";
import { DynamicIcon } from "@/components/icon-map";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PriceList() {
  const [value, setValue] = React.useState(serviceCategories[0].id);

  React.useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace("#arlista-", "");
      if (serviceCategories.some((c) => c.id === raw)) {
        setValue(raw);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="arlista" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-deep">
            Árlista
          </span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Átlátható árak, rejtett költségek nélkül
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Kattints egy kategóriára a részletes árakért.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 rounded-[2rem] border border-sand-dark/40 bg-white/70 p-3 shadow-card sm:p-6">
          <Accordion
            type="single"
            collapsible
            value={value}
            onValueChange={(v) => v && setValue(v)}
          >
            {serviceCategories.map((cat) => (
              <AccordionItem key={cat.id} value={cat.id} id={`arlista-${cat.id}`}>
                <AccordionTrigger className="px-2 sm:px-3">
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blush text-rose-deep">
                      <DynamicIcon name={cat.icon} className="size-4.5" />
                    </span>
                    <span className="flex flex-col text-left">
                      <span>{cat.title}</span>
                      <span className="text-xs font-normal font-body text-ink-soft">
                        {cat.description}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-2 sm:px-3">
                  {cat.table ? (
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[420px] border-separate border-spacing-y-2 text-sm">
                        <thead>
                          <tr>
                            {cat.table.columns.map((col, i) => (
                              <th
                                key={i}
                                className={cn(
                                  "pb-1 text-xs font-semibold uppercase tracking-wide text-ink-soft",
                                  i === 0 ? "text-left" : "text-center"
                                )}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {cat.table.rows.map((row) => (
                            <tr key={row.label} className="bg-cream">
                              <td className="rounded-l-xl px-3 py-3 font-display text-base text-ink">
                                {row.label}
                              </td>
                              {row.values.map((val, i) => (
                                <td
                                  key={i}
                                  className={cn(
                                    "px-3 py-3 text-center font-medium text-ink",
                                    i === row.values.length - 1 ? "rounded-r-xl" : ""
                                  )}
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <ul className="divide-y divide-sand-dark/40">
                      {cat.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start justify-between gap-4 py-3"
                        >
                          <div>
                            <p className="font-medium text-ink">{item.name}</p>
                            {item.description && (
                              <p className="text-xs text-ink-soft">{item.description}</p>
                            )}
                          </div>
                          <span className="whitespace-nowrap font-display text-base text-rose-deep">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {cat.note && (
                    <div className="mt-4 rounded-2xl bg-blush/60 px-4 py-3 text-center text-sm font-medium text-ink">
                      {cat.note}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}