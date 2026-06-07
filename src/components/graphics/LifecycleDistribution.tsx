"use client";

import { motion, useReducedMotion } from "motion/react";

type Row = { label: string; value: number; color: string; group: "selling" | "delivering" | "closed" };

const rows: Row[] = [
  { label: "Prospecting", value: 251, color: "#2E75B6", group: "selling" },
  { label: "Re-Engagement", value: 38, color: "#2E75B6", group: "selling" },
  { label: "Onboarding", value: 28, color: "#F37021", group: "delivering" },
  { label: "Active", value: 46, color: "#F37021", group: "delivering" },
  { label: "Completing", value: 24, color: "#F37021", group: "delivering" },
  { label: "Completed", value: 571, color: "#2E7D32", group: "closed" },
  { label: "Won", value: 14, color: "#2E7D32", group: "closed" },
  { label: "Dead", value: 17, color: "#C0392B", group: "closed" },
  { label: "Other", value: 35, color: "#8B95A5", group: "closed" },
];

/** Horizontal bar chart showing engagement distribution by Lifecycle Stage. */
export function LifecycleDistribution() {
  const reduced = useReducedMotion();
  const max = Math.max(...rows.map((r) => r.value));
  const total = rows.reduce((acc, r) => acc + r.value, 0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
        }}
      >
        {rows.map((row, i) => {
          const pct = (row.value / max) * 100;
          return (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(140px, 160px) 1fr 64px",
                alignItems: "center",
                gap: "var(--space-3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: row.color,
                  }}
                />
                <span className="hl-label" style={{ color: "var(--text-primary)" }}>
                  {row.label}
                </span>
              </div>
              <div
                style={{
                  height: 14,
                  background: "var(--bg-sunken)",
                  borderRadius: "var(--radius-pill)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.div
                  initial={reduced ? { width: `${pct}%` } : { width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.05,
                    duration: 1.0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    height: "100%",
                    background: `linear-gradient(90deg, ${row.color}cc, ${row.color})`,
                    borderRadius: "var(--radius-pill)",
                  }}
                />
              </div>
              <div className="hl-mono" style={{ textAlign: "right", color: "var(--text-secondary)" }}>
                {row.value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "var(--space-6)",
          paddingTop: "var(--space-4)",
          borderTop: "1px dashed var(--border-subtle)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-4)",
          alignItems: "center",
        }}
      >
        <div className="hl-overline-muted">Total</div>
        <div className="hl-mono" style={{ fontSize: "1rem", color: "var(--text-primary)", fontWeight: 600 }}>
          {total.toLocaleString()} engagements
        </div>
        <span style={{ flex: 1 }} />
        <Legend dot="#2E75B6" label="In the sales funnel" />
        <Legend dot="#F37021" label="In delivery" />
        <Legend dot="#2E7D32" label="Closed / completed" />
      </div>
    </div>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: dot }} />
      <span className="hl-small" style={{ color: "var(--text-secondary)" }}>
        {label}
      </span>
    </div>
  );
}
