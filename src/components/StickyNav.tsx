"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "by-the-numbers", short: "Nums", label: "Numbers" },
  { id: "what-your-team-can-do", short: "Out", label: "Outcomes" },
  { id: "data-insights", short: "Data", label: "Data" },
  { id: "browse-by-track", short: "Build", label: "Build" },
  { id: "wrapping-up", short: "WIP", label: "Wrapping up" },
];

/**
 * Sticky nav.
 * - Desktop: floating top pill that fades in past the fold.
 * - Mobile: bottom tab bar with safe-area-inset-bottom padding.
 * One JS hook: track which section is "active" in the viewport.
 */
export function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);

      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      data-visible={visible}
      style={{
        position: "fixed",
        zIndex: 50,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        opacity: visible ? 1 : 0,
      }}
      className="sticky-nav"
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          display: "flex",
          gap: 4,
          alignItems: "center",
          background: "color-mix(in oklch, var(--bg-surface) 80%, transparent)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-pill)",
          padding: 4,
          boxShadow: "var(--shadow-md)",
        }}
        className="sticky-nav__list"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: "0.5rem",
                  paddingInline: "0.85rem",
                  borderRadius: "var(--radius-pill)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "var(--text-on-accent)" : "var(--text-primary)",
                  background: isActive ? "var(--accent-primary)" : "transparent",
                  transition:
                    "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
                  whiteSpace: "nowrap",
                  minBlockSize: 36,
                }}
              >
                <span className="sticky-nav__long">{s.label}</span>
                <span className="sticky-nav__short" aria-hidden>
                  {s.short}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Component-scoped responsive rules */}
      <style>{`
        .sticky-nav {
          inset-block-start: var(--space-4);
          inset-inline-start: 50%;
          transform: translateX(-50%);
          inline-size: max-content;
          max-inline-size: calc(100% - 32px);
        }
        .sticky-nav__short { display: none; }
        @media (max-width: 720px) {
          .sticky-nav {
            inset-block-start: auto;
            inset-block-end: max(var(--space-3), env(safe-area-inset-bottom));
          }
          .sticky-nav__list { gap: 2px; }
          .sticky-nav__long { display: none; }
          .sticky-nav__short { display: inline; }
        }
      `}</style>
    </nav>
  );
}
