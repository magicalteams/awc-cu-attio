import { EngagementMix } from "./graphics/EngagementMix";
import { LifecycleDistribution } from "./graphics/LifecycleDistribution";
import { LifecycleProgression } from "./graphics/LifecycleProgression";

export function DataInsights() {
  return (
    <section
      id="data-insights"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-page)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          insetBlockStart: "10%",
          insetInlineEnd: "-15%",
          inlineSize: "min(55svh, 600px)",
          blockSize: "min(55svh, 600px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--accent-primary) 14%, transparent), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="shell" style={{ position: "relative", zIndex: 1 }}>
        <header
          className="reveal"
          style={{
            display: "grid",
            gap: "var(--space-3)",
            marginBlockEnd: "var(--space-12)",
            maxInlineSize: "62ch",
          }}
        >
          <div className="hl-overline">The data inside</div>
          <h2 className="hl-h2">
            What your <span className="brush">CRM looks like</span> now — at a glance.
          </h2>
          <p className="hl-lead">
            Three views of the same workspace: how engagements split across service
            lines, where they sit in the lifecycle right now, and the journey every
            engagement travels through.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 26rem), 1fr))",
            gap: "var(--space-5)",
            marginBlockEnd: "var(--space-8)",
          }}
        >
          <div className="reveal surface" style={{ padding: "var(--space-8)", containerType: "inline-size" }}>
            <div style={{ marginBlockEnd: "var(--space-6)" }}>
              <div className="hl-overline">Engagement mix</div>
              <h3 className="hl-h3" style={{ marginBlockStart: "var(--space-2)" }}>
                Where the work is.
              </h3>
              <p className="hl-body" style={{ marginBlockStart: "var(--space-2)" }}>
                PTC, Executive Coaching, and Speaking / Workshop are the three
                largest service lines and together account for the majority of
                engagements. Live from the workspace; 47 engagements without a
                categorized type sit outside this chart.
              </p>
            </div>
            <EngagementMix />
          </div>

          <div className="reveal surface" style={{ padding: "var(--space-8)", containerType: "inline-size" }}>
            <div style={{ marginBlockEnd: "var(--space-6)" }}>
              <div className="hl-overline">Lifecycle distribution</div>
              <h3 className="hl-h3" style={{ marginBlockStart: "var(--space-2)" }}>
                Where engagements sit today.
              </h3>
              <p className="hl-body" style={{ marginBlockStart: "var(--space-2)" }}>
                Live split across the unified Lifecycle Stage. The majority sit in
                Completed (575) — the historical archive from ClickUp. Active
                delivery is concentrated in Active and Onboarding (49 combined).
                Prospecting is intentionally lean because Re-Engagement (53) holds
                the longer-dormant leads.
              </p>
            </div>
            <LifecycleDistribution />
          </div>
        </div>

        <div
          className="reveal surface"
          style={{
            padding: "var(--space-8)",
            background:
              "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-surface-warm) 100%)",
            containerType: "inline-size",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "var(--space-4)",
              marginBlockEnd: "var(--space-6)",
            }}
          >
            <div>
              <div className="hl-overline">The lifecycle</div>
              <h3 className="hl-h3" style={{ marginBlockStart: "var(--space-2)" }}>
                Every engagement, on one journey.
              </h3>
            </div>
            <p
              className="hl-small"
              style={{ maxInlineSize: 380, marginBlockStart: 0 }}
            >
              These nine stages replace the old &quot;pipeline vs. history&quot; split.
              One column tells you exactly where any engagement sits — no jumping
              between lists.
            </p>
          </div>
          <LifecycleProgression />
        </div>
      </div>
    </section>
  );
}
