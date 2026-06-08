# AWC Dashboard Update Spec — 2026-06-07

This is the source of truth for the dashboard update pass before AWC's final support call. All facts are verified against the live Attio workspace, current dashboard source code, and the project history transcripts in `c:/Users/adam/Attio/Project History Docs/`. Work from this spec; do not improvise.

Workflow output sources (full text in `docs/_workflow-output/`):
- `liveAudit.md` — live Attio counts, schema, stage order, role options
- `statVerification.md` — current dashboard code state
- `clientAsks.md` — verified client quotes tied to shipped features
- `trialScenarios.md` — 5 pre-call test exercises
- `deferredItems.md` — items mutually decided to exclude
- `timeline.md` — 8-bullet project arc
- `maintenance.md` — operations guide
- `wrappingUpAudit.md` — track-item completeness audit

---

## Section 1 — Accuracy pass (12 specific fixes)

Each fix lists exact file, current value (OLD), and new value (NEW) with source.

### Fix 1.1 — Stat "31 Features shipped"
- **File:** `src/components/ByTheNumbers.tsx`
- **OLD:** `{ value: 31, label: "Features shipped", ... }`
- **NEW:** `{ value: 27, label: "Features shipped", ... }`
- **Source:** items.ts has exactly 27 entries (statVerification §1).

### Fix 1.2 — Hero QuickStat "31"
- **File:** `src/components/Hero.tsx`
- **OLD:** `<QuickStat value="31" label="Features shipped" tone="blue" />`
- **NEW:** `<QuickStat value="27" label="Features shipped" tone="blue" />`

### Fix 1.3 — Hero QuickStat "~1,024"
- **File:** `src/components/Hero.tsx`
- **OLD:** `<QuickStat value="~1,024" label="Engagements migrated" tone="orange" />`
- **NEW:** `<QuickStat value="1,024" label="Engagements in Attio" tone="orange" />`
- **Source:** live count is exactly 1024 (liveAudit §E). Also reframe label from "migrated" to "in Attio" because 8 records were created post-migration (manual + JotForm) so "migrated" is technically off.

### Fix 1.4 — ByTheNumbers stat "45+ Managers + EAs linked"
- **File:** `src/components/ByTheNumbers.tsx`
- **OLD:** `{ value: 45, suffix: "+", label: "Managers + EAs linked", ... }`
- **NEW:** `{ value: 44, suffix: "+", label: "Managers + EAs linked", ... }`
- **Source:** sections.json `manager-ea-backfill` says "Roughly 25 engagements got proper Manager records linked. 19+ Executive Assistants tagged." 25 + 19 = 44, rounding up to 45 misrepresents. Use 44+ to match the underlying source.

### Fix 1.5 — EngagementMix donut numbers (currently fabricated)
- **File:** `src/components/graphics/EngagementMix.tsx`
- **OLD:** 5 slices — Executive Coaching 525, Group Programs 250, PTC 124, Speaking 108, Consulting 17 (total 1024, but categories and proportions are wrong).
- **NEW:** Use the live distribution from liveAudit §G. Recommend 7 slices to keep the chart readable:
  ```ts
  const slices: Slice[] = [
    { label: "PTC", value: 281, color: "#2E7D32" },
    { label: "Executive Coaching", value: 244, color: "#F37021" },
    { label: "Speaking / Workshop", value: 234, color: "#E67E22" },
    { label: "Sponsorship Program", value: 92, color: "#2E75B6" },
    { label: "Cohort-Based Program", value: 62, color: "#5B9BD5" },
    { label: "Consulting", value: 32, color: "#C0392B" },
    { label: "Private Pay + Other", value: 32, color: "#8B95A5" }, // 27 Private Pay + 4 Extended PTC + 1 Various
  ];
  ```
  - Sum: 281 + 244 + 234 + 92 + 62 + 32 + 32 = 977 (matches live total of categorized engagements). 47 uncategorized engagements stay out of the chart.
- **Caveat for the chart caption:** PTC is now the largest single category (281), not Executive Coaching as the old chart claimed. Update the surrounding text accordingly (see Fix 1.10).

### Fix 1.6 — LifecycleDistribution bar numbers (currently fabricated)
- **File:** `src/components/graphics/LifecycleDistribution.tsx`
- **OLD:** Prospecting 251, Re-Engagement 38, Onboarding 28, Active 46, Completing 24, Completed 571, Won 14, Dead 17, Other 35 (these were placeholder numbers; reality is wildly different)
- **NEW:** Use live distribution from liveAudit §F:
  ```ts
  const rows: Row[] = [
    { label: "Prospecting",    value: 18,  color: "#2E75B6", group: "selling" },
    { label: "Re-Engagement",  value: 53,  color: "#2E75B6", group: "selling" },
    { label: "Onboarding",     value: 4,   color: "#F37021", group: "delivering" },
    { label: "Active",         value: 45,  color: "#F37021", group: "delivering" },
    { label: "Completing",     value: 2,   color: "#F37021", group: "delivering" },
    { label: "Completed",      value: 575, color: "#2E7D32", group: "closed" },
    { label: "Won",            value: 22,  color: "#2E7D32", group: "closed" },
    { label: "Dead",           value: 240, color: "#C0392B", group: "closed" },
    { label: "Other",          value: 65,  color: "#8B95A5", group: "closed" },
  ];
  ```
  - Sum: exactly 1024 (matches total opportunities).

### Fix 1.7 — Sales stage #6 / #7 narrative
- **File:** `src/content/sections.json` — item `sow-onboarding-rename`
- **OLD:** Multiple references claiming "Stage 6 on the Sales Pipeline used to be called Send SOW. It is now SOW Onboarding."
- **NEW:** Live Attio shows position 6 = "Waiting for a Signed SOW" and position 7 = "SOW Signed / Onboarding" (liveAudit §A). The rename happened, but at a different position than the dashboard claims. Update the item to reflect live truth:
  - Item title currently: `'Stage #6: "SOW Onboarding"'` → change to `'"SOW Signed / Onboarding" — stage #7'`
  - Item summary currently: `'The pipeline stage that used to be "Send SOW" is now "SOW Onboarding" — the language Emily and Elaine actually use.'` → change to `'The pipeline stage that used to be "Send SOW" is now "SOW Signed / Onboarding" — the language Emily and Elaine actually use. It sits at position #7, right after "Waiting for a Signed SOW."'`
  - sections.json body: rewrite the "Stage 6" paragraph to: `"Stage 7 on the Sales Pipeline used to be called Send SOW. It is now SOW Signed / Onboarding. Stage 6, sitting just before it, is Waiting for a Signed SOW — when the SOW has gone out and you're waiting on signature."`
  - Update the "How to use it" steps so the flow is: Move into "SOW Signed / Onboarding" when the SOW comes back signed. Emily uses *this* as her cue (not earlier).
  - Update the "FAQ" answer accordingly.

### Fix 1.8 — "Waiting for Signed SOW" missing "a"
- **File:** `src/content/sections.json` and `src/content/items.ts`
- **OLD:** "Waiting for Signed SOW" (multiple occurrences)
- **NEW:** "Waiting for a Signed SOW" (live label includes "a"; liveAudit §A position 6)

### Fix 1.9 — awaiting_response_from options count
- **File:** `src/content/sections.json` — item `awaiting-response-from`
- **Status:** Already correct. sections.json says "Three values: Us, Client, or Stalled" — matches live (statVerification §6 confirms 3 options match live; runbook architecture text mentioning 4 options including N/A is stale and not in the dashboard). No change needed.

### Fix 1.10 — EngagementMix description text
- **File:** `src/components/DataInsights.tsx`
- **OLD:** `"Executive Coaching is the largest single category; Group Programs and PTC together make up another sizable share. Indicative — actual mix shifts as the year progresses."`
- **NEW:** `"PTC, Executive Coaching, and Speaking/Workshop are the three largest service lines and together account for the majority of engagements. From the live workspace; 47 engagements without a categorized type are excluded from the chart."`

### Fix 1.11 — LifecycleDistribution description text
- **File:** `src/components/DataInsights.tsx`
- **OLD:** `"Indicative split across the unified Lifecycle Stage. Most engagements are already in the completed archive; a healthy slice sits in active delivery."`
- **NEW:** `"Live split across the unified Lifecycle Stage. The majority sit in Completed (575) — that's the historical archive that came over from ClickUp. Active delivery is concentrated in the Active and Onboarding stages (49 combined). Prospecting is intentionally lean because Re-Engagement (53) holds the longer-dormant leads."`

### Fix 1.12 — "Executive Assistant" vs "EA" in filter instructions
- **Files:** `src/content/sections.json` items `manager-ea-backfill` and `sponsor-backfill`
- **OLD:** "filter Role Type contains Executive Assistant"
- **NEW:** "filter Role Type contains EA" (matches live role_type option label; liveAudit §D)
- **Note:** Use "Executive Assistant" in prose where it improves readability; use "EA" only when describing the actual filter value Attio will accept.

---

## Section 2 — "What you asked for" section (NEW)

A new top-of-page section between the Hero and ByTheNumbers (or between BenefitCardGrid and DataInsights — placement TBD during build). Format: numbered list of cards, each one quote + shipped solution + where in Attio.

### Content (6 items chosen for impact; full 12 in `_workflow-output/clientAsks.md` for reference)

**1. The picture of every client relationship**
- Quote: *"It's just not easy to get the snapshot... where can I see the relationship with a company?"* — Michelle, January 22 kickoff
- We built: Relationship View — a cross-list table on Engagements, filterable by company, with Sales Stage, Engagement Status, Coach, and AI summary side by side.
- Where: Records → Engagements → "Relationship View — All Engagements"
- Receipt: Michelle's May 22 email confirmed this works for her ("it's so helpful to get this snapshot of the engagements he's been associated with").

**2. Who has the ball**
- Quote: *"Waiting for a client could happen at any stage... It's not a stage in and of itself."* — Emily, May 14 support call
- We built: "Awaiting Response From" field on every Sales Pipeline card (Us / Client / Stalled). At-a-glance triage without inflating the stage list.
- Where: Open any pipeline card → Awaiting Response From field; visible as a column on the Sales Pipeline list.

**3. Success stories with a place to live**
- Quote: *"I see them go by. I'm like, oh my God, that's a success story. And it just doesn't have a place to live. And I never remember them."* — Michelle, March 30 architecture deep-dive
- We built: Success Stories attribute on every Engagement; surfaced on the Engagement detail page and exposed as a column on Relationship View.
- Where: Records → Engagements → open any record → Success Stories field.

**4. Pricing decisions, less emotional, more grounded**
- Quote: *"We're hoping we can get some AI help with pricing now that we have this whole framework for how we're pricing."* — Michelle, May 20 support call
- We built: AWC's pricing guide (4 tabs) loaded onto the Templates object as markdown; a "Pricing Recommendation" stored prompt in Ask Attio that reads from it.
- Where: Ask Attio → Stored Prompts → "Pricing Recommendation"

**5. Knowing who to keep close**
- Quote: *"Who are my favorites, who are high values, who are big connectors... I want to start prioritizing out of these thousands of people who do I actually really want to spend time with."* — Michelle, May 14
- We built: A two-flag system — "High Value Company" checkbox on Companies + "High-Value" role tag on People (added alongside any existing role). Powers a saved view filtered to flagged contacts.
- Where: Records → Companies → tick High Value Company; Records → People → add High-Value to Role Type.

**6. Won deals moving to delivery without retyping**
- Quote: *"We make a duplicate of that task and then it then a whole nother part of this is like business we've won over the years..."* — Michelle, January 22 kickoff (describing the manual ClickUp duplication step they wanted to lose)
- We built: One Engagement record can live on both Sales Pipeline (with sales_stage) and Engagement History (with coaching_status). When sales_stage hits Won, a workflow adds it to Engagement History as Onboarding automatically — no retyping.
- Where: Move any card to Won in Sales Pipeline → check Engagement History → Onboarding column to confirm.

---

## Section 3 — "Try these before our call" section (NEW)

A new section near the end of the dashboard, before the "What's wrapping up" section. Five short exercises, each under 2 minutes.

Content from `trialScenarios.md`, lightly adjusted for live state (the prompt names referenced should match the actual Stored Prompts list, which we'll verify when wiring; if a prompt named "Relationship summary" doesn't exist, change to "Ask Attio for a Blue Owl summary" as a free-form query).

### Scenarios

**1. Pull up a company's full engagement history**
- Open the Engagements records page → "Relationship View — All Engagements" tab.
- In the filter bar, type **StepStone**.
- Read the rows under StepStone Group top to bottom.
- *What to notice:* every StepStone engagement — historical coaching, PTC, any open pipeline — visible in one continuous table. If a known engagement is missing or StepStone appears split across two slightly different company names, flag it for the call.

**2. Ask Attio for a Blue Owl summary**
- Open Ask Attio (Cmd+K / Ctrl+K).
- Ask: *"Summarize our relationship with Blue Owl Capital."*
- Read the answer end to end.
- *What to notice:* the summary should reference actual engagement records, sponsors, recent email threads — not generic boilerplate. If it cites engagements that don't exist or misses obvious sponsor relationships, that's worth raising.

**3. Set "Awaiting Response From" on a pipeline card**
- Open Sales Pipeline.
- Find an engagement in Client Has Proposal or Waiting for a Signed SOW — pick one for New Mountain Capital if available, otherwise any real prospect.
- Set Awaiting Response From to **Client**.
- *What to notice:* the column updates immediately. Toggle to **Us** to see the indicator change. If you can't see any visual change on the card without opening it, that's a question for the call.

**4. Run a pricing recommendation**
- Open Ask Attio → Stored Prompts → "Pricing Recommendation"
- Try: *"6-month PTC engagement for a VP-level coachee at Benefit Street Partners."*
- Read the recommended fee and the reasoning.
- *What to notice:* the answer should reference the AWC pricing guide — specific dollar ranges, any adjustments. If the number feels off versus what you'd quote, write down the specific case so we can refine the prompt together.

**5. Confirm the sync workflows are running**
- Settings → Automations → Workflows.
- Open each of the three workflows (the two Lifecycle Stage sync workflows + the "Sales Pipeline → Engagement History on Won" workflow).
- Open the Runs tab on each.
- *What to notice:* recent successful runs, no red errors. If you see failed runs or the last run is much older than expected given recent pipeline activity, that's the most important thing to bring to the call. These workflows are the plumbing that keep the Relationship View and Awaiting Response From data trustworthy.

---

## Section 4 — "Discussed and decided not to include" section (NEW)

A new section between "What's wrapping up" and the Footer. Pure historical record. No biz dev hooks. Tone: neutral reporting.

Frame copy (intro paragraph): *"Across the engagement we discussed several items that were considered and, by mutual agreement, kept outside this scope. Listed here for the record."*

### Items to include (8, chosen from `deferredItems.md`)

1. **HubSpot wholesale data migration** — Discussed during CRM discovery (February) and confirmed at the April 7 scope meeting. Mutual decision: a fresh start in Attio rather than pulling HubSpot's contact graph forward. Gmail and Clearbit auto-population in Attio cover the same surface area.

2. **Pricing engine** — Pitched February 26 as a separate AI build. Mutually deferred March 16 when we agreed the middle scope package would focus on meeting-prep AI instead. The lighter version — AWC's pricing guide loaded onto the Templates object plus the Pricing Recommendation stored prompt — landed in this scope.

3. **Capacity tracker for Michelle's coach assignments** — Raised February 26, explicitly priced separately on March 16: this would be a custom AI build outside the CRM scope. Decision: Michelle's existing capacity spreadsheet continues; no Attio-side tracker in this engagement.

4. **SOW-to-invoice automation** — Discussed at the April 7 scope meeting. Elaine described invoicing as too nuanced for a simple trigger. Mutual decision: invoicing stays on existing tools, not automated from Attio.

5. **Biz Dev → Corporate Coaching handoff automation** — Discussed April 7. Both Elaine and Emily wanted the manual review step preserved when a won deal becomes a delivery engagement. Mutual decision: handoff stays manual; the dual-list pattern (one Engagement record on both Sales Pipeline and Engagement History) is the intentional design.

6. **Inbound email → auto-create engagement (forward-to-create)** — Surfaced on the May 13 and May 14 support calls. Re-evaluated May 20: Michelle confirmed inbound volume is low enough that the manual Quick Action workflow is acceptable. Mutual decision: not building the automation; manual create-from-email is the path.

7. **ClickUp task comments / company-level notes import** — Task descriptions came over as Notes; comment threads and company-level notes did not. Discussed June 4: the import script remains ready but no scope decision was made on which notes were worth bringing across. Mutual decision: comments stay in ClickUp unless AWC scopes a targeted import.

8. **Spark email tool replacement** — Discussed March 16 and March 30. Decision: Spark continues for drafting and co-authoring; Attio captures sent mail via the Gmail integration. No Spark replacement in this engagement.

---

## Section 5 — "Wrapping up" section restructure

The current `outstanding.ts` has 4 items. Audit shows additional items belong here. Spec for the revised list:

### Items to KEEP as-is
- `jotform-zapier` — JotForm → Zapier → Attio PTC intake (in-progress)
- `hr-billing-cards` — HR Contacts + Billing Contacts on Company page (in-progress)
- `linkedin-extension` — LinkedIn extension install for Michelle and Emily (in-progress)
- `task-attributes-check` — Confirming new Task attributes belong on Tasks (scoping)

### Items to ADD
- **`awaiting-response-from-view-surface`** — title: "Surface Awaiting Response From on the default Sales Pipeline view" — status: in-progress — description: "The Awaiting Response From field is live on every pipeline card. Adding it as a visible column on the default Sales Pipeline view + walking Michelle through it in the call so the field starts getting used day-to-day."

- **`coach-capacity-prompt`** — title: "Coach Capacity stored prompt rewrite" — status: in-progress — description: "The current prompt walks too many records and runs slow. Rewriting to constrain scope (current quarter, named coach list, summary numbers only) so it returns in under 10 seconds."

- **`ptc-compose-email-template`** — title: "PTC Compose Email template fix" — status: in-progress — description: "Michelle flagged the Compose Email action on the PTC template wasn't behaving correctly. Diagnosing and patching the template body so the action works from a Person record."

*(Adam: verify whether F1 Associated Deals duplicate widget, F9 coaching call privacy config, F11/F12 program management docs are actually still open or already shipped — if shipped, leave out; if open, add similar entries.)*

---

## Section 6 — "Asked for, blocked by Attio's platform" section (NEW)

A new short section after "Wrapping up" and before "Discussed and decided not to include". Frames items AWC asked for that aren't possible today because of platform limits. Includes the feature requests filed on AWC's behalf.

Frame copy: *"A few asks ran into Attio's platform limits. We've filed feature requests for each; when Attio ships them you'll see them appear in the product automatically. No action needed on your end."*

### Items
1. **Multi-column lock on list views** — Currently only the first column locks during horizontal scroll. Asked: lock additional columns.
2. **Color-bar indicators on status columns** — Currently small colored dots. Asked: full color bars for at-a-glance pipeline reading.
3. **Conditional cell formatting** — Asked: highlight past-due dates (e.g. red when Due Date is past). Not supported today.
4. **Pinned notes and note sorting on record pages** — Currently chronological only. Asked: pin or sort notes (e.g. billing instructions at top).
5. **Ask Attio reading file attachments** — Ask Attio reads structured fields and notes but not attached PDFs or docs. Asked: native attachment reading.
6. **Per-engagement-type conditional record layouts** — Asked: hide PTC-specific fields on non-PTC engagement records. Not supported natively today; we're using a single layout with empty fields ignored.
7. **Tasks attached to a Person rolling up to their Company** — Currently a Task lives on one record only. Asked: surface Person-level tasks on the linked Company.
8. **Notes attached to one record rolling up to related records** — Same shape: notes live on one record; no native rollup to linked Company or Person.
9. **Email visibility rules by role type** — Attio email privacy is per-user only. Asked: group-by-role-type visibility (e.g. all HR Contact emails visible to whole AWC team).

---

## Section 7 — "How we got here" timeline (NEW)

A short timeline section near the top of the dashboard or before "What you asked for." 8 bullets max, neutral tone, no individuals named.

Frame copy: *"A short record of the project arc from first conversation to today."*

### Bullets (from `timeline.md`, lightly edited)
- **Dec 15, 2025** — First pre-engagement call surfaced AWC's CRM pain and confirmed ClickUp as the system to keep alongside the new tool.
- **Jan 22 – Feb 11, 2026** — Kickoff with the full AWC team, then CRM discovery with each lead, then a first demo that narrowed the field to Folk and Attio.
- **Feb 17 – Feb 26** — After a weekend in an Attio trial, Michelle came back leaning Attio. The recommendation wrap-up and implementation proposal formalized the choice.
- **Mar 16 – Mar 30** — Scope conversation selected Option 2 and deferred the pricing engine. Architecture deep-dive set the object and list model.
- **Apr 7** — Scope meeting with Elaine locked binding decisions: dropped fields, refused certain automations, the Biz-Dev-excluding-Won migration rule.
- **Apr 23** — Historical migration complete; first live-data review surfaced view-design feedback that drove the Relationship View work.
- **May 8 – May 20** — Training kickoff covered Gmail sync, Granola configuration, and view feedback. Follow-up support calls commissioned the Relationship View, scoped the JotForm-to-Attio PTC intake sync, and renamed Sales Stage #7 to "SOW Signed / Onboarding."
- **June 2026** — Post-migration cleanup, High Value field consolidation, and Phase 5 integration work ahead of the final scheduled support call.

*(Note: the timeline.md draft said "Sales Stage #6"; corrected to #7 to match live state.)*

---

## Section 8 — "How to keep this running" section (NEW)

A maintenance / handoff section near the end of the dashboard, before the Footer.

Full content from `maintenance.md`. Five subsections:
1. **Sync workflows health check** — monthly 3-minute check
2. **JotForm / Zapier PTC intake** — where the zap lives, what to do if it breaks
3. **Ask Attio credits** — how to check usage, what consumption looks like
4. **Attio feature requests on file** — list of platform-blocked asks (overlaps with Section 6 above; on the dashboard render either link from one to the other or pick one home for the list)
5. **Where to email for what** — Magical Teams vs Attio support escalation path
6. **Monthly 5-minute health check** — short checklist

This section should live near the very bottom — it's reference, not narrative.

---

## Section 9 — Things to VERIFY before writing (open items in spec)

These are flagged in `wrappingUpAudit.md` but couldn't be confirmed via REST or transcript. Need a quick check before applying changes:

1. **`pipeline-to-history-workflow`** — is the workflow actually built in Attio, or is it still spec-ready? items.ts currently marks it `shipped`. If only spec exists, change status to `in-progress`. (Verify in Attio UI: Settings → Automations → Workflows → look for "Sales Pipeline → Engagement History on Won" or similar.)

2. **`engagement-summary`** — was the AI Engagement Summary actually re-run on the Active Pipeline post-cleanup? If yes, the item's status is fine. If not, the "How to use it" should reflect that AWC needs to trigger it.

3. **F1 Associated Deals duplicate widget on Company records** — has the rename to "Engagements" resolved it? If yes, no action. If a duplicate still appears, add to Section 5 wrapping-up.

4. **F9 Coaching call privacy config + F11/F12 program management call documentation** — are these shipped (and if so, captured in `recording-consent-language`) or open? If open, add to Section 5.

5. **The 5 Stored Prompts the dashboard references** — do prompts named "Pricing Recommendation," "Relationship summary," etc. actually exist in the live Ask Attio Stored Prompts? Scenario #2 and #4 in Section 3 depend on this. If names differ, adjust the scenario text to match live prompt names.

Adam: please answer these in the spec doc or in conversation before I start writing, OR I can flag them in a "verify before publish" comment and you confirm during your own pre-call testing pass.

---

## Section 10 — File-by-file change checklist

When applying, work through in this order:

1. `src/components/ByTheNumbers.tsx` — Fix 1.1, 1.4
2. `src/components/Hero.tsx` — Fix 1.2, 1.3
3. `src/components/graphics/EngagementMix.tsx` — Fix 1.5
4. `src/components/graphics/LifecycleDistribution.tsx` — Fix 1.6
5. `src/components/DataInsights.tsx` — Fix 1.10, 1.11
6. `src/content/sections.json` — Fix 1.7, 1.8, 1.12
7. `src/content/items.ts` — Fix 1.7 (item title/summary), Fix 1.8
8. `src/content/outstanding.ts` — Section 5 additions
9. NEW: `src/content/what-you-asked-for.ts` — Section 2 content
10. NEW: `src/content/scenarios.ts` — Section 3 content
11. NEW: `src/content/deferred.ts` — Section 4 content
12. NEW: `src/content/blocked-by-platform.ts` — Section 6 content
13. NEW: `src/content/timeline.ts` — Section 7 content
14. NEW: `src/content/maintenance.ts` — Section 8 content
15. NEW component files: `WhatYouAskedFor.tsx`, `Scenarios.tsx`, `DeferredItems.tsx`, `BlockedByPlatform.tsx`, `Timeline.tsx`, `Maintenance.tsx`
16. `src/app/page.tsx` — wire new sections in. Suggested order:
    - Hero
    - ByTheNumbers
    - **Timeline (NEW)**
    - **WhatYouAskedFor (NEW)**
    - BenefitCardGrid
    - DataInsights
    - TrackSections
    - **Scenarios (NEW)** — "Try these before our call"
    - OutstandingSection ("Wrapping up")
    - **BlockedByPlatform (NEW)**
    - **DeferredItems (NEW)** — "Discussed and decided not to include"
    - **Maintenance (NEW)** — "How to keep this running"
    - Footer
17. Final: `npm run build` to verify.
