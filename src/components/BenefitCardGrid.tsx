import type { BenefitCard, Item } from "@/content/types";

const accentRotation: Array<"orange" | "blue" | "green" | "red"> = [
  "orange",
  "blue",
  "green",
  "orange",
  "red",
  "blue",
  "green",
];

const accentColor: Record<string, string> = {
  orange: "var(--accent-primary)",
  blue: "var(--accent-blue)",
  green: "var(--accent-green)",
  red: "var(--accent-red)",
};

const accentSoft: Record<string, string> = {
  orange: "var(--accent-primary-soft)",
  blue: "var(--accent-blue-soft)",
  green: "var(--accent-green-soft)",
  red: "var(--accent-red-soft)",
};

export function BenefitCardGrid({ cards, items }: { cards: BenefitCard[]; items: Item[] }) {
  const byId = new Map(items.map((i) => [i.id, i]));

  return (
    <section
      id="what-your-team-can-do"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-page)",
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
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div className="shell" style={{ position: "relative" }}>
        <header
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "var(--space-6)",
            alignItems: "end",
            marginBlockEnd: "var(--space-12)",
          }}
        >
          <div style={{ gridColumn: "span 12", maxInlineSize: "26ch" }}>
            <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
              What your team can now do
            </div>
            <h2 className="hl-h2">
              Six shifts in how <em>AWC runs day-to-day</em>.
            </h2>
          </div>
        </header>

        {/* Grid that uses subgrid for internal alignment across all cards. */}
        <ul
          className="benefit-grid"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 19rem), 1fr))",
            gridAutoRows: "auto",
            gap: "var(--space-5)",
          }}
        >
          {cards.map((card, i) => {
            const linked = card.itemIds
              .map((id) => byId.get(id))
              .filter((it): it is Item => Boolean(it));
            const accent = accentRotation[i % accentRotation.length];
            return (
              <li
                key={card.id}
                className="reveal benefit-card"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <article
                  className="surface"
                  style={{
                    blockSize: "100%",
                    padding: "var(--space-6)",
                    display: "grid",
                    gridTemplateRows: "auto 1fr auto",
                    gap: "var(--space-4)",
                    position: "relative",
                    overflow: "hidden",
                    containerType: "inline-size",
                    containerName: "benefit",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      insetBlockStart: 0,
                      insetInlineStart: 0,
                      inlineSize: "100%",
                      blockSize: 4,
                      background: `linear-gradient(90deg, ${accentColor[accent]} 0%, transparent 100%)`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-grid",
                        placeItems: "center",
                        inlineSize: 36,
                        blockSize: 36,
                        borderRadius: 10,
                        background: accentSoft[accent],
                        color: accentColor[accent],
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="hl-overline-muted"
                      style={{ color: accentColor[accent] }}
                    >
                      Outcome · 0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="hl-h4"
                      style={{
                        marginBlockEnd: "var(--space-2)",
                        fontSize: "var(--text-xl)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="hl-body" style={{ maxInlineSize: "none" }}>
                      {card.blurb}
                    </p>
                  </div>

                  <div>
                    <hr className="divider-subtle" style={{ marginBlockEnd: "var(--space-4)" }} />
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-2)",
                      }}
                    >
                      {linked.map((item) => (
                        <li
                          key={item.id}
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "var(--space-3)",
                          }}
                        >
                          <span
                            aria-hidden
                            style={{
                              inlineSize: 6,
                              blockSize: 6,
                              borderRadius: 999,
                              background: accentColor[accent],
                              flexShrink: 0,
                              transform: "translateY(-2px)",
                            }}
                          />
                          <a
                            href={`#${item.id}`}
                            className="hl-label"
                            style={{
                              textDecoration: "none",
                              color: "var(--text-primary)",
                              fontWeight: 500,
                            }}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
