import { MigrationFlow } from "./graphics/MigrationFlow";
import { ScrollProgress } from "./ScrollProgress";

/**
 * Hero — full-bleed shell, fluid display type, layered atmosphere
 * (mesh + grain + dot grid). No JS scroll listeners; CSS animation-timeline
 * handles the parallax + reveals via the .reveal / .parallax-slow classes.
 *
 * Layout: single column. Headline spans the page measure so it lays out in
 * 1–2 lines instead of stacking word-per-line. Lead + stats sit below.
 */
export function Hero() {
  return (
    <header
      style={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        paddingBlock: "var(--space-16) var(--space-16)",
        backgroundColor: "var(--bg-page)",
      }}
    >
      <ScrollProgress />
      {/* Soft color wash — no grain, no dots. */}
      <div
        aria-hidden
        className="bg-mesh"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 25%, black 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 25%, black 35%, transparent 85%)",
        }}
      />

      <div className="shell">
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            marginBlockEnd: "var(--space-12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <Mark />
            <div>
              <div className="hl-overline-muted">Project Recap</div>
              <div className="hl-label" style={{ color: "var(--text-primary)" }}>
                ClickUp → Attio CRM
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <a href="#by-the-numbers" className="btn-ghost">
              By the numbers
            </a>
            <a href="#what-your-team-can-do" className="btn-primary">
              See what&apos;s new <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* HEADLINE — full page width */}
        <div className="reveal">
          <div className="hl-overline" style={{ marginBlockEnd: "var(--space-4)" }}>
            AWC × Magical Teams
          </div>
          <h1 className="hl-display">
            A new CRM, <span className="brush">built around</span>{" "}
            <em>how AWC actually works</em>.
          </h1>
        </div>

        {/* LEAD + STAT STRIP */}
        <div
          className="reveal"
          style={{
            marginBlockStart: "var(--space-10)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-8)",
          }}
        >
          <p className="hl-lead" style={{ marginBlock: 0 }}>
            Over the last several months we moved your business-development and
            engagement history out of ClickUp and into a connected, searchable
            CRM in Attio. Email, calendars, sponsors, and coaching delivery all
            live in one place now. This page is a guided tour — tap any section
            to expand the how-to.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 13rem), 1fr))",
              gap: "var(--space-3)",
            }}
          >
            <QuickStat value="~1,024" label="Engagements migrated" tone="orange" />
            <QuickStat value="31" label="Features shipped" tone="blue" />
            <QuickStat value="263+" label="Sponsors cleaned" tone="green" />
            <QuickStat value="9" label="Lifecycle stages" tone="ink" />
          </div>
        </div>

        {/* MIGRATION FLOW */}
        <div
          className="reveal-soft"
          style={{
            marginBlockStart: "var(--space-16)",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-6)",
            boxShadow: "var(--shadow-md)",
            position: "relative",
            containerType: "inline-size",
            containerName: "flow",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-3)",
              marginBlockEnd: "var(--space-4)",
              flexWrap: "wrap",
            }}
          >
            <div className="hl-overline">How data flows</div>
            <div className="hl-small">
              Three sources feed Attio. Attio powers everything you use day-to-day.
            </div>
          </div>
          <MigrationFlow />
        </div>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <div
      aria-label="AWC mark"
      style={{
        display: "inline-grid",
        placeItems: "center",
        inlineSize: 44,
        blockSize: 44,
        borderRadius: 12,
        background: "var(--accent-primary)",
        color: "var(--text-on-accent)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "-0.04em",
        boxShadow: "var(--shadow-glow)",
        flexShrink: 0,
      }}
    >
      A
    </div>
  );
}

function QuickStat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "orange" | "blue" | "green" | "ink";
}) {
  const dot =
    tone === "orange"
      ? "var(--accent-primary)"
      : tone === "blue"
      ? "var(--accent-blue)"
      : tone === "green"
      ? "var(--accent-green)"
      : "var(--text-primary)";
  return (
    <div
      style={{
        padding: "var(--space-4) var(--space-5)",
        background: "color-mix(in oklch, var(--bg-surface) 85%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          insetBlockStart: 12,
          insetInlineEnd: 12,
          inlineSize: 6,
          blockSize: 6,
          borderRadius: 999,
          background: dot,
        }}
      />
      <div
        className="hl-stat"
        style={{
          fontSize: "var(--text-3xl)",
          color: "var(--text-primary)",
        }}
      >
        {value}
      </div>
      <div className="hl-overline-muted">{label}</div>
    </div>
  );
}
