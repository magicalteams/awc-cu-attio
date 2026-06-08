import type { TimelineEntry } from "@/content/types";

export function TimelineSection({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section
      id="how-we-got-here"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface)",
        borderBlockEnd: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="shell">
        <header
          className="reveal"
          style={{
            display: "grid",
            gap: "var(--space-3)",
            marginBlockEnd: "var(--space-10)",
            maxInlineSize: "62ch",
          }}
        >
          <div className="hl-overline">How we got here</div>
          <h2 className="hl-h2">
            <em>The project arc</em>, from first conversation to today.
          </h2>
          <p className="hl-lead">
            A short record of how we got from the December scoping call to the
            current Attio workspace.
          </p>
        </header>

        <ol
          className="timeline-list"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "relative",
          }}
        >
          {entries.map((entry, i) => (
            <li
              key={i}
              className="reveal timeline-item"
              style={{
                animationDelay: `${i * 40}ms`,
                position: "relative",
                paddingInlineStart: "var(--space-10)",
                paddingBlockEnd: i < entries.length - 1 ? "var(--space-8)" : 0,
              }}
            >
              <span
                aria-hidden
                className="timeline-line"
                style={{
                  position: "absolute",
                  insetInlineStart: "10px",
                  insetBlockStart: "20px",
                  inlineSize: "2px",
                  blockSize: i < entries.length - 1 ? "calc(100% - 12px)" : 0,
                  background:
                    "linear-gradient(180deg, var(--accent-primary), color-mix(in oklch, var(--accent-primary) 30%, transparent))",
                }}
              />
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  insetInlineStart: 0,
                  insetBlockStart: "8px",
                  inlineSize: "22px",
                  blockSize: "22px",
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  border: "3px solid var(--bg-surface)",
                  boxShadow: "0 0 0 2px var(--accent-primary-soft)",
                }}
              />
              <div
                className="hl-overline"
                style={{ marginBlockEnd: "var(--space-2)" }}
              >
                {entry.date}
              </div>
              <p
                className="hl-body"
                style={{ marginBlock: 0, fontSize: "var(--text-lg)", maxInlineSize: "65ch" }}
              >
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
