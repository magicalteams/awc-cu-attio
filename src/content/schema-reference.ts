// Live field & status reference for the AWC Attio workspace.
// Pulled from the Attio API on 2026-06-09. A plain inventory of every object,
// list, and their select/status options. Clearbit/Gmail enrichment and pure
// system fields are omitted.

export const SCHEMA_PULLED_AT = "June 9, 2026";

export type FieldKind = "status" | "select" | "multi-select" | "checkbox";

export type SchemaField = {
  name: string;
  kind: FieldKind;
  /** For status: ordered lanes. For select / multi-select: the options. */
  options?: string[];
  /** Short factual descriptor (optional). */
  note?: string;
};

export type SchemaNode = {
  id: string;
  name: string;
  /** Standard/custom object, or a list that sits on an object. */
  kind: "object" | "list";
  /** For lists: the parent object. */
  parent?: string;
  blurb: string;
  /** Select / status / checkbox fields with their options. */
  fields: SchemaField[];
  /** Remaining custom fields that carry no options (listed for completeness). */
  otherFields?: string[];
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
        note: "Manual yes/no flag, set per company.",
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
        note: "PTC-specific — caregiver status.",
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
        options: ["Us", "Client", "Stalled"],
      },
      {
        name: "Priority",
        kind: "multi-select",
        options: ["Urgent", "High", "Normal", "Low"],
      },
      {
        name: "Next Action",
        kind: "multi-select",
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
