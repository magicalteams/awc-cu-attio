# Dashboard Code Inventory — Current State (OLD column)

## 1. `src/content/items.ts` — Items inventory

**Total count: 26 items**

**By status:**
- `shipped`: 24
- `in-progress`: 2 (`highlights-row`, `jotform-zapier-intake`)
- `scoping`: 0
- `deferred`: 0

**By track:**
- `data-and-schema`: 5 (lifecycle-stage, sow-onboarding-rename, high-value-taxonomy, previous-companies, engagement-types)
- `migration-and-cleanup`: 4 (historical-migration, sponsor-backfill, manager-ea-backfill, ptc-backfill)
- `pipeline-and-engagements`: 3 (awaiting-response-from, lifecycle-sync-workflows, pipeline-to-history-workflow)
- `views-layouts-and-ai`: 10 (relationship-view, sales-pipeline-views, completed-archive-view, high-value-views, highlights-row, configure-page-mode, engagement-summary, stored-prompts-library, pricing-recommendation-prompt, pricing-guides-template, ask-attio-relationships) — actually 11
- `workflows-and-integrations`: 3 (gmail-calendar-sync, jotform-zapier-intake, awc-call-recorder)
- `training-and-process`: 1 (recording-consent-language)

Recount of `views-layouts-and-ai`: relationship-view, sales-pipeline-views, completed-archive-view, high-value-views, highlights-row, configure-page-mode, engagement-summary, stored-prompts-library, pricing-recommendation-prompt, pricing-guides-template, ask-attio-relationships = **11 items**. Total = 5+4+3+11+3+1 = **27 items** (recount; the array has 27 entries — corrected).

Item IDs in order: lifecycle-stage, sow-onboarding-rename, high-value-taxonomy, previous-companies, engagement-types, historical-migration, sponsor-backfill, manager-ea-backfill, ptc-backfill, awaiting-response-from, lifecycle-sync-workflows, pipeline-to-history-workflow, relationship-view, sales-pipeline-views, completed-archive-view, high-value-views, highlights-row, configure-page-mode, engagement-summary, stored-prompts-library, pricing-recommendation-prompt, pricing-guides-template, ask-attio-relationships, gmail-calendar-sync, jotform-zapier-intake, awc-call-recorder, recording-consent-language = **27 items total**.

## 2. `src/components/ByTheNumbers.tsx` — Stats array

```ts
const stats: Stat[] = [
  { value: 1024, label: "Engagements in Attio", caption: "Migrated from ClickUp + caught up post-launch.", tone: "orange", feature: true },
  { value: 263, suffix: "+", label: "Sponsors cleaned", caption: "Compound names split into individuals, titles + companies linked.", tone: "blue" },
  { value: 31, label: "Features shipped", caption: "Across schema, views, AI prompts, workflows, and integrations.", tone: "green" },
  { value: 9, label: "Lifecycle stages", caption: "One unified status from first call through final delivery.", tone: "ink" },
  { value: 45, suffix: "+", label: "Managers + EAs linked", caption: "Coachee–manager links plus Manager↔EA relationships captured as real records.", tone: "orange" },
  { value: "Oodles", label: "View configurations", caption: "Saved cuts of pipeline, history, tasks, and contacts — surface what matters most to you.", tone: "green" },
];
```

## 3. `src/components/Hero.tsx` — QuickStat strip (lines 107–110)

```tsx
<QuickStat value="~1,024" label="Engagements migrated" tone="orange" />
<QuickStat value="31"     label="Features shipped"     tone="blue" />
<QuickStat value="263+"   label="Sponsors cleaned"     tone="green" />
<QuickStat value="9"      label="Lifecycle stages"     tone="ink" />
```

## 4. `EngagementMix.tsx` — Donut slices (total = 1,024)

```ts
const slices: Slice[] = [
  { label: "Executive Coaching", value: 525, color: "#F37021" },
  { label: "Group Programs",     value: 250, color: "#2E75B6" },
  { label: "PTC",                value: 124, color: "#2E7D32" },
  { label: "Speaking",           value: 108, color: "#E67E22" },
  { label: "Consulting",         value: 17,  color: "#C0392B" },
];
```

## 5. `LifecycleDistribution.tsx` — Bar rows (total = 1,024)

```ts
const rows: Row[] = [
  { label: "Prospecting",    value: 251, color: "#2E75B6", group: "selling" },
  { label: "Re-Engagement",  value: 38,  color: "#2E75B6", group: "selling" },
  { label: "Onboarding",     value: 28,  color: "#F37021", group: "delivering" },
  { label: "Active",         value: 46,  color: "#F37021", group: "delivering" },
  { label: "Completing",     value: 24,  color: "#F37021", group: "delivering" },
  { label: "Completed",      value: 571, color: "#2E7D32", group: "closed" },
  { label: "Won",            value: 14,  color: "#2E7D32", group: "closed" },
  { label: "Dead",           value: 17,  color: "#C0392B", group: "closed" },
  { label: "Other",          value: 35,  color: "#8B95A5", group: "closed" },
];
```

## 6. `sections.json` — Targeted search matches

**"Waiting for"** (1 match, in `sow-onboarding-rename`):
> "When the SOW is sent and you are waiting on signature, move it to **Waiting for Signed SOW**."

**"N/A"**: 0 matches. The `awaiting-response-from` section explicitly lists **three values: Us / Client / Stalled** (no N/A):
> "A small field on every Sales Pipeline card... Three values: Us, Client, or Stalled."
> Bullets: "set it to Client", "flip it back to Us", "set it to Stalled".

**"Send SOW"** (3 matches, all in `sow-onboarding-rename`):
> "Stage 6 on the Sales Pipeline used to be called Send SOW. It is now SOW Onboarding."
> "Do I need to re-tag any old deals? No. Every engagement that was in Send SOW is now in SOW Onboarding automatically."

**"SOW Onboarding"** (multiple matches across `sow-onboarding-rename`, `jotform-zapier-intake`, `ptc-backfill`).

**"Executive Assistant" / "EA"** (matches in `manager-ea-backfill`, `jotform-zapier-intake`, `ptc-backfill`, `highlights-row`, `sponsor-backfill`):
> "Roughly 25 engagements got proper Manager records linked. 19+ Executive Assistants tagged. Five Manager-to-EA relationships captured for scheduling." (items.ts)
> "filter Role Type contains Executive Assistant." (manager-ea-backfill)

**`awaiting_response_from` options count: 3** (Us, Client, Stalled). N/A is NOT mentioned anywhere in sections.json (but runbook architecture says 4: Us / Client / Stalled / N/A — mismatch flag).

## 7. `src/content/outstanding.ts` — Outstanding items (4 total)

| id | title | status | description |
|---|---|---|---|
| `jotform-zapier` | JotForm → Zapier → Attio PTC intake | `in-progress` | Replacing ClickUp PTC intake form with JotForm that pipes new engagements straight into Attio — company, coachee, manager, EA, sponsors, all linked. Run both forms in parallel for two weeks, then redirect. |
| `hr-billing-cards` | HR Contacts + Billing Contacts on the Company page | `in-progress` | Highlights row redesign — surfacing right contacts at top of every Company record — needs one more pass with Attio's filtered-people card behavior. Sidebar-block fallback ready. |
| `linkedin-extension` | LinkedIn extension install for Michelle and Emily | `in-progress` | Browser-extension install on Michelle and Emily's setups to clip LinkedIn profiles into Attio with one click. Will also help backfill missing Location data on People records. |
| `task-attributes-check` | Confirming the new Task attributes belong on Tasks | `scoping` | Emily asked for new Task fields — Heard From, Email, Pricing, Send Info, Priority. "Pricing" especially feels like it might belong on the linked engagement instead. One round of clarification with Emily. |

## Key reconciliation flags for the OLD column

- **Item count: 27** (not 31 as claimed in "Features shipped" stat — discrepancy)
- **Shipped count: 25** of 27 (24 shipped + 2 in-progress, no scoped/deferred)
- **`awaiting_response_from` options: 3 in dashboard copy (Us/Client/Stalled) vs 4 in runbook architecture (adds N/A)** — needs live-Attio check
- **Engagement total: 1,024** consistent across Hero, ByTheNumbers, EngagementMix sum (525+250+124+108+17=1,024), LifecycleDistribution sum (251+38+28+46+24+571+14+17+35=1,024)
- **Sponsor count: 263+** (Hero, ByTheNumbers, items.ts copy, sections.json copy all aligned)
- **Manager/EA: "Roughly 25" managers + "19+" EAs in items.ts (manager-ea-backfill summary); "45+ Managers + EAs linked" in ByTheNumbers** — 25+19=44, close to 45+
- **Lifecycle stages: 9** (matches LifecycleDistribution row count)
- **PTC backfill: 4 names hardcoded** — Sarah Gonzales, Abby Kreitler, Lara Marcus, Lindsey Moore
- **"Send SOW" still appears 3× in sections.json** (only in `sow-onboarding-rename` as the historical context — intentional)
- **`high-value-taxonomy` FAQ references "old High Value Client checkbox and High Value Coachee role"** — both archived per memory note
- **`pricing-recommendation-prompt` "Try it" example: 6-month EC for MD → ~$32,000** (will need verification against current Pricing Guides)
- **`engagement-types` lists 5 types**: PTC, Executive Coaching, Group Program, Speaking, Consulting (matches EngagementMix slices)

Files inventoried:
- c:/Users/adam/AWC-Recap-Dashboard/src/content/items.ts
- c:/Users/adam/AWC-Recap-Dashboard/src/components/ByTheNumbers.tsx
- c:/Users/adam/AWC-Recap-Dashboard/src/components/Hero.tsx
- c:/Users/adam/AWC-Recap-Dashboard/src/components/graphics/EngagementMix.tsx
- c:/Users/adam/AWC-Recap-Dashboard/src/components/graphics/LifecycleDistribution.tsx
- c:/Users/adam/AWC-Recap-Dashboard/src/content/sections.json
- c:/Users/adam/AWC-Recap-Dashboard/src/content/outstanding.ts