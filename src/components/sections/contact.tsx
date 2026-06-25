"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Code2, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    label: "Email",
    display: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    display: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    display: "rajneeshkumar615",
    href: profile.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    display: "in/rajneesh-kumar615",
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    display: "Rajneesh_Kumar615",
    href: profile.links.leetcode,
    icon: Code2,
  },
  {
    label: "GeeksforGeeks",
    display: "uchihaitacipvy",
    href: profile.links.gfg,
    icon: BookOpen,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="gradient-mesh relative overflow-hidden rounded-2xl border border-border bg-card p-10 sm:p-14"
        >
          <span className="mono-label text-xs text-accent">Contact</span>
          <h2 className="mt-3 max-w-xl text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Building something that needs a backend engineer?
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Open to engineering roles and technical collaborations. Based in {profile.location}.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3.5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <l.icon size={15} className="shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium">{l.label}</div>
                    <div className="truncate text-xs text-muted-foreground">{l.display}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-2 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js 15 & Framer Motion.
          </span>
          <span className="font-mono">{profile.location}</span>
        </footer>
      </div>
    </section>
  );
}
