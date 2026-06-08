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

/** A direct quote from an AWC team member tied to a specific shipped solution. */
export type ClientAsk = {
  id: string;
  /** What they were asking for, in their own words. */
  quote: string;
  /** Who said it + role. */
  speaker: string;
  /** When (display-friendly: "January 22 kickoff" or "May 22 email"). */
  occasion: string;
  /** What we built in response. 1-2 plain English sentences. */
  builtSolution: string;
  /** Concrete path in Attio. */
  whereInAttio: string;
  /** Optional: a short note tying back to evidence (a follow-up quote, the May 22 email, etc.). */
  receipt?: string;
};

/** A pre-call test exercise — a 2-minute "try this in Attio" scenario. */
export type Scenario = {
  id: string;
  title: string;
  prerequisite?: string;
  steps: string[];
  whatToNotice: string;
};

/** An item discussed during the engagement and mutually decided to exclude. Neutral historical record. */
export type DeferredItem = {
  id: string;
  title: string;
  /** What was discussed, what was decided, when. Neutral tone, no sales hook. */
  recordOfDecision: string;
};

/** A request that hit an Attio platform limit. Feature request filed; ships when Attio ships it. */
export type BlockedItem = {
  id: string;
  title: string;
  description: string;
};

export type TimelineEntry = {
  date: string;
  description: string;
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
