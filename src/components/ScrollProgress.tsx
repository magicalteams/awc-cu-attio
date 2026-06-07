/**
 * Hairline scroll-progress indicator pinned to the top of the viewport.
 * Pure CSS — animation-timeline: scroll(root). No JS, no scroll listeners.
 * Falls back to invisible if scroll-driven animations aren't supported.
 */
export function ScrollProgress() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        insetInlineStart: 0,
        insetBlockStart: 0,
        blockSize: 3,
        inlineSize: "100%",
        zIndex: 60,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        className="scroll-progress"
        style={{
          blockSize: "100%",
          inlineSize: "100%",
          background:
            "linear-gradient(90deg, var(--accent-primary), color-mix(in oklch, var(--accent-primary) 55%, var(--accent-blue)))",
        }}
      />
    </div>
  );
}
