import type { OutstandingItem } from "@/content/types";

const statusLabel: Record<OutstandingItem["status"], string> = {
  "in-progress": "In progress",
  scoping: "Scoping",
  blocked: "Waiting on input",
};

const statusClass: Record<OutstandingItem["status"], string> = {
  "in-progress": "tag tag-warn",
  scoping: "tag tag-orange",
  blocked: "tag tag-ink",
};

const accentBar: Record<OutstandingItem["status"], string> = {
  "in-progress": "var(--status-warning)",
  scoping: "var(--accent-primary)",
  blocked: "var(--bg-inverse)",
};

export function OutstandingSection({ items }: { items: OutstandingItem[] }) {
  return (
    <section
      id="wrapping-up"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-page)",
        borderBlockStart: "1px solid var(--border-subtle)",
        borderBlockEnd: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="shell">
        <header
          className="reveal"
          style={{ marginBlockEnd: "var(--space-10)", maxInlineSize: "62ch" }}
        >
          <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
            What&apos;s still wrapping up
          </div>
          <h2 className="hl-h2">
            A short, honest list of the <em>last open items</em>.
          </h2>
          <p className="hl-lead" style={{ marginBlockStart: "var(--space-3)" }}>
            None of these block daily use of the new CRM — your team can start
            working in Attio today. We&apos;ll close these out over the next short
            window.
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              className="reveal"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <article
                className="surface"
                style={{
                  blockSize: "100%",
                  padding: "var(--space-5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  position: "relative",
                  overflow: "hidden",
                  containerType: "inline-size",
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
                    background: accentBar[item.status],
                  }}
                />
                <div>
                  <span className={statusClass[item.status]}>
                    {statusLabel[item.status]}
                  </span>
                  <h3
                    className="hl-h4"
                    style={{ marginBlockStart: "var(--space-3)", marginBlockEnd: 0 }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="hl-body"
                  style={{ marginBlock: 0, maxInlineSize: "none" }}
                >
                  {item.description}
                </p>
                {item.blocker && (
                  <p className="hl-small" style={{ marginBlock: 0 }}>
                    <strong style={{ color: "var(--text-secondary)" }}>
                      Waiting on:
                    </strong>{" "}
                    {item.blocker}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
