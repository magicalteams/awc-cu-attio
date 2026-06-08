Now I have a complete picture. Let me cross-reference each in-scope Track item from the execution plan against the dashboard inventory and produce the audit report.

# Track-Item Audit: Execution Plan vs Dashboard

## 1. SHIPPED but NOT in dashboard `items.ts`

These are completed deliverables missing from the recap. Each should be added so the client sees the full scope of what was done.

- **A1 / G9** — Role-type additions (StepStone Sponsor, Group Program Attendee) + typo fix (High Value Coachhe → Coachee) + "Coachee's Manager" → "Manager" rename. Not represented anywhere in `items.ts`. Worth an item or a bundled "Schema polish" entry.
- **A4 PTC backfill** — `ptc-backfill` exists in items.ts but only names 4 coachees; status snapshot says "4 coachees, 7 engagements." Verify the item copy matches the actual scope (engagements vs. coachees).
- **B4 AI Engagement Summary re-run on Active Pipeline** — `engagement-summary` item exists describing the attribute, but the post-cleanup re-run (a distinct shipped action) is not called out.
- **B6 Completed Archive Company column** — present as `completed-archive-view`. Confirmed accurate.
- **E2 Awaiting Response From** — present as `awaiting-response-from`. BUT the 6/4 status correction flags it as "needs Adam to add as column on default Sales Pipeline view + demo to Michelle." The attribute shipped; the *view-surface + demo* did not. Worth confirming the item copy doesn't overclaim.
- **E3 Last-contact verification post-sponsor-backfill** — listed as shipped 5/20. Not in items.ts. Likely subsumed by `sponsor-backfill` / `gmail-calendar-sync`, but no explicit verification artifact.
- **E4 High Value Clients view** — covered by `high-value-views`. Confirmed accurate.
- **E5/E6/E1/F2** — all resolved-without-action items. Correctly absent from items.ts (nothing was actually built).
- **E14 Previous Companies attribute** — present as `previous-companies`. Confirmed accurate.
- **F7 AI credits / billing transparency note** — shipped per snapshot. Not in items.ts. Probably belongs under training/process or in a "communications shipped" subsection.
- **F8 Granola team account question** — shipped per snapshot. Not in items.ts. Same comms category as F7.
- **F10 Sample consent language** — present as `recording-consent-language`. Confirmed accurate.
- **G4 high_value_company checkbox** — covered by `high-value-taxonomy`. Confirmed accurate.
- **G6 Bhavna Katkar correction** — shipped per snapshot. Not in items.ts. Either bundle into a "data-correction examples" item or skip (one-off).
- **G9** — covered above with A1.
- **G14 Pipeline → History on Won workflow** — present as `pipeline-to-history-workflow`. Confirmed accurate (build spec ready + workflow shipped per items.ts status "shipped"). **Verify** the workflow is actually deployed vs. just spec-ready — the 6/4 snapshot says "build spec ready: ~20 min for Adam to build." If not yet built, status in items.ts should be `in-progress`, not `shipped`.
- **High-Value consolidation cleanup** (archived `high_value_client` + `High Value Coachee`, migrated Aditya + Natalie) — folded into `high-value-taxonomy`; copy reads correctly.

## 2. IN PROGRESS but NOT in `outstanding.ts`

- **E2** — "add as column on default Sales Pipeline view, demo to Michelle." This is open per the 6/4 status correction and is not in outstanding.ts. **Add.**
- **E8 PTC Compose Email template bug** — not marked shipped, not in outstanding. Day-3 plan item that has no confirmation of completion. **Add to outstanding** (or confirm shipped + fold into change-log).
- **E9 Conditional fields by engagement type** — Day-4 plan item, not shipped, not in outstanding. Likely belongs in "Asked for, blocked by platform" (Attio doesn't support native conditional visibility per the plan). See section 3.
- **F1 Associated Deals duplicate widget** — Day-5 plan item bundled with B1. No completion marker. Emily's pre-6/3 email re-flagged it. **Add to outstanding** or verify resolved in HR/Billing pass.
- **F3 Coach Capacity prompt rewrite** — perf bug, Day-5 plan item, not in shipped list. User flagged it as "removed from outstanding." **Add back to outstanding** unless resolved.
- **F9 Coaching call privacy config** — Day-5 plan item. Documentation/config not confirmed shipped. **Add to outstanding** or to training-and-process shipped section if documented.
- **F11 / F12 Program management call docs + multi-record linking docs** — drafted per Day-5 plan but not in shipped list and not in outstanding. Likely belongs in the "Discussed and decided" or a guidebook-revision bucket.
- **F13 Guidebook v2 revision** — explicitly post-6/3, 6–8 hour scope. **Add to outstanding** as a follow-up phase.
- **G1 Custom Task attributes (Heard From, Email, Pricing, Send Info, Priority)** — present as `task-attributes-check` (status: scoping). Confirmed in outstanding.
- **G13 LinkedIn extension install for Michelle + Emily** — present as `linkedin-extension`. Confirmed.
- **G15 Locations backfill** — depends on G13; user flagged it removed from outstanding. **Add back** as dependent on LinkedIn extension landing, OR fold into the LinkedIn extension item's description.
- **G16 Conditional formatting for past-due dates** — Pre-6/3 investigation item. Not in shipped list; if Attio doesn't support it, belongs in section 3 below. If supported, **add to outstanding**.
- **G5 Email visibility by role type** — plan flagged as likely-unsupported. Belongs in section 3.

## 3. BLOCKED by Attio platform ("Asked for, blocked by platform")

Candidates for an explicit dashboard section signaling client asks the platform can't deliver today:

- **E9 Conditional fields/layouts per engagement type** — plan notes "native conditional visibility is NOT supported as of the docs mirror." Workarounds (tab-based hiding, layout variants) may or may not work.
- **E10 Last-email on Re-Engagement showing company-level** — Attio limitation; falls back to manual `last_outreach_sent` or Task workflow.
- **G2 Tasks-on-Person rolling up to Company** — no native support; would need workflow (Phase 6).
- **G5 Email visibility by role-type rules** — Attio email privacy is per-user only; no group-by-role-type.
- **G11 Engagement Notes rolling up to Company/Person** — Attio notes attach to one record; no native rollup.
- **G16 Conditional formatting (past-due in red)** — pending verification; if not supported, belongs here.
- **DD/MM/YY date format** (Track E "items NOT added") — explicit Attio limitation, feature request filed.
- **G3 Mobile email deep-links** — pending verification; if broken, file feature request and surface here.

## 4. RETIRED / mutually deferred ("Discussed and decided not to include")

- **E10 fallback / E11 Company-level ClickUp notes import** — deferred per Adam 6/4; script build-ready but not shipping.
- **F6 Keyboard shortcuts PDF** — deferred per 6/4 snapshot.
- **G10 HubSpot Additional Info migration** — out of scope per Adam 6/4; HubSpot was never in scope.
- **AD-14 JotForm/Zapier build spec from Claude** — Adam owns the build directly (snapshot notes this).
- **E10 last_outreach_sent fallback** — superseded by Task workflow path; "no longer needed."
- **F13 Guidebook v2** — scoped for post-6/3 follow-on, not current engagement.
- **Inbound email → auto-create engagement (Phase 6 #7)** — explicitly deprioritized 5/20; manual quick-action is the accepted workflow. Worth surfacing as "discussed and decided manual is fine."
- **A3 Team Member role archive** — audit complete, decided to keep as-is.
- **StepStone Sponsor as per-firm pattern** — confirmed one-off 6/4.
- **Color coding on pipeline stages** — explicitly deprioritized in 5/20 call.
- **F11/F12 program management call documentation** — drafted but no clear handoff; if not shipping, surface as "discussed and resolved via guidance."

## 5. Confirmed accurate in current dashboard (do NOT touch)

These dashboard items map cleanly to plan items that are genuinely shipped:

- `lifecycle-stage` — Track B3 fallback
- `sow-onboarding-rename` — A2
- `high-value-taxonomy` — G4 + High-Value consolidation
- `previous-companies` — E14
- `engagement-types` — schema foundation
- `historical-migration` — Phase 2
- `sponsor-backfill` — pre-5/20 cleanup
- `manager-ea-backfill` — pre-5/20 cleanup
- `ptc-backfill` — A4 (verify coachee/engagement counts match)
- `awaiting-response-from` — E2 attribute (verify view-surface caveat)
- `lifecycle-sync-workflows` — B3 fallback automation
- `pipeline-to-history-workflow` — G14 (**verify actually built** vs. spec-ready)
- `relationship-view` — B3
- `sales-pipeline-views` — Phase 4
- `completed-archive-view` — B6
- `high-value-views` — E4
- `highlights-row` — B2 (correctly marked in-progress)
- `configure-page-mode` — B1 enabler
- `engagement-summary` — B4 (verify re-run is reflected)
- `stored-prompts-library` — C2 / Phase 5
- `pricing-recommendation-prompt` — C2
- `pricing-guides-template` — A5/C2
- `ask-attio-relationships` — Phase 5.7
- `gmail-calendar-sync` — Phase 5.2
- `jotform-zapier-intake` — C1 (correctly in-progress)
- `awc-call-recorder` — G12
- `recording-consent-language` — F9 + F10

**Top priorities to act on:** (1) verify G14 workflow is actually built; (2) decide whether E8, F1, F3, F9, G15, G16 need to be added to `outstanding.ts`; (3) add a "Blocked by Attio" section covering E9, E10, G2, G5, G11; (4) add a "Discussed and decided" section covering E11, F6, G10, color-coding, inbound-email automation.