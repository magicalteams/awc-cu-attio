"use client";

import { motion, useReducedMotion } from "motion/react";

const stages = [
  { id: "prospecting", label: "Prospecting", color: "#8B95A5" },
  { id: "onboarding", label: "Onboarding", color: "#2E75B6" },
  { id: "active", label: "Active", color: "#F37021" },
  { id: "completing", label: "Completing", color: "#E67E22" },
  { id: "completed", label: "Completed", color: "#2E7D32" },
  { id: "won", label: "Won", color: "#2E7D32" },
  { id: "reengagement", label: "Re-Engagement", color: "#2E75B6" },
  { id: "dead", label: "Dead", color: "#C0392B" },
  { id: "other", label: "Other", color: "#8B95A5" },
];

/**
 * The Lifecycle Stage progression — a row of 9 stages with a moving glow
 * cycling through to demonstrate the journey.
 */
export function LifecycleProgression() {
  const reduced = useReducedMotion();

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          alignItems: "stretch",
          position: "relative",
          overflowX: "auto",
          paddingBottom: "var(--space-2)",
        }}
      >
        {stages.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: "1 1 0",
              minWidth: 110,
              padding: "var(--space-4) var(--space-3)",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* moving highlight bar — cycles across stages */}
            {!reduced && (
              <motion.div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${stage.color}22, ${stage.color}05)`,
                  pointerEvents: "none",
                }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: stages.length * 0.5 - 4,
                }}
              />
            )}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: stage.color,
                }}
              />
              <div
                className="hl-label"
                style={{ color: "var(--text-primary)", fontWeight: 600 }}
              >
                {stage.label}
              </div>
              <div className="hl-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
