"use client";

import { motion } from "framer-motion";
import {
  Briefcase, FolderGit2, Code2, Cloud,
  GraduationCap, Network, ArrowUpRight,
} from "lucide-react";
import { experience, projects } from "@/data/profile";
import { SectionHeading } from "./section-heading";
import { GithubStats } from "./github-stats";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Tile({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      whileHover={{ y: -3 }}
      className={`rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export function BentoOverview() {
  const latestJob = experience[0];

  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow="Overview" title="The work, at a glance" />

        <div className="grid auto-rows-[minmax(136px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Experience */}
          <Tile className="md:col-span-2 lg:col-span-2" delay={0}>
            <a href="#experience" className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <Briefcase size={17} className="text-accent" />
                <ArrowUpRight size={13} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Experience</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {latestJob.role} · {latestJob.company}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  2 internships — full-stack engineering & applied ML
                </p>
              </div>
            </a>
          </Tile>

          {/* Projects */}
          <Tile className="md:col-span-2 lg:col-span-2" delay={0.05}>
            <a href="#projects" className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <FolderGit2 size={17} className="text-accent" />
                <ArrowUpRight size={13} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Projects</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {projects.map((p) => p.name).join(" · ")}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  2 production apps · 20+ REST APIs · deployed end to end
                </p>
              </div>
            </a>
          </Tile>

          {/* DSA */}
          <Tile delay={0.1}>
            <div className="flex h-full flex-col justify-between">
              <Code2 size={17} className="text-accent" />
              <div>
                <h3 className="text-sm font-semibold">DSA</h3>
                <p className="mt-1 font-mono text-2xl font-semibold">500+</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  LeetCode (190+) · GfG (320+)
                </p>
              </div>
            </div>
          </Tile>

          {/* Cloud */}
          <Tile delay={0.12}>
            <div className="flex h-full flex-col justify-between">
              <Cloud size={17} className="text-accent" />
              <div>
                <h3 className="text-sm font-semibold">Cloud & DevOps</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  AWS · Docker · CI/CD · Vercel · Render
                </p>
              </div>
            </div>
          </Tile>

          {/* Internship */}
          <Tile delay={0.14}>
            <div className="flex h-full flex-col justify-between">
              <GraduationCap size={17} className="text-accent" />
              <div>
                <h3 className="text-sm font-semibold">Internships</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sipher Web · NIELIT (Govt. of India)
                </p>
              </div>
            </div>
          </Tile>

          {/* System Design */}
          <Tile delay={0.16}>
            <a href="#architecture-gallery" className="flex h-full flex-col justify-between">
              <Network size={17} className="text-accent" />
              <div>
                <h3 className="text-sm font-semibold">System Design</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Indexing · auth architecture · API design
                </p>
              </div>
            </a>
          </Tile>

          {/* GitHub — spans full row */}
          <Tile className="lg:col-span-4" delay={0.2}>
            <GithubStats />
          </Tile>
        </div>
      </div>
    </section>
  );
}
