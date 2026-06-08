export type MaintenanceTopic = {
  id: string;
  title: string;
  /** Short framing paragraph shown under the title. */
  intro: string;
  /** Bullet points or steps; rendered as a list. */
  body: string[];
  /** Optional closing paragraph (e.g. "if something breaks..."). */
  outro?: string;
};

// Handoff / maintenance guide. Owner-facing operations content for the
// post-final-call period.

export const maintenanceTopics: MaintenanceTopic[] = [
  {
    id: "sync-workflows",
    title: "Sync workflows health check",
    intro:
      "Three workflows do the quiet plumbing that keeps Lifecycle Stage and Engagement History accurate. They run on triggers (a new entry, a stage change), not on a schedule — so \"healthy\" means they fired recently when activity warranted it. Plan to check them once a month.",
    body: [
      "Open Settings → Automations → Workflows.",
      "Click into each workflow by name. The three to check: Engagement History → Lifecycle, Sales Pipeline → Lifecycle, and Sales Pipeline → Engagement History on Won.",
      "Open the Runs tab on each.",
      "Confirm at least one successful run in the past 7 days (assuming any pipeline activity happened) and no red error rows.",
    ],
    outro:
      "If a workflow has stopped firing or is throwing errors, don't edit the workflow yourself. Email Magical Teams with the workflow name and a screenshot of the Runs tab — these workflows are interconnected and editing one in isolation can break Lifecycle Stage across the workspace.",
  },
  {
    id: "jotform-zapier",
    title: "JotForm / Zapier PTC intake",
    intro:
      "New PTC intake submissions flow from a public JotForm through Zapier into Attio. The zap creates or updates the Company, the coachee Person, the sponsor Person, the Engagement record, and the Sales Pipeline entry.",
    body: [
      "The zap lives in Michelle's personal Zapier account (1 of 5 zaps on the plan).",
      "Magical Teams holds the Zapier login for build and maintenance. AWC doesn't need to log in to Zapier under normal operation.",
      "Expectation: a JotForm submission should appear as a new Engagement in Attio within 5 minutes.",
      "If a submission doesn't appear within 5 minutes, email Magical Teams with the submitter's name and the approximate submission time. Don't re-enter the data manually first — duplicates are harder to clean up than a delayed sync.",
    ],
    outro:
      "If you ever need to take the form offline temporarily, do it from JotForm by unpublishing the form — not from Zapier. Pausing the zap leaves the form live but stops anything from flowing through.",
  },
  {
    id: "ask-attio-credits",
    title: "Ask Attio credits",
    intro:
      "Ask Attio and AI Autofill both consume credits from your workspace's monthly allocation.",
    body: [
      "To see your allocation and current usage: Workspace settings → Billing.",
      "Each AI Autofill run on the Engagement Summary field uses roughly 10 credits.",
      "Each Ask Attio query uses credits depending on complexity — a simple lookup is cheap; a multi-record synthesis (\"summarize our relationship with StepStone\") costs more.",
      "If usage feels high, check the breakdown in Workspace settings → Billing. If it looks out of line with team activity, email Magical Teams.",
    ],
    outro:
      "Running out of credits is not penalized — AI features just pause until the next billing cycle resets the allocation. Standard CRM functionality is unaffected.",
  },
  {
    id: "where-to-email",
    title: "Where to email for what",
    intro:
      "Two escalation paths cover almost everything.",
    body: [
      "Magical Teams (alex@magicalteams.com) — UI tweaks (new views, column changes, filter adjustments), workflow issues, data questions, Zapier/JotForm intake issues, anything dashboard-related you're not sure about.",
      "Attio support (in-app Help button or support.attio.com) — login problems, billing questions, platform outages, email/calendar sync issues at the integration level.",
    ],
    outro:
      "Rule of thumb: if it's about your data or your workspace setup, email Magical Teams. If it's about the Attio platform itself, contact Attio support.",
  },
  {
    id: "monthly-check",
    title: "Monthly 5-minute health check",
    intro:
      "Run through this once a month. It catches most issues before they become problems.",
    body: [
      "Workflows firing. Open Automations → Workflows. Each of the three sync workflows has a successful run in the past 7 days, no recent errors.",
      "Zapier zap active. At least one new PTC engagement appeared from JotForm in the past 30 days (or submit a test if none came in).",
      "No new duplicate companies. Open the Companies object, sort by Created date descending, scan the most recent 20 entries for obvious duplicates.",
      "No new duplicate people. Same check on the People object, focusing on entries auto-created by Gmail sync.",
      "Lifecycle Stage looks sensible. Open the Companies list, group by Lifecycle Stage, confirm counts and assignments roughly match your sense of the business.",
    ],
    outro:
      "If all five items pass, the system is healthy. If any fail, email Magical Teams with what you saw.",
  },
];
