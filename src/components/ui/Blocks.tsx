import type { ContentBlock } from "@/content/types";

/** Render a single content block. No external markdown lib — type-safe by construction. */
export function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="hl-body">{renderInline(block.text)}</p>;
    case "ul":
      return (
        <ul className="hl-body">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="hl-body">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <ol className="hl-body" style={{ counterReset: "step" }}>
          {block.steps.map((step, i) => (
            <li key={i}>{renderInline(step)}</li>
          ))}
        </ol>
      );
    case "callout": {
      const toneStyles: Record<typeof block.tone, { color: string; label: string }> = {
        info: { color: "var(--status-info)", label: "Note" },
        warn: { color: "var(--status-warning)", label: "Heads up" },
        success: { color: "var(--status-success)", label: "Already live" },
      };
      const s = toneStyles[block.tone];
      return (
        <div
          style={{
            background: `color-mix(in oklch, ${s.color} 8%, var(--bg-surface-warm))`,
            borderInlineStart: `3px solid ${s.color}`,
            borderRadius: "var(--radius-md)",
            padding: "var(--space-3) var(--space-4)",
          }}
        >
          <div className="hl-overline" style={{ color: s.color, marginBlockEnd: "var(--space-1)" }}>
            {s.label}
          </div>
          <div className="hl-body" style={{ marginBlockStart: 0 }}>
            {renderInline(block.text)}
          </div>
        </div>
      );
    }
    case "code":
      return (
        <pre
          style={{
            background: "var(--bg-sunken)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-3) var(--space-4)",
            overflowX: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-sm)",
            color: "var(--text-primary)",
          }}
        >
          <code>{block.code}</code>
        </pre>
      );
  }
}

/**
 * Lightweight inline renderer. Supports:
 *   **bold**, *italic*, `code`, and links written as [text](url).
 * Order: code is parsed first so its content isn't transformed.
 */
function renderInline(text: string): React.ReactNode[] {
  // Tokenise on `code` first.
  const out: React.ReactNode[] = [];
  const codeSplit = text.split(/(`[^`]+`)/g);
  let key = 0;
  for (const piece of codeSplit) {
    if (piece.startsWith("`") && piece.endsWith("`") && piece.length >= 2) {
      out.push(<code key={key++}>{piece.slice(1, -1)}</code>);
    } else {
      out.push(...renderBoldItalicAndLinks(piece, () => key++));
    }
  }
  return out;
}

function renderBoldItalicAndLinks(text: string, nextKey: () => number): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on bold first.
  const boldSplit = text.split(/(\*\*[^*]+\*\*)/g);
  for (const part of boldSplit) {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      nodes.push(<strong key={nextKey()}>{renderItalicAndLinks(part.slice(2, -2), nextKey)}</strong>);
    } else {
      nodes.push(...renderItalicAndLinks(part, nextKey));
    }
  }
  return nodes;
}

function renderItalicAndLinks(text: string, nextKey: () => number): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const italicSplit = text.split(/(\*[^*]+\*)/g);
  for (const part of italicSplit) {
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2 && !part.startsWith("**")) {
      nodes.push(<em key={nextKey()}>{renderLinks(part.slice(1, -1), nextKey)}</em>);
    } else {
      nodes.push(...renderLinks(part, nextKey));
    }
  }
  return nodes;
}

function renderLinks(text: string, nextKey: () => number): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) out.push(text.slice(lastIndex, m.index));
    out.push(
      <a
        key={nextKey()}
        href={m[2]}
        target="_blank"
        rel="noreferrer"
        style={{ color: "var(--text-link)", textDecoration: "underline", textUnderlineOffset: "2px" }}
      >
        {m[1]}
      </a>,
    );
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}

export function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {blocks.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>
  );
}
