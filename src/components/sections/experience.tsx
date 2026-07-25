"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { experience } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened"
          description="Two internships across different problem domains — production full-stack engineering and applied machine learning."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-4 left-[7px] top-2 hidden w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-4 sm:grid-cols-[16px_1fr] sm:gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden pt-1.5 sm:block">
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/30" />
                    <span className="relative h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold">{job.role}</h3>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-accent">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="mono-label text-xs text-muted-foreground">
                        {job.start} — {job.end}
                      </div>
                      <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                        <MapPin size={10} /> {job.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
