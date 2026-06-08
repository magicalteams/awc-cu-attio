I have everything I need. The role_type query with `include_archived=true` returns the same 13 options, meaning "High Value Coachee" is fully removed (not just archived). Let me confirm by checking option deletion isn't surfacing. The active option list of 13 doesn't include "High Value Coachee" or "Executive Assistant" — confirming label is "EA" and "High-Value" is present. Now I have everything needed for the report.

# AWC Attio Workspace Audit — 2026-06-07

## A. Sales Pipeline Stage Order (`sales_pipeline` / `sales_stage`)

Attribute ID `a20d31a2-d961-41e2-8be2-e3b909ec7133`, type `status`. 11 active stages in canonical order:

| Position | Title | status_id |
|---|---|---|
| 1 | New | `5bdeb837-7947-4165-acf7-e46fb0c79dc0` |
| 2 | Discovery Call | `7fa24f23-f0eb-4a7d-bfc3-1054899d6b65` |
| 3 | Scoping | `e8f06c12-4b09-49d0-af23-f69172a8d3e3` |
| 4 | Owe a Proposal | `57838231-b2ab-4b2f-b746-ec6b179a1aa5` |
| 5 | Client Has Proposal | `3c1514c0-bec3-4213-88fa-853eab3779cc` |
| 6 | **Waiting for a Signed SOW** | `1d93fb5a-ccdb-464e-b432-c91590c7b658` |
| 7 | **SOW Signed / Onboarding** | `0e858b5f-da1b-496d-a52d-dc700400277a` |
| 8 | Won | `834adbba-9392-49f1-a11e-cee010eace70` |
| 9 | Re-Engagement | `415dad76-c0b4-40d5-add6-47efd2771500` |
| 10 | Declined | `99cc1518-d730-436f-9e32-4fed7a2d75bf` |
| 11 | Dead | `b1a67017-71ce-4a4c-bbd8-141979ca7758` |

**Position 6 is "Waiting for a Signed SOW"; position 7 is "SOW Signed / Onboarding".** This is the inverse of the runbook's documented order (which had "SOW Onboarding" at #6 and "Waiting for Signed SOW" at #7). The current live order is "SOW first sent and awaiting signature" → "SOW signed and entering onboarding," which is logically forward-flowing.

## B. Sales Pipeline `awaiting_response_from`

Attribute ID `13fd5855-b4a5-4c6e-847e-bc36a930f58e`, type `select`, single-select. **Exactly 3 active options — "N/A" is NOT present.**

| select_option_id | title |
|---|---|
| `dededb93-7e55-490d-bc08-80ec9eb113c0` | Us |
| `04a8c5d8-73c6-4a0e-8a09-335f455bb0ca` | Client |
| `c3f06584-83b2-4f5f-aa46-6e2b190909f0` | Stalled |

## C. Sales Pipeline Attributes (full)

10 attributes on the sales_pipeline list (paged offset 10 returned 0 — this is the complete set):

| api_slug | type | notes |
|---|---|---|
| `entry_id` | text | system, unique |
| `created_at` | timestamp | "Added to list at" |
| `created_by` | actor-reference | "Added to list by" |
| `sales_stage` | status | 11 stages (see A) |
| `task_type` | select (multi) | 20 active options |
| `awaiting_response_from` | select | 3 options (see B) |
| `priority` | select (multi) | Urgent/High/Normal/Low |
| `next_action` | select (multi) | 13 options incl. Waiting for MF/EB/ER/VC/AP/JH |
| `sow_sent` | date | |
| `sow_signed` | date | |

**View membership cannot be queried via REST** (no `/v2/lists/{slug}/views` endpoint exposed in the MCP/REST surface). Verify in UI whether `awaiting_response_from` is visible in the default Sales Pipeline view. The attribute exists and is writable, so it's available to add to any view.

## D. People `role_type` Options

Attribute ID `3711f415-c828-4ba4-8790-b42157a65f38`, type `select`, multi-select. **13 active options** (identical list with and without `include_archived=true`, meaning no archived options surface):

Sponsor/HR Contact, Coachee, Manager, **High-Value** (`b0479a43-5c11-4713-9cfb-4ba6d381c2ac`), Coach, Referrer, **EA** (`2348fda0-a770-4dab-a829-9ec4943b413c`), Team Member, Other, Billing Contact, Senior Leader, StepStone Sponsor, Group Program Attendee.

- Canonical label is **"EA"** (not "Executive Assistant").
- **"High-Value"** is present (hyphenated).
- **"High Value Coachee" is absent** — neither active nor returned via include_archived (fully removed, consistent with the 6/4 consolidation memory).
- Also note: the legacy `high_value_client` checkbox attribute is still on People with `is_archived: true` (attribute_id `2ed3ec2f-50da-4633-b531-0762a84031d0`).

## E. Live Record Counts

| Source | Count |
|---|---|
| Opportunities (Engagements) | **1024** |
| Companies | **1212** |
| People | **4248** |
| Sales Pipeline entries | **339** |
| Engagement History (`engagement_history` list, displayed as "All Engagements") | **954** |

## F. Lifecycle Stage Distribution (opportunities)

| Title | Count |
|---|---|
| Completed | 575 |
| Dead | 240 |
| Other | 65 |
| Re-Engagement | 53 |
| Active | 45 |
| Won | 22 |
| Prospecting | 18 |
| Onboarding | 4 |
| Completing | 2 |
| **Total** | **1024** |

## G. Engagement Type Distribution (opportunities)

| Title | Count |
|---|---|
| PTC | 281 |
| Executive Coaching | 244 |
| Speaking/Workshop | 234 |
| Sponsorship Program | 92 |
| Cohort-Based Program | 62 |
| Consulting | 32 |
| Private Pay | 27 |
| Executive Coaching (Extended from PTC) | 4 |
| Various | 1 |
| **Sum reported** | **977** (47 opportunities have `engagement_type` unset; not all 1024 are categorized) |

Options `Writing` and `Relationship Review` exist in the schema but returned 0 opportunities.

## H. Sales Stage Distribution (sales_pipeline entries, total 339)

| Stage | Count |
|---|---|
| Dead | 234 |
| Re-Engagement | 53 |
| Won | 23 |
| Scoping | 8 |
| Declined | 6 |
| SOW Signed / Onboarding | 5 |
| Discovery Call | 3 |
| New | 2 |
| Owe a Proposal | 2 |
| Client Has Proposal | 2 |
| Waiting for a Signed SOW | 1 |

Active funnel (stages 1–7) = **23 entries**; Won = 23; Re-Engagement = 53; Dead/Declined = 240.

## I. Coaching Status Distribution (engagement_history entries, total 954)

| Status | Count |
|---|---|
| Completed | 575 |
| Active | 45 |
| Unfinished | 23 |
| Declined/Credit Issued | 6 |
| Completing | 2 |
| Onboarding | 1 |
| **Sum** | **652** |

302 engagement_history entries have `coaching_status` unset (likely the "Historical" backfill never received a status, or status is null). Worth verifying in cleanup pass.

## J. Source_List Distribution (opportunities)

| Value | Count |
|---|---|
| Corporate Coaching | 463 |
| Biz Dev | 363 |
| Speaking/Cohort-Based Programs | 173 |
| Consulting | 17 |
| **Total** | **1016** |

8 opportunities have `source_list` unset (1024 − 1016 = 8) — possibly post-migration manually created Engagements.

## K. Workflows

**Not queryable via REST.** Attio's Automations / Workflows surface has no public API endpoint in the current REST/MCP surface. Workflow existence, triggers, and run history must be verified manually in the Attio UI (Settings → Automations).

---

## Notable Deltas vs. Runbook

1. **Sales stage order is reversed at positions 6/7** vs. the 2026-05-20 runbook note (live: "Waiting for a Signed SOW" at 6, "SOW Signed / Onboarding" at 7). The MEMORY note `project_sow_onboarding_rename.md` describing "Send SOW → SOW Onboarding rename at #6" appears not to match current production.
2. `awaiting_response_from` has **3 options, not 4** — no "N/A".
3. `role_type` uses **"EA"** as the canonical short label, not "Executive Assistant".
4. `engagement_history` list display name is **"All Engagements"** (api_slug `engagement_history`).
5. 302 engagement_history entries lack a `coaching_status`; 47 opportunities lack `engagement_type`; 8 opportunities lack `source_list`.