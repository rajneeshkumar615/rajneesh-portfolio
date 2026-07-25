"use client";

import { motion } from "framer-motion";
import type { DiagramSpec } from "@/data/profile";

/**
 * Overflow-safe SVG diagram.
 * Uses generous box heights and tightly capped text to guarantee
 * nothing clips on any screen size.
 */

const BOX_W  = 280;  // inner box width (px in viewBox units)
const BOX_H  = 72;   // height per step box — tall enough for two lines
const CONN_H = 36;   // connector + arrowhead height
const PAD_X  = 20;   // left/right margin inside viewBox
const PAD_Y  = 20;   // top/bottom margin

const VIEWBOX_W = BOX_W + PAD_X * 2;

// Max chars before we truncate detail text (SVG has no native text-wrap)
const MAX_DETAIL = 38;

function truncate(s: string, max: number) {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

const CATEGORY_COLORS: Record<string, string> = {
  Security: "#3B82F6",
  DevOps:   "#F59E0B",
  Database: "#10B981",
  Backend:  "#8B5CF6",
  System:   "#06B6D4",
  Media:    "#F472B6",
};

export function SvgDiagram({ spec }: { spec: DiagramSpec }) {
  const accent = CATEGORY_COLORS[spec.category] ?? "#60A5FA";
  const n = spec.steps.length;
  const totalH = PAD_Y + n * BOX_H + (n - 1) * CONN_H + PAD_Y;

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_W} ${totalH}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={spec.title}
      className="w-full"
      style={{ maxWidth: 380 }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`g-${spec.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.07" />
        </linearGradient>
      </defs>

      {spec.steps.map((step, i) => {
        const boxY   = PAD_Y + i * (BOX_H + CONN_H);
        const isFirst = i === 0;
        const isLast  = i === n - 1;
        const midX    = PAD_X + BOX_W / 2;
        const connBotY = boxY + BOX_H + CONN_H;

        return (
          <motion.g
            key={step.label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.09 }}
          >
            {/* Box */}
            <rect
              x={PAD_X}
              y={boxY}
              width={BOX_W}
              height={BOX_H}
              rx={9}
              fill={`url(#g-${spec.id})`}
              stroke={isFirst || isLast ? accent : "rgba(255,255,255,0.11)"}
              strokeWidth={isFirst || isLast ? 1.5 : 1}
            />

            {/* Label — centered, single line, mono */}
            <text
              x={midX}
              y={boxY + 26}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12.5"
              fontWeight="600"
              fontFamily="ui-monospace,monospace"
              fill={isFirst || isLast ? accent : "rgba(255,255,255,0.92)"}
            >
              {truncate(step.label, 30)}
            </text>

            {/* Detail — centered, single line, smaller, strictly capped */}
            <text
              x={midX}
              y={boxY + 50}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontFamily="ui-sans-serif,sans-serif"
              fill="rgba(255,255,255,0.42)"
            >
              {truncate(step.detail, MAX_DETAIL)}
            </text>

            {/* Connector */}
            {i < n - 1 && (
              <>
                <line
                  x1={midX} y1={boxY + BOX_H}
                  x2={midX} y2={connBotY - 8}
                  stroke={accent}
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                {/* Arrowhead */}
                <polygon
                  points={`${midX},${connBotY - 1} ${midX - 5},${connBotY - 9} ${midX + 5},${connBotY - 9}`}
                  fill={accent}
                  fillOpacity="0.65"
                />
              </>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}
