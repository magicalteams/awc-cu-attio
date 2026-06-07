import type { Item } from "@/content/types";
import { StatusTag } from "./ui/Tag";
import { Blocks } from "./ui/Blocks";

/**
 * Native <details> accordion — no React state, no JS for open/close.
 * The transition uses ::details-content + interpolate-size in globals.css.
 * Falls back to instant open in browsers without interpolate-size.
 */
export function ExpandableItem({ item, related }: { item: Item; related: Item[] }) {
  const hasContent = Boolean(item.sections?.length);

  if (!hasContent) {
    return (
      <article
        id={item.id}
        className="reveal"
        style={{
          borderBlockStart: "1px solid var(--border-subtle)",
          paddingBlock: "var(--space-5)",
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-4)",
        }}
      >
        <span
          aria-hidden
          className="accordion-indicator"
          style={{ background: "transparent", color: "var(--text-muted)" }}
        >
          ·
        </span>
        <div style={{ flex: 1, minInlineSize: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
              alignItems: "center",
              marginBlockEnd: "var(--space-1)",
            }}
          >
            <h3
              className="hl-h4"
              style={{ margin: 0, fontSize: "var(--text-lg)" }}
            >
              {item.title}
            </h3>
            <StatusTag status={item.status} />
          </div>
          <p
            className="hl-body"
            style={{ margin: 0, maxInlineSize: "75ch" }}
          >
            {item.summary}
          </p>
        </div>
      </article>
    );
  }

  return (
    <details
      id={item.id}
      className="accordion reveal"
      style={{
        borderBlockStart: "1px solid var(--border-subtle)",
      }}
    >
      <summary
        style={{
          paddingBlock: "var(--space-5)",
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-4)",
        }}
      >
        <span aria-hidden className="accordion-indicator">
          +
        </span>
        <div style={{ flex: 1, minInlineSize: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
              alignItems: "center",
              marginBlockEnd: "var(--space-1)",
            }}
          >
            <h3
              className="hl-h4"
              style={{ margin: 0, fontSize: "var(--text-lg)" }}
            >
              {item.title}
            </h3>
            <StatusTag status={item.status} />
          </div>
          <p
            className="hl-body"
            style={{ margin: 0, maxInlineSize: "75ch" }}
          >
            {item.summary}
          </p>
        </div>
      </summary>

      <div
        style={{
          paddingBlockEnd: "var(--space-6)",
          paddingInlineStart: "calc(36px + var(--space-4))",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
        }}
      >
        {item.sections!.map((section) => (
          <section key={section.id}>
            <div
              className="hl-overline"
              style={{ marginBlockEnd: "var(--space-3)" }}
            >
              {section.heading}
            </div>
            <Blocks blocks={section.blocks} />
          </section>
        ))}

        {related.length > 0 && (
          <section>
            <div
              className="hl-overline"
              style={{ marginBlockEnd: "var(--space-3)" }}
            >
              Related
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
              }}
            >
              {related.map((r) => (
                <li key={r.id}>
                  <a
                    href={`#${r.id}`}
                    className="hl-label"
                    style={{
                      textDecoration: "none",
                      background: "var(--bg-surface-warm)",
                      paddingBlock: "var(--space-2)",
                      paddingInline: "var(--space-3)",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      transition: "all var(--dur-base) var(--ease-out)",
                    }}
                  >
                    <span style={{ color: "var(--accent-primary)" }}>↳</span>
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </details>
  );
}
