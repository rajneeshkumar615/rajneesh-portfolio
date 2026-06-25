"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Radio, Server, Database, Layers } from "lucide-react";
import Link from "next/link";
import { projects, projectDeployment } from "@/data/profile";
import { SectionHeading } from "./section-heading";
import { ScreenshotGallery, type ScreenshotSlot } from "@/components/ui/screenshot-gallery";

const slots: Record<string, ScreenshotSlot[]> = {
  "zarrin-blogs": [
    { label: "Homepage View",    aspect: "wide" },
    { label: "Admin Dashboard",  aspect: "wide" },
    { label: "Blog Feed",        aspect: "wide" },
  ],
  staynest: [
    { label: "Desktop View",  aspect: "wide" },
    { label: "Mobile View",   aspect: "tall" },
    { label: "Listing Detail",aspect: "wide" },
  ],
};

const layerIcon = (layer: string) => {
  if (layer === "Frontend") return <ArrowUpRight size={13} className="shrink-0 text-accent" />;
  if (layer === "API")      return <Server        size={13} className="shrink-0 text-accent" />;
  if (layer === "Database") return <Database      size={13} className="shrink-0 text-accent" />;
  if (layer === "CI/CD")    return <Layers        size={13} className="shrink-0 text-accent" />;
  return <Radio size={13} className="shrink-0 text-accent" />;
};

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Production projects"
          description="Two full-stack applications built and deployed end to end — from schema design to CI/CD pipeline."
        />

        <div className="space-y-14">
          {projects.map((proj, idx) => {
            const deploy = projectDeployment[proj.id];
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* ── Header ── */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-7">
                  <div>
                    <span className="mono-label text-xs text-muted-foreground">{proj.year}</span>
                    <h3 className="mt-1.5 text-2xl font-medium tracking-tight">{proj.name}</h3>
                    <p className="mt-1 text-sm text-accent">{proj.tagline}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {deploy && (
                      <a
                        href={deploy.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ background: "hsl(var(--signal)/0.07)" }}
                        className="inline-flex items-center gap-1.5 rounded-md border border-signal/40 px-3 py-1.5 text-xs font-medium text-signal transition-colors hover:bg-signal/15"
                      >
                        <Radio size={11} className="animate-pulse" /> Live
                      </a>
                    )}
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                    >
                      <Github size={13} /> Repo
                    </a>
                    <Link
                      href={proj.link}
                      className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform hover:-translate-y-0.5"
                    >
                      Case study <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="grid lg:grid-cols-[1fr_300px]">
                  {/* Left */}
                  <div className="border-b border-border p-7 lg:border-b-0 lg:border-r">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {proj.description}
                    </p>

                    <h4 className="mono-label mt-6 text-[10px] text-muted-foreground">
                      Highlights
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {proj.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <h4 className="mono-label mt-6 text-[10px] text-muted-foreground">Stack</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <h4 className="mono-label mt-6 text-[10px] text-muted-foreground">Screens</h4>
                    <div className="mt-3">
                      <ScreenshotGallery slots={slots[proj.id] ?? []} />
                    </div>
                  </div>

                  {/* Right — deployment */}
                  {deploy && (
                    <div className="p-7">
                      <h4 className="mono-label text-[10px] text-muted-foreground">
                        Deployment
                      </h4>

                      <div className="mt-4 space-y-2.5">
                        {deploy.hostingInfrastructure.map((h) => (
                          <div
                            key={h.layer}
                            className="flex items-start gap-2.5 rounded-lg border border-border bg-background p-3"
                          >
                            {layerIcon(h.layer)}
                            <div className="min-w-0">
                              <span className="mono-label block text-[10px] text-muted-foreground">
                                {h.layer}
                              </span>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {h.provider}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h4 className="mono-label mt-6 text-[10px] text-muted-foreground">
                        Stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {deploy.deploymentStack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <h4 className="mono-label mt-6 text-[10px] text-muted-foreground">
                        Environment
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {deploy.environmentSetup.map((e) => (
                          <li
                            key={e}
                            className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
