import type { BenefitCard } from "./types";

export const heroCards: BenefitCard[] = [
  {
    id: "see-relationships",
    title: "See every relationship at a glance.",
    blurb:
      "Type a company name in one filter and get every engagement — pipeline, active, completed, dead — in a single grouped table. The view Michelle has been describing since the first call.",
    itemIds: ["relationship-view", "lifecycle-stage", "highlights-row", "ask-attio-relationships"],
  },
  {
    id: "clean-pipeline",
    title: "Run a clean sales pipeline.",
    blurb:
      "Eleven stages that match how AWC actually talks about deals, a per-card indicator for who's holding things up, and an automation that moves Won deals into delivery so nothing falls through the gap.",
    itemIds: [
      "sow-onboarding-rename",
      "awaiting-response-from",
      "pipeline-to-history-workflow",
      "sales-pipeline-views",
    ],
  },
  {
    id: "ask-attio",
    title: "Find anything fast with Ask Attio.",
    blurb:
      "A saved-prompt library that turns repeat questions into one click — pricing recommendations, meeting prep, success-story lookups — all reading from the data you now have.",
    itemIds: ["pricing-recommendation-prompt", "pricing-guides-template", "stored-prompts-library", "engagement-summary"],
  },
  {
    id: "who-matters",
    title: "Know who matters without scrolling.",
    blurb:
      "A simple two-flag system — High Value Company on the firm, High-Value on the person — that surfaces the contacts and accounts worth nurturing, then powers saved views you can open daily.",
    itemIds: ["high-value-taxonomy", "high-value-views", "highlights-row"],
  },
  {
    id: "prospect-to-delivery",
    title: "Move prospect to delivery without dropping anything.",
    blurb:
      "When a deal goes Won, it automatically lands in Engagement History with Onboarding status. New PTC intakes from the JotForm will land as engagements directly — no manual rekeying.",
    itemIds: ["pipeline-to-history-workflow", "jotform-zapier-intake", "ptc-backfill", "sow-onboarding-rename"],
  },
  {
    id: "trust-your-data",
    title: "Trust the data underneath.",
    blurb:
      "Roughly a thousand engagements migrated, sponsors cleaned and split into individuals, managers and EAs linked back to coachees, idempotent scripts you can re-run safely whenever the source moves.",
    itemIds: ["historical-migration", "sponsor-backfill", "manager-ea-backfill", "previous-companies"],
  },
];
