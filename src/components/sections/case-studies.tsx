"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function CaseStudies() {
  const [active, setActive] = React.useState(0);
  const study = caseStudies[active];

  return (
    <section id="case-studies" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Technical deep-dives"
          title="Case studies"
          description="The reasoning behind two production decisions — problem, approach, and measured outcome."
        />

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Selector */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.id}
                onClick={() => setActive(i)}
                className={`flex min-w-[180px] shrink-0 flex-col gap-1 rounded-xl border px-4 py-3.5 text-left transition-all lg:min-w-0 ${
                  active === i
                    ? "border-accent/50 bg-accent/5 shadow-sm"
                    : "border-border hover:bg-muted/50"
                }`}
              >
                <span className="mono-label text-[10px] text-accent">{`0${i + 1}`}</span>
                <span className="text-sm font-medium leading-snug">{cs.title}</span>
                <span className="mono-label text-[9px] text-muted-foreground">{cs.context}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 sm:p-9"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <div>
                    <span className="mono-label text-[10px] text-muted-foreground">
                      {study.context}
                    </span>
                    <h3 className="mt-1.5 text-xl font-semibold leading-snug">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  {/* Problem */}
                  <div className="rounded-lg border border-border bg-background/60 p-4">
                    <h4 className="mono-label text-[10px] text-muted-foreground">Problem</h4>
                    <p className="mt-3 text-sm leading-relaxed">{study.problem}</p>
                  </div>

                  {/* Approach */}
                  <div className="rounded-lg border border-border bg-background/60 p-4">
                    <h4 className="mono-label text-[10px] text-muted-foreground">Approach</h4>
                    <ol className="mt-3 space-y-2.5">
                      {study.approach.map((a, idx) => (
                        <li key={a} className="flex gap-2.5 text-sm leading-relaxed">
                          <span className="mono-label mt-[1px] shrink-0 text-[10px] text-accent">
                            {idx + 1}
                          </span>
                          {a}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Outcome */}
                  <div className="rounded-lg border border-signal/25 bg-signal/5 p-4">
                    <h4 className="mono-label text-[10px] text-signal">Outcome</h4>
                    <p className="mt-3 text-sm leading-relaxed">{study.outcome}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
                  {study.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
