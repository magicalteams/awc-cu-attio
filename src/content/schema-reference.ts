// Live field & status reference for the AWC Attio workspace.
// Pulled from the Attio API on 2026-06-09. This is the vetting sheet: every
// select/status field with its current options, so the team can confirm the
// language matches ClickUp. Clearbit/Gmail enrichment and pure system fields
// are intentionally omitted — they have no options to debate.

export const SCHEMA_PULLED_AT = "June 9, 2026";

export type FieldKind = "status" | "select" | "multi-select" | "checkbox";

export type SchemaField = {
  name: string;
  kind: FieldKind;
  /** For status: ordered lanes. For select / multi-select: the options. */
  options?: string[];
  /** Short context line under the field name. */
  note?: string;
  /** True when this field needs a decision in the review. */
  vet?: boolean;
};

export type SchemaNode = {
  id: string;
  name: string;
  /** Standard/custom object, or a list that sits on an object. */
  kind: "object" | "list";
  /** For lists: the parent object. */
  parent?: string;
  blurb: string;
  /** Fields with options worth vetting. */
  fields: SchemaField[];
  /** Remaining custom fields that carry no options (just listed for completeness). */
  otherFields?: string[];
};

/** A decision to tee up for the review call. */
export type SchemaDecision = {
  id: string;
  question: string;
  detail: string;
};

export const schemaNodes: SchemaNode[] = [
  {
    id: "companies",
    name: "Companies",
    kind: "object",
    blurb: "The firms — clients, prospects, partners.",
    fields: [
      {
        name: "Client Status",
        kind: "select",
        vet: true,
        note: "The two underlined-as-new values were added after the original 4-option design. Confirm you want both — “Past Client – Non Target” vs plain “Past Client” needs a one-line rule so the team tags consistently.",
        options: [
          "Prospect",
          "Active Client",
          "Past Client",
          "Past Client – Non Target",
          "Partner",
          "Other",
        ],
      },
      {
        name: "High Value Company",
        kind: "checkbox",
        note: "Yes/no flag for firms AWC wants to re-engage, set manually by Michelle. Independent of Client Status. No options — just confirm the label reads right.",
      },
    ],
    otherFields: ["Industry", "Migration Source"],
  },
  {
    id: "people",
    name: "People",
    kind: "object",
    blurb: "Everyone — sponsors, coachees, coaches, managers, EAs, internal team.",
    fields: [
      {
        name: "Role Type",
        kind: "multi-select",
        vet: true,
        note: "The most important tag list on People. A person can hold several. Worth a decision: “StepStone Sponsor” (keep client-specific roles, or fold into Sponsor/HR Contact?) and whether “Senior Leader” / “High-Value” overlap in practice. Note “EA” was shortened from “Executive Assistant”.",
        options: [
          "Sponsor/HR Contact",
          "Coachee",
          "Manager",
          "Coach",
          "Referrer",
          "EA",
          "Team Member",
          "Billing Contact",
          "High-Value",
          "Senior Leader",
          "StepStone Sponsor",
          "Group Program Attendee",
          "Other",
        ],
      },
    ],
    otherFields: [
      "Manager",
      "Executive Assistant",
      "Supported By",
      "Direct Reports",
      "Previous Companies",
      "Background Brief",
      "Migration Source",
    ],
  },
  {
    id: "engagements",
    name: "Engagements",
    kind: "object",
    blurb: "The core object — one record per ClickUp task. Every deal and every delivery lives here.",
    fields: [
      {
        name: "Engagement Type",
        kind: "select",
        vet: true,
        note: "What kind of work it is. Check each reads the way you'd describe an engagement out loud — “Various” and “Relationship Review” are the two to sanity-check.",
        options: [
          "PTC",
          "Executive Coaching",
          "Executive Coaching (Extended from PTC)",
          "Consulting",
          "Speaking/Workshop",
          "Sponsorship Program",
          "Private Pay",
          "Writing",
          "Various",
          "Cohort-Based Program",
          "Relationship Review",
        ],
      },
      {
        name: "Engagement Status",
        kind: "status",
        vet: true,
        note: "Delivery lanes for active/historical work. ⚠️ This exact 7-lane field exists twice — here on the object AND on the Engagement History list. Pick one as the source of truth and hide the other.",
        options: [
          "Onboarding",
          "Active",
          "Completing",
          "Completed",
          "Unfinished",
          "Declined/Credit Issued",
          "Historical",
        ],
      },
      {
        name: "Lifecycle Stage",
        kind: "select",
        vet: true,
        note: "⚠️ A third status-style field that blends pipeline + delivery into one list. It overlaps with both Sales Stage and Engagement Status. Decide whether it stays as a single “where is this overall” rollup or gets removed.",
        options: [
          "Prospecting",
          "Onboarding",
          "Active",
          "Completing",
          "Completed",
          "Won",
          "Re-Engagement",
          "Dead",
          "Other",
        ],
      },
      {
        name: "Leave Type",
        kind: "select",
        note: "PTC-specific — caregiver status for the parental-transition engagements.",
        options: ["Primary Caregiver", "Secondary Caregiver"],
      },
    ],
    otherFields: [
      "Fee",
      "Likelihood",
      "Number of Attendees",
      "Due Date",
      "Engagement Details",
      "Engagement Summary (AI)",
      "Success Stories",
      "Pricing Notes",
      "Location",
      "Source List",
      "Referred By",
      "Baby Due Date",
      "Expected Leave Date",
      "Expected Return Date",
      "Leave Length",
      "Company",
      "Coachee",
      "Manager",
      "Sponsors",
      "Coach",
      "Referrer",
      "ClickUp Task ID",
    ],
  },
  {
    id: "sales-pipeline",
    name: "Sales Pipeline",
    kind: "list",
    parent: "Engagements",
    blurb: "Pre-signature deals. The list the biz-dev board is built on.",
    fields: [
      {
        name: "Sales Stage",
        kind: "status",
        vet: true,
        note: "THE pipeline board — scrutinise this hardest against your ClickUp language. ⚠️ Two things drifted from the 5/20 plan: the order has “Waiting for a Signed SOW” (#6) before “SOW Signed / Onboarding” (#7), and #7's wording isn't the “SOW Onboarding” we discussed. Tell me the order you work in and the exact words, and I'll set it.",
        options: [
          "New",
          "Discovery Call",
          "Scoping",
          "Owe a Proposal",
          "Client Has Proposal",
          "Waiting for a Signed SOW",
          "SOW Signed / Onboarding",
          "Won",
          "Re-Engagement",
          "Declined",
          "Dead",
        ],
      },
      {
        name: "Task Type",
        kind: "multi-select",
        vet: true,
        note: "Carried over from ClickUp and long. Several are operational tags (HubSpot, Slack, MF/ER Weekly Meeting) that may not belong on a sales pipeline. Good candidate for a prune — mark the ones you still use.",
        options: [
          "MF/ER Weekly Meeting",
          "Manager Coaching",
          "Email",
          "Billing",
          "Program Meeting",
          "HubSpot",
          "Prep",
          "Slack",
          "Report Writing",
          "Legal",
          "JotForm",
          "Relationship Management",
          "Content Development",
          "Marketing Materials",
          "New Biz",
          "Proposal",
          "Prep Call",
          "Accounts Payable",
          "Check-In",
          "Interview",
        ],
      },
      {
        name: "Awaiting Response From",
        kind: "select",
        note: "“Who has the ball?” — the closest analog to ClickUp's old pipeline_status field.",
        options: ["Us", "Client", "Stalled"],
      },
      {
        name: "Priority",
        kind: "multi-select",
        vet: true,
        note: "Currently multi-select — a deal usually has one priority. Confirm whether this should be single-select.",
        options: ["Urgent", "High", "Normal", "Low"],
      },
      {
        name: "Next Action",
        kind: "multi-select",
        vet: true,
        note: "Uses staff initials (MF/EB/ER/VC/AP/JH). Confirm those map to current people, and that this isn't doing the same job as Awaiting Response From — they look like they overlap.",
        options: [
          "Scheduled",
          "In Progress",
          "Waiting for Client",
          "Waiting for MF",
          "Waiting for EB",
          "Waiting for ER",
          "Waiting for VC",
          "Waiting for AP",
          "Waiting for JH",
          "On Hold",
          "Unfinished",
          "Declined",
          "Complete",
        ],
      },
    ],
    otherFields: ["SOW Sent", "SOW Signed"],
  },
  {
    id: "engagement-history",
    name: "Engagement History",
    kind: "list",
    parent: "Engagements",
    blurb: "Delivered / in-progress work. The delivery board.",
    fields: [
      {
        name: "Engagement Status",
        kind: "status",
        note: "Same 7 lanes as the object-level field flagged above. Vet the wording once; we apply it in the one place we keep.",
        options: [
          "Onboarding",
          "Active",
          "Completing",
          "Completed",
          "Unfinished",
          "Declined/Credit Issued",
          "Historical",
        ],
      },
    ],
  },
];

export const schemaDecisions: SchemaDecision[] = [
  {
    id: "three-statuses",
    question: "Three overlapping status fields on Engagements",
    detail:
      "Sales Stage (pipeline), Engagement Status (delivery), and Lifecycle Stage (blended). Decide if Lifecycle Stage stays as the single rollup or goes.",
  },
  {
    id: "dup-engagement-status",
    question: "“Engagement Status” exists twice",
    detail:
      "Once on the Engagement object and once on the Engagement History list, with identical 7 lanes. Pick one to keep visible.",
  },
  {
    id: "sales-stage-wording",
    question: "Sales Stage order + the “SOW Signed / Onboarding” wording",
    detail:
      "Stages 6 and 7 drifted from the 5/20 plan. Give me the exact ClickUp phrasing and the order you work in.",
  },
  {
    id: "task-type-prune",
    question: "Task Type (20 options)",
    detail: "Prune the legacy ClickUp tags (HubSpot, Slack, MF/ER Weekly Meeting, …).",
  },
  {
    id: "who-next-overlap",
    question: "Priority / Next Action / Awaiting Response From",
    detail: "Three “who/what's next” fields. Confirm they're not redundant — and whether Priority should be single-select.",
  },
  {
    id: "granular-options",
    question: "Granular options worth a second look",
    detail:
      "Client Status “Past Client – Non Target” and Role Type “StepStone Sponsor” — keep the granular versions or simplify?",
  },
];
