import type { DeferredItem } from "./types";

// Items discussed during the engagement and mutually decided to exclude from
// the current scope. Pure historical record, neutral tone, no sales hook.
// Each entry sourced from a project history transcript or the operational runbook.

export const deferredItems: DeferredItem[] = [
  {
    id: "hubspot-migration",
    title: "HubSpot wholesale data migration",
    recordOfDecision:
      "Discussed during CRM discovery and confirmed at the April 7 scope meeting. The mutual decision was a fresh start in Attio rather than pulling HubSpot's contact graph forward — Attio's Gmail and Clearbit auto-population cover the same surface area.",
  },
  {
    id: "pricing-engine",
    title: "Pricing engine (custom AI build)",
    recordOfDecision:
      "Pitched February 26 as a separate AI build. Mutually deferred March 16 when we agreed the middle scope package would focus on meeting-prep AI instead. A lighter version landed in this scope: AWC's pricing guide loaded onto the Templates object plus the Pricing Recommendation stored prompt.",
  },
  {
    id: "capacity-tracker",
    title: "Capacity tracker for coach assignments",
    recordOfDecision:
      "Raised February 26, explicitly priced separately on March 16: this would be a custom AI build outside the CRM scope. Decision: Michelle's existing capacity spreadsheet continues; no Attio-side tracker in this engagement.",
  },
  {
    id: "sow-to-invoice-automation",
    title: "SOW-to-invoice automation",
    recordOfDecision:
      "Discussed at the April 7 scope meeting. Elaine described invoicing as too nuanced for a simple trigger. Mutual decision: invoicing stays on existing tools, not automated from Attio.",
  },
  {
    id: "won-to-delivery-handoff-automation",
    title: "Biz Dev → Corporate Coaching handoff automation",
    recordOfDecision:
      "Discussed April 7. Both Elaine and Emily wanted the manual review step preserved when a won deal becomes a delivery engagement. Mutual decision: handoff stays manual; the dual-list pattern (one Engagement record on both Sales Pipeline and Engagement History) is the intentional design.",
  },
  {
    id: "email-to-engagement-auto-create",
    title: "Inbound email → auto-create engagement",
    recordOfDecision:
      "Surfaced on the May 13 and May 14 support calls. Re-evaluated May 20: Michelle confirmed inbound volume is low enough that the manual Quick Action workflow is acceptable. Mutual decision: not building the automation; manual create-from-email is the path.",
  },
  {
    id: "clickup-comments-notes-import",
    title: "ClickUp task comments / company-level notes import",
    recordOfDecision:
      "Task descriptions came over as Notes; ClickUp comment threads and company-level notes did not. Discussed June 4: the import script remains ready but no scope decision was made on which notes were worth bringing across. Mutual decision: comments stay in ClickUp unless AWC scopes a targeted import.",
  },
  {
    id: "spark-replacement",
    title: "Spark email tool replacement",
    recordOfDecision:
      "Discussed March 16 and March 30. Decision: Spark continues for drafting and co-authoring; Attio captures sent mail via the Gmail integration. No Spark replacement in this engagement.",
  },
];
