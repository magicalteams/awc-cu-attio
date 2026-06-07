import type { OutstandingItem } from "./types";

export const outstandingItems: OutstandingItem[] = [
  {
    id: "jotform-zapier",
    title: "JotForm → Zapier → Attio PTC intake",
    status: "in-progress",
    description:
      "Replacing the ClickUp PTC intake form with a JotForm that pipes new engagements straight into Attio — company, coachee, manager, EA, sponsors, all linked in one submission. Building on Michelle's Zapier account and a clean, AWC-branded JotForm. Plan is to run both forms in parallel for two weeks, then redirect.",
  },
  {
    id: "hr-billing-cards",
    title: "HR Contacts + Billing Contacts on the Company page",
    status: "in-progress",
    description:
      "The Highlights row redesign — surfacing the right contacts at the top of every Company record — needs one more pass with Attio's filtered-people card behavior. The fallback (sidebar blocks instead of Highlights) is ready if Attio's native pattern stays awkward.",
  },
  {
    id: "linkedin-extension",
    title: "LinkedIn extension install for Michelle and Emily",
    status: "in-progress",
    description:
      "Browser-extension install on Michelle and Emily's setups so they can clip LinkedIn profiles into Attio with one click. Will also help backfill missing Location data on People records by pulling profile info during normal browsing.",
  },
  {
    id: "task-attributes-check",
    title: "Confirming the new Task attributes belong on Tasks",
    status: "scoping",
    description:
      "Emily asked for new Task fields — Heard From, Email, Pricing, Send Info, Priority. \"Pricing\" especially feels like it might belong on the linked engagement instead. One round of clarification with Emily before we add anything to the schema.",
  },
];
