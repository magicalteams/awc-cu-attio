import type { Track } from "./types";

export const tracks: Track[] = [
  {
    id: "data-and-schema",
    label: "Data foundation",
    blurb:
      "The shape of the new CRM — what each record means, how the categories line up, and the language the team uses. Boring on its own; load-bearing for everything else.",
  },
  {
    id: "migration-and-cleanup",
    label: "Migration and cleanup",
    blurb:
      "Pulling roughly a thousand engagements out of ClickUp and merging them cleanly into Attio's email-and-contacts graph, then patching the gaps the source data left behind.",
  },
  {
    id: "pipeline-and-engagements",
    label: "Sales pipeline and engagements",
    blurb:
      "How a deal moves from a first conversation to a delivered engagement — the stages, the in-between signals (who has the ball), and the lifecycle indicator that ties pipeline and history together.",
  },
  {
    id: "views-layouts-and-ai",
    label: "Views, layouts, and Ask Attio",
    blurb:
      "The everyday surfaces — the tables and dashboards you'll actually open — plus the AI prompts that pull from the data you now have.",
  },
  {
    id: "workflows-and-integrations",
    label: "Workflows and integrations",
    blurb:
      "The connections to the outside world: Gmail and Calendar feeding context in, JotForm bringing PTC intakes in, LinkedIn clipping contacts in, and small automations keeping the indicators current.",
  },
  {
    id: "training-and-process",
    label: "Training and process",
    blurb:
      "The guidance you'll lean on when something gets weird — where to file a task, how to record a call without taping over a coaching session, who's allowed to do what.",
  },
];
