import type { FieldKind, SchemaField, SchemaNode } from "@/content/schema-reference";
import { SCHEMA_PULLED_AT, schemaNodes } from "@/content/schema-reference";

const kindLabel: Record<FieldKind, string> = {
  status: "Status · ordered",
  select: "Select",
  "multi-select": "Multi-select",
  checkbox: "Checkbox",
};

/** One option pill. Status fields show their lane order; selects don't. */
function Chip({ label, index }: { label: string; index?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5em",
        fontSize: "var(--text-sm)",
        fontWeight: 500,
        lineHeight: 1.2,
        color: "var(--text-primary)",
        background: "var(--bg-surface-warm)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        paddingBlock: "0.4em",
        paddingInline: "0.75em",
      }}
    >
      {index !== undefined && (
        <span
          aria-hidden
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: 700,
            color: "var(--accent-primary)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {index}
        </span>
      )}
      {label}
    </span>
  );
}

function Field({ field }: { field: SchemaField }) {
  const isStatus = field.kind === "status";
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "var(--space-2)",
        }}
      >
        <h4 className="hl-h4" style={{ margin: 0, fontSize: "var(--text-lg)" }}>
          {field.name}
        </h4>
        <span className="tag tag-blue">{kindLabel[field.kind]}</span>
        {field.options && (
          <span className="hl-small" style={{ fontVariantNumeric: "tabular-nums" }}>
            {field.options.length} options
          </span>
        )}
      </div>

      {field.note && (
        <p className="hl-body" style={{ margin: 0, maxInlineSize: "78ch", fontSize: "var(--text-sm)" }}>
          {field.note}
        </p>
      )}

      {field.options && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
          {field.options.map((opt, i) => (
            <Chip key={opt} label={opt} index={isStatus ? i + 1 : undefined} />
          ))}
        </div>
      )}
    </div>
  );
}

function NodeCard({ node, position }: { node: SchemaNode; position: number }) {
  return (
    <article
      id={`schema-${node.id}`}
      className="surface reveal"
      style={{
        padding: "var(--space-8)",
        display: "grid",
        gap: "var(--space-6)",
        animationDelay: `${position * 40}ms`,
        scrollMarginBlockStart: "6rem",
      }}
    >
      <header style={{ display: "grid", gap: "var(--space-2)" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "var(--space-2)",
          }}
        >
          <h3 className="hl-h3" style={{ margin: 0 }}>
            {node.name}
          </h3>
          <span className={node.kind === "object" ? "tag tag-ink" : "tag tag-green"}>
            {node.kind === "object" ? "Object" : "List"}
          </span>
          {node.parent && (
            <span className="hl-small">on {node.parent}</span>
          )}
        </div>
        <p className="hl-body" style={{ margin: 0, maxInlineSize: "70ch" }}>
          {node.blurb}
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gap: "var(--space-6)",
          borderBlockStart: "1px solid var(--border-subtle)",
          paddingBlockStart: "var(--space-6)",
        }}
      >
        {node.fields.map((field) => (
          <Field key={field.name} field={field} />
        ))}
      </div>

      {node.otherFields && node.otherFields.length > 0 && (
        <details>
          <summary
            className="hl-label"
            style={{ cursor: "pointer", color: "var(--text-muted)" }}
          >
            Other fields on {node.name} ({node.otherFields.length})
          </summary>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBlockStart: "var(--space-3)" }}>
            {node.otherFields.map((f) => (
              <span
                key={f}
                className="hl-small"
                style={{
                  background: "var(--bg-sunken)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  paddingBlock: "0.25em",
                  paddingInline: "0.6em",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}

/**
 * Field & status reference — a plain inventory of the live schema.
 * Pulled from the Attio API; content lives in src/content/schema-reference.ts.
 */
export function SchemaReference() {
  return (
    <section
      id="field-reference"
      className="section-pad cv-auto"
      style={{
        background: "var(--bg-surface-warm)",
        borderBlockStart: "1px solid var(--border-subtle)",
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
            maxInlineSize: "64ch",
          }}
        >
          <div className="hl-overline">Field &amp; status reference</div>
          <h2 className="hl-h2">
            <em>Every object and attribute</em> in your workspace.
          </h2>
          <p className="hl-lead">
            Each object and list, every select and status field, and the options
            under each — pulled straight from the workspace on {SCHEMA_PULLED_AT}.
          </p>
          <p className="hl-small" style={{ maxInlineSize: "64ch" }}>
            Status fields are the ordered lanes that drive the Kanban boards
            (numbered below). Selects are dropdown tags; multi-select means a
            record can hold several at once. Clearbit / Gmail enrichment and pure
            system fields are left out.
          </p>
        </header>

        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {schemaNodes.map((node, i) => (
            <NodeCard key={node.id} node={node} position={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
