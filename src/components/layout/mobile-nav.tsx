"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile } from "@/data/profile";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  // Lock body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={15} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-border bg-background lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex h-14 items-center justify-between border-b border-border px-5">
                <span className="font-mono text-sm font-medium">Navigation</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted"
                  aria-label="Close navigation"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto p-5">
                <p className="mono-label mb-4 text-[10px] text-muted-foreground">Sections</p>
                <ul className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => go(item.href)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <span className="mono-label text-[10px] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <p className="mono-label mb-4 mt-8 text-[10px] text-muted-foreground">Connect</p>
                <div className="space-y-2">
                  {[
                    { label: "GitHub",   href: profile.links.github,   icon: Github },
                    { label: "LinkedIn", href: profile.links.linkedin,  icon: Linkedin },
                    { label: "Email",    href: `mailto:${profile.email}`, icon: Mail },
                  ].map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <Icon size={14} /> {label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Drawer footer */}
              <div className="border-t border-border p-5">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {profile.name} · {profile.role}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
