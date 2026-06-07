"use client";

import { useMemo, useState, useTransition } from "react";
import type { Item, Track } from "@/content/types";
import { ExpandableItem } from "./ExpandableItem";

/**
 * Track sections + topic filter.
 * Uses View Transitions API for the filter change (with @supports fallback)
 * so the new grid morphs in instead of popping.
 */
export function TrackSections({ tracks, items }: { tracks: Track[]; items: Item[] }) {
  const byTrack = useMemo(() => {
    const m = new Map<string, Item[]>();
    for (const t of tracks) m.set(t.id, []);
    for (const item of items) m.get(item.track)?.push(item);
    return m;
  }, [tracks, items]);

  const [activeTrack, setActiveTrack] = useState<string>("all");
  const [, startTransition] = useTransition();

  const filteredTracks =
    activeTrack === "all" ? tracks : tracks.filter((t) => t.id === activeTrack);

  function selectTrack(id: string) {
    const update = () => startTransition(() => setActiveTrack(id));
    // Use document.startViewTransition where supported — graceful fallback otherwise.
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document
    ) {
      (document as unknown as {
        startViewTransition: (cb: () => void) => void;
      }).startViewTransition(update);
    } else {
      update();
    }
  }

  const itemsForRelatedResolution = useMemo(
    () => new Map(items.map((i) => [i.id, i])),
    [items],
  );

  return (
    <section
      id="browse-by-track"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
        borderBlockStart: "1px solid var(--border-subtle)",
      }}
    >
      <div className="shell">
        <header
          className="reveal"
          style={{
            marginBlockEnd: "var(--space-10)",
            maxInlineSize: "62ch",
          }}
        >
          <div className="hl-overline" style={{ marginBlockEnd: "var(--space-3)" }}>
            Browse the build
          </div>
          <h2 className="hl-h2">
            Every feature, <em>organized by topic</em>.
          </h2>
          <p className="hl-lead" style={{ marginBlockStart: "var(--space-3)" }}>
            Tap any row to expand. Inside you&apos;ll find what it is, where to find
            it in Attio, and how it changes the day-to-day for whoever uses it
            most.
          </p>
        </header>

        {/* Filter pills */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            marginBlockEnd: "var(--space-10)",
            paddingBlockEnd: "var(--space-6)",
            borderBlockEnd: "1px dashed var(--border-default)",
          }}
        >
          <FilterPill
            label="All topics"
            active={activeTrack === "all"}
            count={items.length}
            onClick={() => selectTrack("all")}
          />
          {tracks.map((track) => (
            <FilterPill
              key={track.id}
              label={track.label}
              active={activeTrack === track.id}
              count={byTrack.get(track.id)?.length ?? 0}
              onClick={() => selectTrack(track.id)}
            />
          ))}
        </div>

        <div
          style={{
            // Target for the View Transition API
            viewTransitionName: "filter-grid",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-16)",
          }}
        >
          {filteredTracks.map((track, ti) => {
            const trackItems = byTrack.get(track.id) ?? [];
            if (trackItems.length === 0) return null;
            return (
              <div
                key={track.id}
                id={track.id}
                className="reveal"
                style={{ animationDelay: `${ti * 60}ms` }}
              >
                <header
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    columnGap: "var(--space-4)",
                    alignItems: "baseline",
                    marginBlockEnd: "var(--space-5)",
                  }}
                >
                  <span
                    className="hl-stat"
                    style={{
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      color: "var(--accent-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {String(ti + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="hl-h3" style={{ marginBlockEnd: "var(--space-1)" }}>
                      {track.label}
                    </h3>
                    <p className="hl-body" style={{ marginBlockStart: 0 }}>
                      {track.blurb}
                    </p>
                  </div>
                </header>
                <div
                  className="surface"
                  style={{
                    paddingInline: "var(--space-6)",
                    background: "var(--bg-surface)",
                  }}
                >
                  {trackItems.map((item) => {
                    const related = (item.related ?? [])
                      .map((id) => itemsForRelatedResolution.get(id))
                      .filter((r): r is Item => Boolean(r));
                    return (
                      <ExpandableItem
                        key={item.id}
                        item={item}
                        related={related}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        paddingBlock: "0.55em",
        paddingInline: "0.95em",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        border: active
          ? "1px solid var(--accent-primary)"
          : "1px solid var(--border-default)",
        background: active ? "var(--accent-primary)" : "var(--bg-surface)",
        color: active ? "var(--text-on-accent)" : "var(--text-primary)",
        cursor: "pointer",
        transition: "all var(--dur-base) var(--ease-out)",
        minBlockSize: 36,
      }}
    >
      {label}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          opacity: 0.75,
          fontWeight: 500,
        }}
      >
        {count}
      </span>
    </button>
  );
}
