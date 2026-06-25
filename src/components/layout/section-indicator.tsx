"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/profile";

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export function SectionIndicator() {
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {navItems.map((item) => {
        const id  = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <a
            key={id}
            href={item.href}
            className="group flex items-center gap-2.5"
            aria-label={item.label}
          >
            <span
              className={`block text-right font-mono text-[9px] uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "max-w-[80px] text-accent opacity-100"
                  : "max-w-0 overflow-hidden opacity-0 group-hover:max-w-[80px] group-hover:opacity-60"
              }`}
            >
              {item.label}
            </span>
            <motion.span
              animate={{
                width:           isActive ? 20 : 6,
                backgroundColor: isActive ? "hsl(var(--accent))" : "hsl(var(--border))",
              }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] rounded-full"
            />
          </a>
        );
      })}
    </div>
  );
}
