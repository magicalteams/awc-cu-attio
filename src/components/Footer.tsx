export function Footer() {
  return (
    <footer
      className="cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
        borderBlockStart: "1px solid var(--border-subtle)",
        paddingBlock: "var(--space-16) var(--space-12)",
      }}
    >
      <div className="shell">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 14rem), 1fr))",
            gap: "var(--space-10)",
            alignItems: "flex-start",
          }}
        >
          <div style={{ maxInlineSize: "44ch" }}>
            <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
              About this recap
            </div>
            <p className="hl-body" style={{ marginBlockStart: 0 }}>
              Built with care by Magical Teams for AWC. If something in here
              doesn&apos;t match what you&apos;re seeing in Attio, send an email
              and we&apos;ll fix it.
            </p>
          </div>

          <nav aria-label="Footer">
            <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
              Jump to
            </div>
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
              <li>
                <a href="#by-the-numbers" className="hl-label" style={linkStyle}>
                  By the numbers
                </a>
              </li>
              <li>
                <a href="#how-we-got-here" className="hl-label" style={linkStyle}>
                  How we got here
                </a>
              </li>
              <li>
                <a href="#what-you-asked-for" className="hl-label" style={linkStyle}>
                  What you asked for
                </a>
              </li>
              <li>
                <a href="#what-your-team-can-do" className="hl-label" style={linkStyle}>
                  What your team can do
                </a>
              </li>
              <li>
                <a href="#data-insights" className="hl-label" style={linkStyle}>
                  The data inside
                </a>
              </li>
              <li>
                <a href="#browse-by-track" className="hl-label" style={linkStyle}>
                  Browse the build
                </a>
              </li>
              <li>
                <a href="#try-before-call" className="hl-label" style={linkStyle}>
                  Try before the call
                </a>
              </li>
              <li>
                <a href="#wrapping-up" className="hl-label" style={linkStyle}>
                  Wrapping up
                </a>
              </li>
              <li>
                <a href="#blocked-by-platform" className="hl-label" style={linkStyle}>
                  Blocked by Attio
                </a>
              </li>
              <li>
                <a href="#discussed-and-decided" className="hl-label" style={linkStyle}>
                  Discussed &amp; decided
                </a>
              </li>
              <li>
                <a href="#keep-it-running" className="hl-label" style={linkStyle}>
                  Keep it running
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
              Contact
            </div>
            <a
              href="mailto:alex@magicalteams.com"
              className="hl-h4"
              style={{
                color: "var(--accent-primary)",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "var(--text-lg)",
              }}
            >
              alex@magicalteams.com
            </a>
            <p className="hl-small" style={{ marginBlockStart: "var(--space-2)" }}>
              Magical Teams · For AWC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "var(--text-secondary)",
  textDecoration: "none",
} as const;
