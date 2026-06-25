"use client";

import { motion } from "framer-motion";
import { about } from "@/data/profile";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={about.eyebrow} title={about.heading} />

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[66ch] text-[1.025rem] leading-[1.75] text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mono-label text-[10px] text-muted-foreground">Engineering focus</h3>
            <ul className="mt-5 space-y-4">
              {about.focusAreas.map((a, i) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mono-label mt-[3px] shrink-0 text-[10px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
