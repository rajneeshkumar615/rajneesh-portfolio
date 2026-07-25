"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Command } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border/70 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/0"
      }`}
    >
      <div className="container flex h-14 items-center justify-between gap-4">

        {/* Brand */}
        <Link href="#" className="group flex shrink-0 items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-foreground/5 transition-colors group-hover:border-accent/50 group-hover:bg-accent/8">
            <span className="font-mono text-[11px] font-bold tracking-tight">RK</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-[13px] font-semibold leading-[1.2] tracking-tight">
              {profile.name}
            </span>
            <span className="block font-mono text-[9.5px] uppercase tracking-[0.09em] text-muted-foreground">
              {profile.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
            }
            className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <Command size={11} />
            <span className="hidden md:inline">Search</span>
            <kbd className="ml-0.5 rounded border border-border bg-muted px-1 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
