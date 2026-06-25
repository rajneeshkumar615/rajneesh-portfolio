"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { dashboardMetrics, dashboardCapabilities } from "@/data/profile";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeading } from "./section-heading";

const groupMeta: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Practice:    { color: "text-accent",    bg: "bg-accent/8",    border: "border-accent/20",    dot: "bg-accent" },
  Experience:  { color: "text-signal",    bg: "bg-signal/8",    border: "border-signal/20",    dot: "bg-signal" },
  Engineering: { color: "text-amber-400", bg: "bg-amber-400/8", border: "border-amber-400/20", dot: "bg-amber-400" },
};

const capabilityColors: Record<string, string> = {
  "JWT Authentication": "text-blue-400   border-blue-400/30   bg-blue-400/8",
  "RBAC":               "text-violet-400 border-violet-400/30 bg-violet-400/8",
  "Docker":             "text-sky-400    border-sky-400/30    bg-sky-400/8",
  "CI/CD":              "text-amber-400  border-amber-400/30  bg-amber-400/8",
  "AWS":                "text-orange-400 border-orange-400/30 bg-orange-400/8",
  "MongoDB":            "text-green-400  border-green-400/30  bg-green-400/8",
  "Passport.js":        "text-emerald-400 border-emerald-400/30 bg-emerald-400/8",
  "Cloudinary":         "text-pink-400   border-pink-400/30   bg-pink-400/8",
  "Redux":              "text-purple-400 border-purple-400/30 bg-purple-400/8",
  "REST APIs":          "text-cyan-400   border-cyan-400/30   bg-cyan-400/8",
  "MVC":                "text-teal-400   border-teal-400/30   bg-teal-400/8",
  "MongoDB Atlas":      "text-green-300  border-green-300/30  bg-green-300/8",
};

export function EngineeringDashboard() {
  const groups = [...new Set(dashboardMetrics.map((m) => m.group))];

  return (
    <section id="dashboard" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering Metrics"
          title="By the numbers"
          description="A live snapshot of the systems built, problems solved, and production capabilities shipped."
        />

        {/* Metric groups */}
        <div className="space-y-5">
          {groups.map((group) => {
            const items = dashboardMetrics.filter((m) => m.group === group);
            const meta  = groupMeta[group] ?? groupMeta.Practice;
            return (
              <div key={group}>
                <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 ${meta.border} ${meta.bg}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  <span className={`mono-label text-[10px] ${meta.color}`}>{group}</span>
                </div>
                <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                  {items.map((m, i) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="group bg-background px-6 py-6 transition-colors hover:bg-muted/40"
                    >
                      <div className={`font-mono text-3xl font-semibold tracking-tight ${meta.color}`}>
                        <AnimatedCounter value={m.value} suffix={m.suffix} />
                      </div>
                      <div className="mt-1.5 text-sm text-muted-foreground">{m.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Production capabilities */}
        <div className="mt-10 rounded-xl border border-border bg-card p-7">
          <h3 className="mono-label text-[10px] text-muted-foreground">Production capabilities</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {dashboardCapabilities.map((cap, i) => {
              const cls = capabilityColors[cap] ?? "text-accent border-accent/30 bg-accent/8";
              return (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium ${cls}`}
                  style={{}}
                >
                  {cap}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
