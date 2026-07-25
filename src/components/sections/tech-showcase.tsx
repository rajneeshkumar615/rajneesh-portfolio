"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techMeta, skills } from "@/data/profile";
import { TECH_ICONS, MonogramIcon } from "@/components/ui/tech-icon";
import { SectionHeading } from "./section-heading";

const allTechs = Object.values(skills).flat().filter((v, i, a) => a.indexOf(v) === i);
const categories = ["All", "Language", "Frontend", "Backend", "Database", "Cloud & DevOps"];

function TechCard({ name }: { name: string }) {
  const [hovered, setHovered] = React.useState(false);
  const meta = techMeta[name];
  const color = meta?.color ?? "#888";
  const glow  = meta?.glow  ?? "rgba(136,136,136,0.25)";
  const Icon  = TECH_ICONS[name];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.22 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-default overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors"
      style={{
        borderColor: hovered ? `${color}55` : undefined,
        boxShadow:   hovered ? `0 0 22px ${glow}` : undefined,
      }}
      role="listitem"
      aria-label={name}
    >
      {/* Top highlight line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg,transparent,${color}88,transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ background: `${color}14`, border: `1px solid ${color}38` }}
        >
          {Icon ? (
            <Icon size={20} />
          ) : (
            <MonogramIcon name={name} color={color} size={20} />
          )}
        </div>
        <span className="text-sm font-medium leading-tight">{name}</span>
      </div>

      <AnimatePresence>
        {hovered && meta && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <p className="text-xs leading-relaxed text-muted-foreground">
              {meta.proficiency}
            </p>
            <span
              className="mono-label mt-2 block text-[10px]"
              style={{ color }}
            >
              {meta.category}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TechShowcase() {
  const [active, setActive] = React.useState("All");

  const filtered =
    active === "All"
      ? allTechs
      : allTechs.filter((t) => techMeta[t]?.category === active);

  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Stack"
          title="Technology showcase"
          description="Hover any card to see context on how it was used in production."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                active === c
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          role="list"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((name) => (
              <motion.div
                key={name}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
              >
                <TechCard name={name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
