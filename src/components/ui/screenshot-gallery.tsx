"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export type ScreenshotSlot = {
  label: string;
  src?: string;
  aspect?: "wide" | "tall" | "square";
};

// Derives the conventional screenshot path from a slot's label (e.g.
// "Admin Dashboard" -> "/screenshots/admin-dashboard.jpg") whenever an
// explicit `src` isn't supplied, so dropping a matching file into
// /public/screenshots is all that's needed for it to render.
function slugify(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function resolvedSrc(slot: ScreenshotSlot) {
  return slot.src ?? `/screenshots/${slugify(slot.label)}.jpg`;
}

function Placeholder({ label, aspect }: { label: string; aspect: string }) {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-muted/40 text-center transition-colors hover:border-accent/40 ${
        aspect === "tall" ? "aspect-[9/16]" : aspect === "square" ? "aspect-square" : "aspect-video"
      }`}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <ImageIcon size={20} className="relative text-muted-foreground/60" />
      <span className="relative mt-2 px-3 text-xs text-muted-foreground">{label}</span>
      <span className="relative mt-0.5 font-mono text-[10px] text-muted-foreground/50">
        /public/screenshots/{slugify(label)}.jpg
      </span>
    </div>
  );
}

export function ScreenshotGallery({ slots }: { slots: ScreenshotSlot[] }) {
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  // Tracks which slots have a confirmed-loadable image. Starts empty so the
  // placeholder renders immediately (identical to current behavior); a slot
  // only flips to the real screenshot once it's actually verified to load.
  const [loaded, setLoaded] = React.useState<Record<number, boolean>>({});

  React.useEffect(() => {
    setLoaded({});
    const probes = slots.map((slot, i) => {
      const img = new Image();
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
      img.src = resolvedSrc(slot);
      return img;
    });
    return () => {
      probes.forEach((img) => {
        img.onload = null;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(slots)]);

  const openAt = (i: number) => {
    if (!loaded[i]) return;
    setLightbox(i);
  };

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p !== null ? Math.min(p + 1, slots.length - 1) : null));
      if (e.key === "ArrowLeft") setLightbox((p) => (p !== null ? Math.max(p - 1, 0) : null));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, slots.length]);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        {slots.map((slot, i) => (
          <motion.div
            key={slot.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            {loaded[i] ? (
              <button
                onClick={() => openAt(i)}
                className={`group relative w-full overflow-hidden rounded-lg border border-border transition-all hover:border-accent/50 ${
                  slot.aspect === "tall" ? "aspect-[9/16]" : slot.aspect === "square" ? "aspect-square" : "aspect-video"
                }`}
              >
                <img src={resolvedSrc(slot)} alt={slot.label} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <ZoomIn size={20} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-white">{slot.label}</span>
              </button>
            ) : (
              <Placeholder label={slot.label} aspect={slot.aspect ?? "wide"} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && loaded[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 rounded-lg border border-white/20 p-2 text-white hover:bg-white/10">
              <X size={18} />
            </button>
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p !== null ? p - 1 : null)); }}
                className="absolute left-4 rounded-lg border border-white/20 p-2 text-white hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {lightbox < slots.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p !== null ? p + 1 : null)); }}
                className="absolute right-14 rounded-lg border border-white/20 p-2 text-white hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            )}
            <motion.img
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={resolvedSrc(slots[lightbox])}
              alt={slots[lightbox].label}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
