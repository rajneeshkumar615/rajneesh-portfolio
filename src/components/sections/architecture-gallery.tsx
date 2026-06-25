"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import { architectureGallery } from "@/data/profile";
import { SvgDiagram } from "@/components/ui/svg-diagram";
import { SectionHeading } from "./section-heading";

const diagramCategories = ["All", ...Array.from(new Set(architectureGallery.map((d) => d.category)))];

const categoryBadge: Record<string, string> = {
  System:   "bg-cyan-500/12   text-cyan-400   border-cyan-500/30",
  Security: "bg-blue-500/12   text-blue-400   border-blue-500/30",
  DevOps:   "bg-amber-500/12  text-amber-400  border-amber-500/30",
  Backend:  "bg-violet-500/12 text-violet-400 border-violet-500/30",
  Database: "bg-emerald-500/12 text-emerald-400 border-emerald-500/30",
  Media:    "bg-pink-500/12   text-pink-400   border-pink-500/30",
};

export function ArchitectureGallery() {
  const [filter, setFilter] = React.useState("All");
  const [active, setActive] = React.useState(architectureGallery[0].id);
  const [fullscreen, setFullscreen] = React.useState(false);

  const filtered =
    filter === "All"
      ? architectureGallery
      : architectureGallery.filter((d) => d.category === filter);

  // Keep active in filtered list
  React.useEffect(() => {
    if (!filtered.find((d) => d.id === active)) {
      setActive(filtered[0]?.id ?? "");
    }
  }, [filter]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const current = architectureGallery.find((d) => d.id === active);

  return (
    <>
      <section id="architecture-gallery" className="border-b border-border py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Architecture Gallery"
            title="Engineering diagrams"
            description="System flows, security models, and deployment pipelines — presented as engineering documentation, not illustrations."
          />

          {/* Category filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {diagramCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                  filter === cat
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
            {/* Diagram list — scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {filtered.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => setActive(spec.id)}
                  className={`flex min-w-[200px] shrink-0 items-start gap-2.5 rounded-lg border px-3.5 py-3 text-left transition-colors lg:min-w-0 lg:w-full ${
                    active === spec.id
                      ? "border-accent/50 bg-accent/5"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <span
                    className={`mono-label mt-0.5 shrink-0 rounded border px-1.5 py-0.5 text-[9px] ${
                      categoryBadge[spec.category] ?? ""
                    }`}
                  >
                    {spec.category}
                  </span>
                  <span className="text-sm font-medium leading-snug">{spec.title}</span>
                </button>
              ))}
            </div>

            {/* Active diagram panel */}
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  {/* Panel header */}
                  <div className="mb-6 flex w-full items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`mono-label shrink-0 rounded border px-2 py-0.5 text-[9px] ${
                          categoryBadge[current.category] ?? ""
                        }`}
                      >
                        {current.category}
                      </span>
                      <h3 className="truncate text-sm font-semibold">{current.title}</h3>
                    </div>
                    <button
                      onClick={() => setFullscreen(true)}
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label="View fullscreen"
                    >
                      <ZoomIn size={14} />
                    </button>
                  </div>

                  {/* Diagram — centered, max-width capped */}
                  <div className="w-full flex justify-center">
                    <SvgDiagram spec={current} />
                  </div>

                  {/* Step count */}
                  <p className="mt-6 font-mono text-[11px] text-muted-foreground">
                    {current.steps.length} layers · {current.category}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-2xl w-full max-w-md"
            >
              <button
                onClick={() => setFullscreen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-muted"
              >
                <X size={15} />
              </button>
              <h3 className="mb-6 text-base font-semibold">{current.title}</h3>
              <SvgDiagram spec={current} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
