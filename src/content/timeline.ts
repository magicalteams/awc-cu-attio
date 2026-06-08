import type { TimelineEntry } from "./types";

// Project arc from first conversation through current state.
// Dates verified from project history transcripts.

export const timelineEntries: TimelineEntry[] = [
  {
    date: "Dec 15, 2025",
    description:
      "First pre-engagement call surfaced AWC's CRM pain and confirmed ClickUp as the system to keep alongside the new tool.",
  },
  {
    date: "Jan 22 – Feb 11, 2026",
    description:
      "Kickoff with the full AWC team, then CRM discovery with each lead, then a first demo that narrowed the field to Folk and Attio.",
  },
  {
    date: "Feb 17 – Feb 26",
    description:
      "After a weekend in an Attio trial, Michelle came back leaning Attio. The recommendation wrap-up and implementation proposal formalized the choice.",
  },
  {
    date: "Mar 16 – Mar 30",
    description:
      "Scope conversation selected the middle package and deferred the pricing engine to a separate future effort. Architecture deep-dive set the object and list model.",
  },
  {
    date: "Apr 7",
    description:
      "Scope meeting with Elaine locked binding decisions: dropped fields, refused certain automations, and the Biz-Dev-excluding-Won migration rule.",
  },
  {
    date: "Apr 23",
    description:
      "Historical migration complete. First live-data review surfaced view-design feedback that drove the Relationship View work over the following weeks.",
  },
  {
    date: "May 8 – May 20",
    description:
      "Training kickoff covered Gmail sync, Granola configuration, and view feedback. Follow-up support calls commissioned the Relationship View, scoped the JotForm-to-Attio PTC intake sync, and renamed Sales Stage #7 to \"SOW Signed / Onboarding.\"",
  },
  {
    date: "June 2026",
    description:
      "Post-migration cleanup, High Value taxonomy consolidation, and Phase 5 integration work ahead of the final scheduled support call.",
  },
];
