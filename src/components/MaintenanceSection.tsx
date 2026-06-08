import type { MaintenanceTopic } from "@/content/maintenance";

export function MaintenanceSection({ topics }: { topics: MaintenanceTopic[] }) {
  return (
    <section
      id="keep-it-running"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface)",
        borderBlockStart: "1px solid var(--border-subtle)",
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
          <div className="hl-overline">How to keep this running</div>
          <h2 className="hl-h2">
            <em>A handoff guide</em> for the post-final-call period.
          </h2>
          <p className="hl-lead">
            A short operations guide. Most of the time the workspace runs on its
            own — this is what to check, and where to email, if something looks
            off.
          </p>
        </header>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          {topics.map((topic, i) => (
            <li
              key={topic.id}
              id={topic.id}
              className="reveal"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <article
                className="surface"
                style={{
                  padding: "var(--space-8)",
                  display: "grid",
                  gridTemplateColumns: "auto minmax(0, 1fr)",
                  columnGap: "var(--space-6)",
                  rowGap: "var(--space-4)",
                  alignItems: "start",
                }}
              >
                <div
                  className="hl-stat"
                  style={{
                    fontSize: "clamp(2rem, 3vw, 2.75rem)",
                    color: "var(--accent-primary)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <h3 className="hl-h4" style={{ margin: 0, fontSize: "var(--text-xl)" }}>
                    {topic.title}
                  </h3>
                  <p className="hl-body" style={{ marginBlock: 0, maxInlineSize: "none" }}>
                    {topic.intro}
                  </p>
                  <ul
                    className="hl-body"
                    style={{
                      marginInlineStart: "1.25rem",
                      paddingInlineStart: 0,
                      marginBlock: 0,
                      maxInlineSize: "none",
                    }}
                  >
                    {topic.body.map((line, li) => (
                      <li key={li} style={{ marginBlockEnd: "var(--space-2)" }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                  {topic.outro && (
                    <div
                      style={{
                        background: "var(--bg-surface-warm)",
                        borderRadius: "var(--radius-md)",
                        padding: "var(--space-3) var(--space-4)",
                        borderInlineStart: "3px solid var(--accent-primary)",
                      }}
                    >
                      <p
                        className="hl-body"
                        style={{ marginBlock: 0, fontSize: "var(--text-sm)", maxInlineSize: "none" }}
                      >
                        {topic.outro}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
