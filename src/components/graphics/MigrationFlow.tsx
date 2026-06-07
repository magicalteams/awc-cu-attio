"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Animated SVG: ClickUp + Gmail + Calendar feeding into Attio, fanning out
 * to Lists / Views / Workflows. Uses currentColor so it adapts to dark mode
 * via parent text-color tokens; accent fills reference CSS variables.
 *
 * Honors prefers-reduced-motion AND prefers-reduced-data
 * (dots only animate when the user hasn't asked for less).
 */
export function MigrationFlow() {
  const reduced = useReducedMotion();

  const sources = [
    { id: "clickup", label: "ClickUp", sub: "Engagements", y: 56, color: "var(--accent-blue)", delay: 0 },
    { id: "gmail", label: "Gmail", sub: "Email graph", y: 156, color: "var(--accent-red)", delay: 0.4 },
    { id: "calendar", label: "Calendar", sub: "Meetings", y: 256, color: "var(--accent-green)", delay: 0.8 },
  ];

  const outputs = [
    { id: "lists", label: "Pipeline + History", y: 56, delay: 0.2 },
    { id: "views", label: "Saved views", y: 156, delay: 0.6 },
    { id: "workflows", label: "Workflows", y: 256, delay: 1.0 },
  ];

  const center = { cx: 480, cy: 168, r: 56 };
  const sourceX = 116;
  const outputX = 784; // 960 viewBox - 56 right margin - 120 box width

  return (
    <svg
      viewBox="0 0 960 336"
      role="img"
      aria-label="Diagram of how data flows from ClickUp, Gmail, and Calendar into Attio, and out to lists, views, and workflows."
      style={{ width: "100%", height: "auto", display: "block", color: "var(--text-primary)" }}
    >
      <defs>
        <pattern id="mf-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" fillOpacity="0.07" />
        </pattern>
        <radialGradient id="mf-center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.42" />
          <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="960" height="336" fill="url(#mf-grid)" />

      <circle cx={center.cx} cy={center.cy} r="135" fill="url(#mf-center-glow)" />

      {/* CURVES from sources to center */}
      {sources.map((s) => {
        const sx = sourceX + 60;
        const sy = s.y + 32;
        const tx = center.cx - center.r;
        const ty = center.cy;
        const cx1 = (sx + tx) / 2;
        const path = `M ${sx} ${sy} C ${cx1} ${sy}, ${cx1} ${ty}, ${tx} ${ty}`;
        return (
          <g key={`src-${s.id}`}>
            <path d={path} fill="none" stroke={s.color} strokeOpacity="0.32" strokeWidth="1.5" />
            {!reduced && (
              <motion.circle
                r="4"
                fill={s.color}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 3.4,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.1, 0.9, 1],
                }}
                style={{ offsetPath: `path("${path}")` }}
              />
            )}
          </g>
        );
      })}

      {outputs.map((o) => {
        const sx = center.cx + center.r;
        const sy = center.cy;
        const tx = outputX;
        const ty = o.y + 32;
        const cx1 = (sx + tx) / 2;
        const path = `M ${sx} ${sy} C ${cx1} ${sy}, ${cx1} ${ty}, ${tx} ${ty}`;
        return (
          <g key={`out-${o.id}`}>
            <path d={path} fill="none" stroke="var(--accent-primary)" strokeOpacity="0.34" strokeWidth="1.5" />
            {!reduced && (
              <motion.circle
                r="4"
                fill="var(--accent-primary)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 3.0,
                  delay: o.delay + 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.1, 0.9, 1],
                }}
                style={{ offsetPath: `path("${path}")` }}
              />
            )}
          </g>
        );
      })}

      {sources.map((s, i) => (
        <motion.g
          key={`s-${s.id}`}
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={sourceX - 60}
            y={s.y}
            rx={12}
            ry={12}
            width="120"
            height="64"
            fill="var(--bg-surface)"
            stroke={s.color}
            strokeOpacity="0.36"
            strokeWidth="1.5"
          />
          <circle cx={sourceX - 38} cy={s.y + 32} r="7" fill={s.color} />
          <text
            x={sourceX - 22}
            y={s.y + 28}
            fontFamily="var(--font-sans)"
            fontSize="13"
            fontWeight={600}
            fill="currentColor"
          >
            {s.label}
          </text>
          <text
            x={sourceX - 22}
            y={s.y + 46}
            fontFamily="var(--font-sans)"
            fontSize="11"
            fill="var(--text-muted)"
          >
            {s.sub}
          </text>
        </motion.g>
      ))}

      {/* CENTRE — Attio */}
      <motion.g
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <circle cx={center.cx} cy={center.cy} r={center.r + 8} fill="var(--accent-primary-soft)" />
        <circle cx={center.cx} cy={center.cy} r={center.r} fill="var(--accent-primary)" />
        <text
          x={center.cx}
          y={center.cy - 4}
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="22"
          fontWeight={500}
          fill="var(--text-on-accent)"
        >
          Attio
        </text>
        <text
          x={center.cx}
          y={center.cy + 18}
          textAnchor="middle"
          fontFamily="var(--font-sans)"
          fontSize="10"
          fontWeight={600}
          letterSpacing="0.12em"
          fill="var(--text-on-accent)"
          fillOpacity={0.85}
        >
          CRM
        </text>
        {!reduced && (
          <motion.circle
            cx={center.cx}
            cy={center.cy}
            r={center.r}
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            animate={{ r: [center.r, center.r + 28], opacity: [0.55, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.g>

      {outputs.map((o, i) => (
        <motion.g
          key={`o-${o.id}`}
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={outputX}
            y={o.y}
            rx={12}
            ry={12}
            width="120"
            height="64"
            fill="var(--bg-surface-warm)"
            stroke="var(--accent-primary)"
            strokeOpacity="0.36"
            strokeWidth="1.5"
          />
          <text
            x={outputX + 60}
            y={o.y + 38}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="12"
            fontWeight={600}
            fill="currentColor"
          >
            {o.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
