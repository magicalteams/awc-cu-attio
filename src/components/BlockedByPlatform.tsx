import type { BlockedItem } from "@/content/types";

export function BlockedByPlatform({ items }: { items: BlockedItem[] }) {
  return (
    <section
      id="blocked-by-platform"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
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
          <div className="hl-overline">Asked for, blocked by Attio</div>
          <h2 className="hl-h2">
            A few asks <em>hit Attio&apos;s platform limits</em>.
          </h2>
          <p className="hl-lead">
            We&apos;ve filed feature requests for each. When Attio ships them
            you&apos;ll see them appear in the product without any action on your
            end. Nothing to do here.
          </p>
        </header>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {items.map((item, i) => (
            <li
              key={item.id}
              className="reveal"
              style={{ animationDelay: `${i * 35}ms` }}
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
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    inlineSize: 4,
                    blockSize: "100%",
                    background: "var(--accent-blue)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      paddingBlock: "0.2em",
                      paddingInline: "0.6em",
                      borderRadius: "var(--radius-pill)",
                      background: "var(--accent-blue-soft)",
                      color: "var(--accent-blue)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Feature request filed
                  </span>
                </div>
                <h3 className="hl-h4" style={{ marginBlock: 0 }}>
                  {item.title}
                </h3>
                <p className="hl-body" style={{ marginBlock: 0, maxInlineSize: "none" }}>
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
