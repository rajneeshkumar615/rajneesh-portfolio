"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Command } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const pillTags = ["JWT · RBAC", "REST APIs", "Docker · CI/CD", "MongoDB", "AWS"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="gradient-mesh bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative flex min-h-[92vh] flex-col justify-center py-24"
      >
        {/* Status pill */}
        <motion.div
          variants={item}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          <span className="mono-label text-[11px] text-muted-foreground">
            Available for engineering roles · Lucknow, India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="max-w-4xl text-[clamp(2.6rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-tight"
        >
          <span className="block">{profile.name}.</span>
          <span className="block text-muted-foreground">Designing secure APIs,</span>
          <span className="block text-muted-foreground">scalable systems, and</span>
          <span className="shimmer-text block">production-grade backends.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={item}
          className="mt-7 max-w-[52ch] text-base leading-[1.7] text-muted-foreground sm:text-[1.05rem]"
        >
          Building software that remains reliable when real users, real traffic, and real
          complexity arrive — authentication, authorization, and the infrastructure beneath both.
        </motion.p>

        {/* Capability tags */}
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {pillTags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">View projects</span>
            <ArrowUpRight size={14} className="relative transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#architecture-gallery"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Architecture gallery
          </a>
          <button
            onClick={() =>
              document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
            }
            className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Command size={13} />
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
          </button>
        </motion.div>

        {/* Animated stats strip */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-5">
              <div className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
