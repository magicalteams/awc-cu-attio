import type { BlockedItem } from "./types";

// Items AWC asked for that aren't possible today because of Attio platform
// limits. Feature requests filed; they'll appear in the product when Attio
// ships them, no action needed on AWC's end.

export const blockedItems: BlockedItem[] = [
  {
    id: "multi-column-lock",
    title: "Multi-column lock on list views",
    description:
      "Only the first column locks during horizontal scroll today. Asked Attio for additional columns to lock so wide pipeline views stay readable.",
  },
  {
    id: "color-bars",
    title: "Color-bar indicators on status columns",
    description:
      "Sales Stage and similar status fields show as small colored dots. Asked Attio for full color bars so the pipeline scans at a glance the way ClickUp's color-coded columns did.",
  },
  {
    id: "conditional-formatting",
    title: "Conditional cell formatting (past-due dates in red)",
    description:
      "Asked Attio to support conditional cell highlighting — for example, Due Date in red when it's in the past. Not supported in the table views today.",
  },
  {
    id: "pinned-notes",
    title: "Pinned notes and note sorting on record pages",
    description:
      "Notes show in chronological order with no pin or sort. Asked Attio for the ability to pin a note (so billing instructions, for example, always stay at the top of a Company record).",
  },
  {
    id: "ask-attio-attachments",
    title: "Ask Attio reading file attachments",
    description:
      "Ask Attio reads structured fields and notes today, but not PDFs or other attachments. Asked Attio to add native attachment reading so past proposals and decks become queryable.",
  },
  {
    id: "conditional-record-layouts",
    title: "Per-engagement-type record layouts",
    description:
      "Asked Attio for layout variants — for example, hide PTC-specific fields on a non-PTC engagement. Not supported natively today; we're using a single layout that shows all fields and you skip the ones that don't apply.",
  },
  {
    id: "tasks-rollup-to-company",
    title: "Tasks on a Person rolling up to their Company",
    description:
      "A Task lives on the one record it was created on. Asked Attio to surface Person-level tasks on the linked Company. Today the workaround is choosing the parent record deliberately when the task is created.",
  },
  {
    id: "notes-rollup",
    title: "Notes rolling up to related records",
    description:
      "Notes attach to one record. Asked Attio to add a rollup so a note on an Engagement surfaces on the linked Company and Person too. Today: pick the right parent for the note.",
  },
  {
    id: "email-visibility-by-role",
    title: "Email visibility rules by role type",
    description:
      "Attio's email privacy is per-user only. Asked for group-by-role-type visibility — for example, every email from someone tagged HR Contact automatically visible to the whole AWC team. Not supported today.",
  },
];
