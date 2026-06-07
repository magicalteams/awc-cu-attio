// Content types shared across hero, items, tracks, outstanding work, and phase-next.
// Content is fully type-safe — no markdown parsing at runtime.

export type Status = "shipped" | "in-progress" | "scoping" | "deferred";

export type TrackId =
  | "data-and-schema"
  | "migration-and-cleanup"
  | "pipeline-and-engagements"
  | "views-layouts-and-ai"
  | "workflows-and-integrations"
  | "training-and-process";

export type BenefitId =
  | "see-relationships"
  | "clean-pipeline"
  | "ask-attio"
  | "who-matters"
  | "prospect-to-delivery"
  | "trust-your-data";

/** A block in the body of an expandable panel. Keep tight — no nested complexity. */
export type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; tone: "info" | "warn" | "success"; text: string }
  | { kind: "steps"; steps: string[] }
  | { kind: "code"; language?: string; code: string };

export type ItemSection = {
  /** Stable id for anchor links + analytics. */
  id: string;
  /** Heading shown above the content blocks. e.g. "What this is", "How to use it". */
  heading: string;
  blocks: ContentBlock[];
};

export type Item = {
  id: string;
  title: string;
  /** One-line plain-English summary. Customer-facing. */
  summary: string;
  /** Which track it belongs to (for the "Browse by track" section). */
  track: TrackId;
  /** Which user-benefit hero card it supports (optional). */
  benefit?: BenefitId;
  /** Status badge. shipped = available now; in-progress = wrapping up; scoping = under design. */
  status: Status;
  /** When the item has expandable training/FAQ content, populate this. Otherwise the row stays collapsed. */
  sections?: ItemSection[];
  /** Cross-links to other items by id. */
  related?: string[];
};

export type BenefitCard = {
  id: BenefitId;
  /** Outcome-driven headline. Customer-facing. "See every relationship at a glance" */
  title: string;
  /** 1-2 sentences expanding the headline. */
  blurb: string;
  /** Item IDs that contribute to this benefit. Surfaced as a quick-link list. */
  itemIds: string[];
};

export type Track = {
  id: TrackId;
  label: string;
  /** Short framing sentence shown under the track header. */
  blurb: string;
};

export type OutstandingItem = {
  id: string;
  title: string;
  status: "in-progress" | "scoping" | "blocked";
  blocker?: string;
  description: string;
};

export type PhaseNextItem = {
  id: string;
  title: string;
  description: string;
};
