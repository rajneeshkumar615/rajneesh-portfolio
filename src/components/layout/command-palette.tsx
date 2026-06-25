"use client";

import * as React from "react";
import { Command } from "cmdk";
import {
  Github, Linkedin, Mail, Phone, FileText,
  Briefcase, FolderGit2, Cpu, Layers,
  Sun, Moon, ArrowRight, BookOpen, Code2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { profile, navItems } from "@/data/profile";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/55 pt-[14vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted-foreground">
          <div className="flex items-center border-b border-border px-3">
            <Command.Input
              autoFocus
              placeholder="Type a command or search…"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-[60vh] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigate">
              {navItems.map((item) => (
                <Command.Item
                  key={item.href}
                  onSelect={() => go(item.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-muted"
                >
                  {navIcon(item.label)}
                  {item.label}
                  <ArrowRight size={12} className="ml-auto text-muted-foreground" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Connect">
              {[
                { label: "Email",         href: `mailto:${profile.email}`,    icon: Mail },
                { label: "Phone",         href: `tel:${profile.phone}`,       icon: Phone },
                { label: "GitHub",        href: profile.links.github,          icon: Github },
                { label: "LinkedIn",      href: profile.links.linkedin,        icon: Linkedin },
                { label: "LeetCode",      href: profile.links.leetcode,        icon: Code2 },
                { label: "GeeksforGeeks", href: profile.links.gfg,             icon: BookOpen },
              ].map(({ label, href, icon: Icon }) => (
                <Command.Item
                  key={label}
                  onSelect={() => go(href)}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-muted"
                >
                  <Icon size={14} /> {label}
                </Command.Item>
              ))}
              <Command.Item
                onSelect={() => go("/resume.pdf")}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-muted"
              >
                <FileText size={14} /> Download Resume
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme">
              <Command.Item
                onSelect={() => { setTheme("dark"); setOpen(false); }}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-muted"
              >
                <Moon size={14} /> Dark mode
              </Command.Item>
              <Command.Item
                onSelect={() => { setTheme("light"); setOpen(false); }}
                className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm aria-selected:bg-muted"
              >
                <Sun size={14} /> Light mode
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

function navIcon(label: string) {
  const s = 14;
  switch (label) {
    case "Experience":   return <Briefcase  size={s} />;
    case "Projects":     return <FolderGit2 size={s} />;
    case "Stack":        return <Cpu        size={s} />;
    case "Architecture": return <Layers     size={s} />;
    default:             return <ArrowRight size={s} />;
  }
}
