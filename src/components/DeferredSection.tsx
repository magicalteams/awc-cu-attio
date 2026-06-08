import type { DeferredItem } from "@/content/types";

export function DeferredSection({ items }: { items: DeferredItem[] }) {
  return (
    <section
      id="discussed-and-decided"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface)",
        borderBlockStart: "1px solid var(--border-subtle)",
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
          <div className="hl-overline">Discussed and decided not to include</div>
          <h2 className="hl-h2">
            For the record — items we <em>considered together</em> and chose to leave out.
          </h2>
          <p className="hl-lead">
            Across the engagement we discussed several items that, by mutual
            agreement, were kept outside this scope. Listed here so the decisions
            are visible alongside everything else.
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              className="reveal"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <article
                className="surface"
                style={{
                  blockSize: "100%",
                  padding: "var(--space-5) var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                <h3 className="hl-h4" style={{ marginBlock: 0 }}>
                  {item.title}
                </h3>
                <p className="hl-body" style={{ marginBlock: 0, maxInlineSize: "none" }}>
                  {item.recordOfDecision}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
