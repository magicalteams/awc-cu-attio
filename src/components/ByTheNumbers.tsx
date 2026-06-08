import { AnimatedCounter } from "./motion/AnimatedCounter";

type Stat = {
  /** Numeric stats count up on scroll-in. String stats render as-is (e.g. "Oodles"). */
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  tone: "orange" | "blue" | "green" | "ink";
  feature?: boolean;
};

const stats: Stat[] = [
  {
    value: 1024,
    label: "Engagements in Attio",
    caption: "Migrated from ClickUp + caught up post-launch.",
    tone: "orange",
    feature: true,
  },
  {
    value: 263,
    suffix: "+",
    label: "Sponsors cleaned",
    caption: "Compound names split into individuals, titles + companies linked.",
    tone: "blue",
  },
  {
    value: 27,
    label: "Features shipped",
    caption: "Across schema, views, AI prompts, workflows, and integrations.",
    tone: "green",
  },
  {
    value: 9,
    label: "Lifecycle stages",
    caption: "One unified status from first call through final delivery.",
    tone: "ink",
  },
  {
    value: 44,
    suffix: "+",
    label: "Managers + EAs linked",
    caption:
      "Coachee–manager links plus Manager↔EA relationships captured as real records.",
    tone: "orange",
  },
  {
    value: "Oodles",
    label: "View configurations",
    caption: "Saved cuts of pipeline, history, tasks, and contacts — surface what matters most to you.",
    tone: "green",
  },
];

const toneColor: Record<Stat["tone"], string> = {
  orange: "var(--accent-primary)",
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  ink: "var(--text-primary)",
};

export function ByTheNumbers() {
  return (
    <section
      id="by-the-numbers"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
        borderBlockStart: "1px solid var(--border-subtle)",
        borderBlockEnd: "1px solid var(--border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <div
          className="reveal"
          style={{
            display: "grid",
            gap: "var(--space-3)",
            marginBlockEnd: "var(--space-12)",
            maxInlineSize: "60ch",
          }}
        >
          <div className="hl-overline">By the numbers</div>
          <h2 className="hl-h2">
            The project, <span className="brush">at a glance</span>.
          </h2>
          <p className="hl-lead">
            The Attio workspace didn&apos;t appear out of thin air. Here&apos;s the
            shape of what was built — counted, cleaned, and connected.
          </p>
        </div>

        <ul
          className="stat-grid"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
            gap: "var(--space-3)",
          }}
        >
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={`reveal stat-card${stat.feature ? " stat-card--feature" : ""}`}
              style={{
                animationDelay: `${i * 40}ms`,
              }}
            >
              <article
                className="surface"
                style={{
                  blockSize: "100%",
                  padding: "var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  position: "relative",
                  overflow: "hidden",
                  containerType: "inline-size",
                  containerName: "stat",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    blockSize: "100%",
                    inlineSize: 4,
                    background: toneColor[stat.tone],
                    opacity: 0.85,
                  }}
                />
                <div
                  className="hl-stat stat-card__value"
                  style={{
                    color: toneColor[stat.tone],
                    fontSize:
                      "clamp(2.25rem, calc(1.5rem + 6cqi), 4.5rem)",
                  }}
                >
                  {typeof stat.value === "number" ? (
                    <AnimatedCounter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <>
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div
                  className="hl-label"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "var(--text-base)",
                  }}
                >
                  {stat.label}
                </div>
                <p className="hl-small">{stat.caption}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        /* Only let the feature card span 2 once the grid has room for 2 columns.
           Below this width the grid resolves to 1 column and span 2 would force
           a second implicit column → 200% width → horizontal overflow. */
        @media (min-width: 560px) {
          .stat-card--feature { grid-column: span 2; }
        }
      `}</style>
    </section>
  );
}
