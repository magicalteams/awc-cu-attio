import type { Scenario } from "@/content/types";

export function Scenarios({ items }: { items: Scenario[] }) {
  return (
    <section
      id="try-before-call"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
        borderBlockStart: "1px solid var(--border-subtle)",
        borderBlockEnd: "1px solid var(--border-subtle)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="shell">
        <header
          className="reveal"
          style={{
            display: "grid",
            gap: "var(--space-3)",
            marginBlockEnd: "var(--space-12)",
            maxInlineSize: "62ch",
          }}
        >
          <div className="hl-overline">Try these before our call</div>
          <h2 className="hl-h2">
            Five exercises, <em>each under two minutes</em>.
          </h2>
          <p className="hl-lead">
            Do these in Attio before our final support call. They&apos;ll either
            land as a quiet &ldquo;yes, this works&rdquo; or surface a specific
            question we can resolve together live.
          </p>
        </header>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
            counterReset: "scenario",
          }}
        >
          {items.map((scenario, i) => (
            <li
              key={scenario.id}
              id={scenario.id}
              className="reveal"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <article
                className="surface"
                style={{
                  padding: "var(--space-6) var(--space-8)",
                  display: "grid",
                  gridTemplateColumns: "auto minmax(0, 1fr)",
                  columnGap: "var(--space-6)",
                  rowGap: "var(--space-4)",
                  alignItems: "start",
                  containerType: "inline-size",
                }}
              >
                <div
                  className="hl-stat"
                  style={{
                    fontSize: "clamp(2rem, 3vw, 2.75rem)",
                    color: "var(--accent-primary)",
                    lineHeight: 1,
                    gridRow: "1 / span 3",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="hl-h4"
                  style={{
                    margin: 0,
                    fontSize: "var(--text-xl)",
                  }}
                >
                  {scenario.title}
                </h3>

                {scenario.prerequisite && (
                  <div style={{ gridColumn: "2" }}>
                    <span className="hl-overline-muted">Before you start:</span>{" "}
                    <span className="hl-small" style={{ color: "var(--text-secondary)" }}>
                      {scenario.prerequisite}
                    </span>
                  </div>
                )}

                <div style={{ gridColumn: "2" }}>
                  <div className="hl-overline" style={{ marginBlockEnd: "var(--space-2)" }}>
                    Steps
                  </div>
                  <ol
                    className="hl-body"
                    style={{
                      marginInlineStart: "1.25rem",
                      paddingInlineStart: 0,
                      marginBlock: 0,
                    }}
                  >
                    {scenario.steps.map((step, si) => (
                      <li key={si} style={{ marginBlockEnd: "var(--space-2)" }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div
                  style={{
                    gridColumn: "2",
                    background: "var(--bg-surface-warm)",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-3) var(--space-4)",
                    borderInlineStart: "3px solid var(--accent-primary)",
                  }}
                >
                  <div
                    className="hl-overline"
                    style={{ marginBlockEnd: "var(--space-1)", color: "var(--accent-primary)" }}
                  >
                    What to notice
                  </div>
                  <p className="hl-body" style={{ marginBlock: 0, maxInlineSize: "none" }}>
                    {scenario.whatToNotice}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
