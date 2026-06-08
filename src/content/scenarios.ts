import type { Scenario } from "./types";

// 5 short pre-call exercises. Each under 2 minutes. Verified against the live
// Attio workspace state on 2026-06-07.

export const scenarios: Scenario[] = [
  {
    id: "relationship-view-stepstone",
    title: "Pull up a company's full engagement history",
    prerequisite: "Logged into Attio.",
    steps: [
      "Open the Engagements records page from the left sidebar.",
      'Switch to the "Relationship View — All Engagements" tab.',
      "In the filter bar, type StepStone.",
      "Read the rows under StepStone Group top to bottom.",
    ],
    whatToNotice:
      "You should see every StepStone engagement — historical coaching, PTC, anything still open — in one continuous table. If a known engagement is missing, or StepStone appears split across two slightly different company names, flag it for the call.",
  },
  {
    id: "ask-attio-blue-owl",
    title: "Ask Attio for a Blue Owl summary",
    prerequisite: "Ask Attio open (Cmd+K on Mac, Ctrl+K on Windows).",
    steps: [
      'Type: "Summarize our relationship with Blue Owl Capital."',
      "Read the answer end to end.",
    ],
    whatToNotice:
      "The summary should reference actual engagement records, sponsor names, recent email threads — not generic boilerplate. If it cites engagements that don't exist or misses an obvious sponsor relationship, that's worth raising.",
  },
  {
    id: "awaiting-response-toggle",
    title: 'Set "Awaiting Response From" on a pipeline card',
    prerequisite: "Sales Pipeline list open.",
    steps: [
      'Find an engagement currently in "Client Has Proposal" or "Waiting for a Signed SOW" — pick one for New Mountain Capital if available, otherwise any real prospect.',
      'Click the card and set Awaiting Response From to "Client."',
      "Close the card and look at it on the list view.",
      'Toggle it back to "Us" and watch the column update.',
    ],
    whatToNotice:
      "The indicator should change visibly without you needing to re-open the card. If you can't see any difference at a glance, that's a question — the whole point of this field is fast triage from the list.",
  },
  {
    id: "pricing-recommendation",
    title: "Run a pricing recommendation",
    prerequisite: "Ask Attio open.",
    steps: [
      'Select the "Pricing Recommendation" stored prompt (or type the prompt name).',
      'Try: "6-month PTC engagement for a VP-level coachee at Benefit Street Partners."',
      "Read the recommended fee and the reasoning.",
    ],
    whatToNotice:
      "The answer should reference the AWC pricing guide we loaded onto the Templates object — specific dollar ranges, any adjustments for level or extension. If the number feels off versus what you'd quote, write the specific case down so we can refine the prompt together.",
  },
  {
    id: "workflow-runs-tab",
    title: "Confirm the sync workflows are running",
    prerequisite: "Admin access to the workspace (Michelle).",
    steps: [
      "Open Settings → Automations → Workflows.",
      "Open each of the three workflows (the two Lifecycle Stage sync workflows and the Sales Pipeline → Engagement History on Won workflow).",
      "Click the Runs tab on each.",
    ],
    whatToNotice:
      "You should see recent successful runs and no red error rows. If the most recent run is older than expected given recent pipeline activity, that's the most important thing to bring to the call — these workflows keep the Relationship View and the Lifecycle Stage indicators accurate.",
  },
];
