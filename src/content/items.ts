import type { Item, ItemSection } from "./types";
import draftedSections from "./sections.json";

// Item metadata (id, title, summary, track, status, etc.) is static. The expandable
// content lives in sections.json, drafted via a content-generation workflow.

const sectionsById = draftedSections as Record<string, ItemSection[] | undefined>;

const itemsWithoutSections: Omit<Item, "sections">[] = [
  // ============================================================================
  // DATA FOUNDATION
  // ============================================================================
  {
    id: "lifecycle-stage",
    title: "Lifecycle Stage — one column for the whole journey",
    summary:
      "Every engagement now carries a single status that spans the full lifecycle: Prospecting, Onboarding, Active, Completing, Completed, Won, Re-Engagement, Dead, plus an Other catch-all.",
    track: "data-and-schema",
    benefit: "see-relationships",
    status: "shipped",
    related: ["lifecycle-sync-workflows", "relationship-view"],
  },
  {
    id: "sow-onboarding-rename",
    title: '"SOW Signed / Onboarding" — stage #7',
    summary:
      'The pipeline stage that used to be "Send SOW" is now "SOW Signed / Onboarding" — Emily and Elaine\'s language. It sits at position #7, right after "Waiting for a Signed SOW."',
    track: "data-and-schema",
    benefit: "clean-pipeline",
    status: "shipped",
  },
  {
    id: "high-value-taxonomy",
    title: "Two ways to flag who matters",
    summary:
      "One checkbox on Companies (High Value Company), one role-type tag on People (High-Value). Replaces an earlier setup with four overlapping flags.",
    track: "data-and-schema",
    benefit: "who-matters",
    status: "shipped",
    related: ["high-value-views"],
  },
  {
    id: "previous-companies",
    title: '"Previous Companies" on People records',
    summary:
      "A new attribute to track employment history, so when someone changes firms you don't lose the relationship context.",
    track: "data-and-schema",
    status: "shipped",
    benefit: "trust-your-data",
  },
  {
    id: "engagement-types",
    title: "Engagement types and their fields",
    summary:
      "PTC, Executive Coaching, Group Program, Speaking, and Consulting each have their own field set on the engagement — but they all share one record type.",
    track: "data-and-schema",
    status: "shipped",
  },

  // ============================================================================
  // MIGRATION AND CLEANUP
  // ============================================================================
  {
    id: "historical-migration",
    title: "Roughly a thousand engagements moved from ClickUp",
    summary:
      "Every relevant engagement from Corporate Coaching, Speaking, Consulting, and active-or-historical Biz Dev came across. Won Biz Dev deals were skipped — they're already represented as their delivery task.",
    track: "migration-and-cleanup",
    benefit: "trust-your-data",
    status: "shipped",
  },
  {
    id: "sponsor-backfill",
    title: "263+ sponsors cleaned up",
    summary:
      "Compound names split into individuals. Titles preserved on Person records. Role labels removed from name fields. Multi-sponsor engagements use Attio's multi-value attribute.",
    track: "migration-and-cleanup",
    benefit: "trust-your-data",
    status: "shipped",
  },
  {
    id: "manager-ea-backfill",
    title: "Managers and EAs linked to coachees",
    summary:
      "Roughly 25 engagements got proper Manager records linked. 19+ Executive Assistants tagged. Five Manager-to-EA relationships captured for scheduling.",
    track: "migration-and-cleanup",
    benefit: "trust-your-data",
    status: "shipped",
    related: ["previous-companies"],
  },
  {
    id: "ptc-backfill",
    title: "Four recent PTC engagements caught up",
    summary:
      "Sarah Gonzales, Abby Kreitler, Lara Marcus, and Lindsey Moore — all four brought across from ClickUp with managers, EAs, and sponsors linked.",
    track: "migration-and-cleanup",
    benefit: "prospect-to-delivery",
    status: "shipped",
  },

  // ============================================================================
  // PIPELINE AND ENGAGEMENTS
  // ============================================================================
  {
    id: "awaiting-response-from",
    title: '"Awaiting Response From" — who has the ball',
    summary:
      "A per-engagement indicator on Sales Pipeline cards: Us / Client / Stalled / N/A. The closest analog to the ClickUp pattern Michelle was used to.",
    track: "pipeline-and-engagements",
    benefit: "clean-pipeline",
    status: "shipped",
    related: ["sales-pipeline-views"],
  },
  {
    id: "lifecycle-sync-workflows",
    title: "Two workflows keep Lifecycle Stage current",
    summary:
      "When Coaching Status or Sales Stage changes, Lifecycle Stage updates automatically. No one has to remember to keep the indicator current.",
    track: "pipeline-and-engagements",
    benefit: "see-relationships",
    status: "shipped",
    related: ["lifecycle-stage", "pipeline-to-history-workflow"],
  },
  {
    id: "pipeline-to-history-workflow",
    title: "When Won, the engagement lands in Engagement History automatically",
    summary:
      "An Attio workflow adds Won deals to Engagement History at Coaching Status = Onboarding. Same record, two list memberships — Emily picks it up from there.",
    track: "pipeline-and-engagements",
    benefit: "prospect-to-delivery",
    status: "shipped",
    related: ["lifecycle-sync-workflows", "sow-onboarding-rename"],
  },

  // ============================================================================
  // VIEWS, LAYOUTS, AND AI
  // ============================================================================
  {
    id: "relationship-view",
    title: "Relationship View — every engagement for a company in one table",
    summary:
      "A new table on the Engagements records page that shows pipeline, active delivery, completed work, and dead leads side by side. Type a company name and you see everything.",
    track: "views-layouts-and-ai",
    benefit: "see-relationships",
    status: "shipped",
    related: ["lifecycle-stage", "lifecycle-sync-workflows"],
  },
  {
    id: "sales-pipeline-views",
    title: "Sales Pipeline — table, board, and three filtered cuts",
    summary:
      "Five saved views: the main table, a kanban board grouped by stage, Active Pipeline, Needs Nurturing, and Won This Year.",
    track: "views-layouts-and-ai",
    benefit: "clean-pipeline",
    status: "shipped",
    related: ["awaiting-response-from"],
  },
  {
    id: "completed-archive-view",
    title: "Completed Archive — now includes Company",
    summary:
      "The Completed Archive view was missing the Company column. Added.",
    track: "views-layouts-and-ai",
    status: "shipped",
  },
  {
    id: "high-value-views",
    title: "Saved views: High Value Companies + High Value Contacts",
    summary:
      "Two saved views built on the High Value flags. Re-engagement candidates float to the top (oldest interaction first).",
    track: "views-layouts-and-ai",
    benefit: "who-matters",
    status: "shipped",
    related: ["high-value-taxonomy"],
  },
  {
    id: "highlights-row",
    title: "Company page Highlights — HR Contacts and Billing Contacts at the top",
    summary:
      "The top row of every Company record surfaces HR Contacts and Billing Contacts as filtered people cards.",
    track: "views-layouts-and-ai",
    benefit: "who-matters",
    status: "in-progress",
  },
  {
    id: "configure-page-mode",
    title: "Configure Page — customize what shows on a record",
    summary:
      "Every record type has a customizable layout. Add or remove blocks, edit the sidebar, surface a different highlight. Done once for the whole workspace.",
    track: "views-layouts-and-ai",
    status: "shipped",
  },
  {
    id: "engagement-summary",
    title: "Engagement Summary (AI) — one paragraph that catches you up",
    summary:
      "An AI-generated summary on each engagement: recent activity, where the ball sits, what's blocking. Re-runnable on demand.",
    track: "views-layouts-and-ai",
    benefit: "ask-attio",
    status: "shipped",
  },
  {
    id: "stored-prompts-library",
    title: "Stored Prompts — the Ask Attio prompt library",
    summary:
      "A growing library of saved prompts the team can run in one click — pricing recommendations, prep for next meeting, coach capacity.",
    track: "views-layouts-and-ai",
    benefit: "ask-attio",
    status: "shipped",
    related: ["pricing-recommendation-prompt"],
  },
  {
    id: "pricing-recommendation-prompt",
    title: 'Ask Attio: "Pricing Recommendation"',
    summary:
      "A saved prompt that takes a quick description of an engagement and recommends a price by reading the Pricing Guides.",
    track: "views-layouts-and-ai",
    benefit: "ask-attio",
    status: "shipped",
    related: ["pricing-guides-template", "stored-prompts-library"],
  },
  {
    id: "pricing-guides-template",
    title: "AWC Pricing Guides — loaded into Attio",
    summary:
      "All four pricing guide tabs from Michelle's Google Sheet are loaded as markdown notes on a Template. Updateable, searchable, and what Ask Attio reads.",
    track: "views-layouts-and-ai",
    benefit: "ask-attio",
    status: "shipped",
    related: ["pricing-recommendation-prompt"],
  },
  {
    id: "ask-attio-relationships",
    title: "Ask Attio for whole-relationship context",
    summary:
      'Workspace-level questions — "Summarize our relationship with StepStone" — pull from every engagement, note, and email associated with the company.',
    track: "views-layouts-and-ai",
    benefit: "see-relationships",
    status: "shipped",
  },

  // ============================================================================
  // WORKFLOWS AND INTEGRATIONS
  // ============================================================================
  {
    id: "gmail-calendar-sync",
    title: "Email and calendar context, automatically merged",
    summary:
      "Gmail and Calendar are synced into Attio, so emails and meetings attach themselves to the right Person, Company, and Engagement automatically.",
    track: "workflows-and-integrations",
    benefit: "trust-your-data",
    status: "shipped",
  },
  {
    id: "jotform-zapier-intake",
    title: "JotForm intake for new PTC engagements",
    summary:
      "Replacing the ClickUp PTC intake form with a JotForm that creates the Engagement, Company, Coachee, Manager, EA, and Sponsor records in Attio automatically.",
    track: "workflows-and-integrations",
    benefit: "prospect-to-delivery",
    status: "in-progress",
  },
  {
    id: "awc-call-recorder",
    title: "Call Recorder rebranded as AWC",
    summary:
      'When the Attio recorder joins a meeting, attendees see "AWC" with the AWC logo, not "Attio".',
    track: "workflows-and-integrations",
    status: "shipped",
    related: ["recording-consent-language"],
  },

  // ============================================================================
  // TRAINING AND PROCESS
  // ============================================================================
  {
    id: "recording-consent-language",
    title: "Sample consent language + coaching-call privacy",
    summary:
      "Two short scripts you can paste into calendar invites, plus a configuration so coaching calls are never accidentally captured.",
    track: "training-and-process",
    status: "shipped",
    related: ["awc-call-recorder"],
  },
];

export const items: Item[] = itemsWithoutSections.map((it) => ({
  ...it,
  sections: sectionsById[it.id],
}));
