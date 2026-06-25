"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Lock, Database, Network, Cloud,
  GitBranch, Box, Image, Key, Server, Globe, type LucideIcon,
} from "lucide-react";
import { engineeringHighlights } from "@/data/profile";
import { SectionHeading } from "./section-heading";

const icons: Record<string, LucideIcon> = {
  "jwt-auth":   Lock,
  rbac:         ShieldCheck,
  passport:     Key,
  indexing:     Database,
  docker:       Box,
  cicd:         GitBranch,
  cloudinary:   Image,
  aws:          Cloud,
  rest:         Network,
  ownership:    ShieldCheck,
  deployment:   Globe,
  redux:        Server,
};

const accentVariants: Record<string, string> = {
  "jwt-auth":   "text-blue-400   bg-blue-500/10   border-blue-500/25",
  rbac:         "text-violet-400 bg-violet-500/10 border-violet-500/25",
  passport:     "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
  indexing:     "text-green-400  bg-green-500/10  border-green-500/25",
  docker:       "text-sky-400    bg-sky-500/10    border-sky-500/25",
  cicd:         "text-amber-400  bg-amber-500/10  border-amber-500/25",
  cloudinary:   "text-pink-400   bg-pink-500/10   border-pink-500/25",
  aws:          "text-orange-400 bg-orange-500/10 border-orange-500/25",
  rest:         "text-cyan-400   bg-cyan-500/10   border-cyan-500/25",
  ownership:    "text-violet-400 bg-violet-500/10 border-violet-500/25",
  deployment:   "text-teal-400   bg-teal-500/10   border-teal-500/25",
  redux:        "text-purple-400 bg-purple-500/10 border-purple-500/25",
};

export function EngineeringHighlights() {
  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Engineering Highlights"
          title="What I actually built, not just what I used"
          description="The implementation decisions behind the stack — security, data, infrastructure, and the reasoning that connects them."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringHighlights.map((h, i) => {
            const Icon    = icons[h.id] ?? Lock;
            const variant = accentVariants[h.id] ?? "text-accent bg-accent/10 border-accent/25";
            return (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${variant}`}>
                  <Icon size={16} />
                </div>
                <h3 className="mt-4 text-sm font-medium leading-snug">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
