import type { ClientAsk } from "./types";

// Verified quotes from meeting transcripts. Every quote here was extracted from
// a recorded meeting in c:/Users/adam/Attio/Project History Docs/ or from an
// AWC email. Do not edit without re-verifying against source.

export const clientAsks: ClientAsk[] = [
  {
    id: "snapshot-of-relationship",
    quote:
      "It's just not easy to get the snapshot... where can I see the relationship with a company?",
    speaker: "Michelle Friedman, Founder",
    occasion: "January 22 kickoff",
    builtSolution:
      "The Relationship View — a cross-list table on Engagements, filterable by company, showing Sales Stage, Engagement Status, Coach, Coachee, Due Date, Fee, and an AI summary side by side.",
    whereInAttio: "Records → Engagements → \"Relationship View — All Engagements\" tab",
    receipt:
      "Michelle, May 22 email: \"I just wanted to say I'm really loving Attio. I need to email a senior contact at Stepstone who I haven't been in touch with in a long time and it's so helpful to get this snapshot of the engagements he's been associated with, last email, etc.\"",
  },
  {
    id: "who-has-the-ball",
    quote:
      "Waiting for a client could happen at any stage. It's not a stage in and of itself.",
    speaker: "Emily Bohannon, Director of Operations",
    occasion: "May 14 support call",
    builtSolution:
      "An \"Awaiting Response From\" field on every Sales Pipeline card — Us, Client, or Stalled. Read at a glance whose court the ball is in, without inflating the stage list.",
    whereInAttio:
      "Open any pipeline card → Awaiting Response From field. Also surfaceable as a column on any Sales Pipeline view.",
  },
  {
    id: "success-stories-have-a-place",
    quote:
      "I see them go by. I'm like, oh my God, that's a success story. And it just doesn't have a place to live. And I never remember them.",
    speaker: "Michelle Friedman",
    occasion: "March 30 architecture deep-dive",
    builtSolution:
      "A Success Stories text field on every Engagement record, surfaced on the Engagement detail page and exposed as a column on the Relationship View so you can scan past wins by company.",
    whereInAttio: "Records → Engagements → open any record → Success Stories field",
  },
  {
    id: "pricing-help",
    quote:
      "We're hoping we can get some AI help with pricing now that we have this whole framework for how we're pricing.",
    speaker: "Michelle Friedman",
    occasion: "May 20 support call",
    builtSolution:
      "AWC's pricing guide (4 tabs from your Google Sheet) loaded onto the Templates object as readable markdown, plus a \"Pricing Recommendation\" stored prompt in Ask Attio that reads from it. Ask in plain English; it cites the guide.",
    whereInAttio:
      "Ask Attio (Cmd+K / Ctrl+K) → Stored Prompts → \"Pricing Recommendation\"",
  },
  {
    id: "who-matters-most",
    quote:
      "Who are my favorites, who are high values, who are big connectors. I want to start prioritizing — out of these thousands of people who do I actually really want to spend time with.",
    speaker: "Michelle Friedman",
    occasion: "May 14 support call",
    builtSolution:
      "A two-flag system: a High Value Company checkbox on Companies for firms worth re-engaging, and a High-Value role tag on People that sits alongside someone's existing role (Sponsor/HR Contact, Coachee, etc.). Powers saved views so flagged contacts surface together.",
    whereInAttio:
      "Records → Companies → tick High Value Company. Records → People → add \"High-Value\" to Role Type.",
  },
  {
    id: "won-deals-without-retyping",
    quote:
      "Each opportunity is a task and then it moves through those stages... and then we make a duplicate of that task and then it then a whole nother part of this is like business we've won over the years.",
    speaker: "Michelle Friedman",
    occasion: "January 22 kickoff (describing the ClickUp friction)",
    builtSolution:
      "One Engagement record can sit on both Sales Pipeline and Engagement History at the same time. When you mark it Won, a workflow adds it to Engagement History as Onboarding automatically — no duplicate to recreate.",
    whereInAttio:
      "Move any pipeline card to Won → check Engagement History → Onboarding column to confirm it appeared.",
  },
];
