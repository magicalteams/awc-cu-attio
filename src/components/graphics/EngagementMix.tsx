"use client";

import { motion, useReducedMotion } from "motion/react";

type Slice = { label: string; value: number; color: string };

const slices: Slice[] = [
  { label: "Executive Coaching", value: 525, color: "#F37021" },
  { label: "Group Programs", value: 250, color: "#2E75B6" },
  { label: "PTC", value: 124, color: "#2E7D32" },
  { label: "Speaking", value: 108, color: "#E67E22" },
  { label: "Consulting", value: 17, color: "#C0392B" },
];

const SIZE = 240;
const R_OUTER = 104;
const R_INNER = 60;
const CX = SIZE / 2;
const CY = SIZE / 2;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function arcPath(startAngle: number, endAngle: number) {
  const startOuter = polarToCartesian(CX, CY, R_OUTER, endAngle);
  const endOuter = polarToCartesian(CX, CY, R_OUTER, startAngle);
  const startInner = polarToCartesian(CX, CY, R_INNER, endAngle);
  const endInner = polarToCartesian(CX, CY, R_INNER, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", startOuter.x, startOuter.y,
    "A", R_OUTER, R_OUTER, 0, largeArc, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", R_INNER, R_INNER, 0, largeArc, 1, startInner.x, startInner.y,
    "Z",
  ].join(" ");
}

/** Donut chart of engagement mix, animated on scroll-in. */
export function EngagementMix() {
  const reduced = useReducedMotion();
  const total = slices.reduce((acc, s) => acc + s.value, 0);

  let cursor = 0;
  const arcs = slices.map((slice) => {
    const startAngle = (cursor / total) * 360;
    cursor += slice.value;
    const endAngle = (cursor / total) * 360;
    return { slice, startAngle, endAngle, path: arcPath(startAngle, endAngle) };
  });

  return (
    <div className="engagement-mix-layout">
      <div style={{ position: "relative", width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {arcs.map(({ slice, path }, i) => (
            <motion.path
              key={slice.label}
              d={path}
              fill={slice.color}
              initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            />
          ))}
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <div>
            <div
              className="hl-stat"
              style={{ fontSize: "2.5rem", color: "var(--text-primary)" }}
            >
              {total.toLocaleString()}
            </div>
            <div className="hl-overline-muted" style={{ marginTop: "var(--space-1)" }}>
              Engagements
            </div>
          </div>
        </div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
        }}
      >
        {arcs.map(({ slice }) => (
          <motion.li
            key={slice.label}
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "14px minmax(0, 1fr) auto",
              gap: "var(--space-3)",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                background: slice.color,
              }}
            />
            <div className="hl-label" style={{ color: "var(--text-primary)" }}>
              {slice.label}
            </div>
            <div className="hl-mono" style={{ color: "var(--text-secondary)" }}>
              {slice.value.toLocaleString()}
            </div>
          </motion.li>
        ))}
      </ul>
      <style>{`
        .engagement-mix-layout {
          display: grid;
          gap: var(--space-6);
          align-items: center;
          /* Stacked by default (mobile / narrow card) */
          grid-template-columns: minmax(0, 1fr);
          justify-items: center;
        }
        /* Side-by-side once the parent container has room for donut + legend */
        @container (min-width: 30rem) {
          .engagement-mix-layout {
            grid-template-columns: auto minmax(0, 1fr);
            justify-items: stretch;
          }
        }
      `}</style>
    </div>
  );
}
