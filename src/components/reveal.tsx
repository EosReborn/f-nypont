"use client";

import * as React from "react";

/**
 * Egyszerű, függőség nélküli "megjelenés görgetéskor" wrapper.
 * IntersectionObserver-t használ, data-visible attribútumot állít,
 * amit a globals.css [data-reveal] szabálya animál.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}
