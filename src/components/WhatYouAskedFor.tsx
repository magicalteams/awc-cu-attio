import type { ClientAsk } from "@/content/types";

export function WhatYouAskedFor({ items }: { items: ClientAsk[] }) {
  return (
    <section
      id="what-you-asked-for"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface)",
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
          <div className="hl-overline">What you asked for</div>
          <h2 className="hl-h2">
            <em>We heard you.</em> Here&apos;s what each ask turned into.
          </h2>
          <p className="hl-lead">
            Direct quotes from our calls and emails, paired with the specific
            thing we built in response and where to find it in Attio today.
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
            counterReset: "ask",
          }}
        >
          {items.map((ask, i) => (
            <li
              key={ask.id}
              id={ask.id}
              className="reveal"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <article
                className="surface"
                style={{
                  padding: "var(--space-8)",
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr)",
                  gap: "var(--space-5)",
                  containerType: "inline-size",
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
                    background: "var(--accent-primary)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "var(--space-3)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-grid",
                      placeItems: "center",
                      inlineSize: 32,
                      blockSize: 32,
                      borderRadius: 8,
                      background: "var(--accent-primary-soft)",
                      color: "var(--accent-primary)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="hl-overline-muted">{ask.occasion}</div>
                </div>

                <blockquote
                  style={{
                    margin: 0,
                    paddingInlineStart: "var(--space-5)",
                    borderInlineStart: "2px solid var(--accent-primary)",
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "var(--text-xl)",
                    lineHeight: 1.35,
                    color: "var(--text-primary)",
                    textWrap: "pretty",
                    maxInlineSize: "55ch",
                  }}
                >
                  &ldquo;{ask.quote}&rdquo;
                </blockquote>
                <div className="hl-label" style={{ color: "var(--text-secondary)" }}>
                  — {ask.speaker}
                </div>

                <hr className="divider-subtle" />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr)",
                    gap: "var(--space-4)",
                  }}
                  className="what-you-asked-for__solution-grid"
                >
                  <div>
                    <div className="hl-overline" style={{ marginBlockEnd: "var(--space-2)" }}>
                      What we built
                    </div>
                    <p className="hl-body" style={{ marginBlock: 0, maxInlineSize: "none" }}>
                      {ask.builtSolution}
                    </p>
                  </div>
                  <div>
                    <div className="hl-overline" style={{ marginBlockEnd: "var(--space-2)" }}>
                      Where to find it
                    </div>
                    <p
                      className="hl-body"
                      style={{
                        marginBlock: 0,
                        maxInlineSize: "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-sm)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {ask.whereInAttio}
                    </p>
                  </div>
                </div>

                {ask.receipt && (
                  <>
                    <hr className="divider-subtle" />
                    <div
                      style={{
                        background: "var(--bg-surface-warm)",
                        borderRadius: "var(--radius-md)",
                        padding: "var(--space-4) var(--space-5)",
                      }}
                    >
                      <div className="hl-overline" style={{ marginBlockEnd: "var(--space-2)", color: "var(--accent-green)" }}>
                        Receipt
                      </div>
                      <p className="hl-body" style={{ marginBlock: 0, fontSize: "var(--text-sm)", maxInlineSize: "none" }}>
                        {ask.receipt}
                      </p>
                    </div>
                  </>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @container (min-width: 38rem) {
          .what-you-asked-for__solution-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-6);
          }
        }
      `}</style>
    </section>
  );
}
