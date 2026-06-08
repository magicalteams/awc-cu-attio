I now have all the information I need to compose the historical record. Let me write the response.

# Items Discussed and Mutually Decided to Exclude from Scope

A neutral historical record of items that came up during the engagement and were, by mutual agreement, kept outside the current build. Each entry captures the discussion, decision, and source.

1. **HubSpot wholesale data migration**
   Raised during the CRM discovery call with Elaine (Feb 26 wrap-up era) when Elaine described HubSpot as the place she "dutifully puts contacts in" but where "I don't think anybody ever looks at it again." Revisited during the Apr 7 Elaine scope meeting and locked in writing in the runbook as prerequisite P3 ("DECIDED — no migration") and under "Explicitly out of scope." The mutual decision was a fresh start in Attio rather than pulling HubSpot's contact graph forward; Gmail/Clearbit-derived records in Attio cover the same surface area. Reaffirmed by Adam on 6/4 when the "G10 HubSpot expectation" item was marked out of scope. *Source: `CRM-Discovery-call-with-Elaine-at-AWC-3f8771f6-6fb9.md`; `AWC_Attio_Runbook.md` (Scope + Elaine Meeting Decisions); `AWC_Execution_Plan_2026-05-20.md` line 13.*

2. **Pricing engine / AI pricing automation**
   Pitched during the Feb 26 CRM Recommendation Wrap-Up as a separate "pricing bot" — Michelle described the ideal as "someone on the team works with the tool, gets a one-pager, asks Michelle to agree." Demoted during the Mar 16 scope conversation when Magical Teams confirmed it could not fit alongside the CRM build in the middle package: "we can price that pricing engine out as a separate project when we're done with this project." The mutual decision was to land the CRM first and treat the pricing engine as its own priced effort. A pared-down version landed as the Pricing Guides on the Templates object (markdown only, no engine). *Source: `AWC-x-MT-CRM-Recommendation-Wrap-Up-cfd2c8d6-0299.md` [59:22, 59:39]; `AWC-x-Magical-Teams-Scope-Convo-1ef52538-b15b.md` [08:14, 08:23]; `Project_Runbook_original.md` line 2091.*

3. **MF capacity tracker**
   Raised by Michelle on Feb 26 as a companion to the pricing engine ("And the capacity planning thing too"). Mar 16 scope discussion explicitly priced it separately — Magical Teams: "the MF capacity tracking… we wouldn't be able to resolve in like these first two packages. This is more like an AI… that's a bit more custom and just needs to be priced separately." Jill confirmed it was not in option three either. Mutual decision: keep Michelle's manual Google Sheet; do not build a tracker in this engagement. *Source: `AWC-x-Magical-Teams-Scope-Convo-1ef52538-b15b.md` [12:10–12:44]; `AWC-x-MT-CRM-Recommendation-Wrap-Up-cfd2c8d6-0299.md` [59:34].*

4. **SOW-to-invoice automation trigger**
   Discussed at the Apr 7 Elaine scope meeting. Elaine described invoicing as something that "you have to know what you're [doing]" — too nuanced for a simple trigger. Mutual decision recorded in the runbook under "Automations explicitly refused": "SOW-to-invoice trigger (too nuanced; manual by design)." Invoicing stays on Elaine's existing platforms. *Source: `AWC_Attio_Runbook.md` (Elaine Meeting Decisions, line 105); `CRM-Discovery-call-with-Elaine-at-AWC-3f8771f6-6fb9.md` [18:11].*

5. **Biz Dev → Corporate Coaching handoff automation**
   Discussed Apr 7 with Elaine and confirmed with Emily. Both wanted the manual review step preserved when a won deal becomes a delivery engagement. The runbook captures it as "Biz Dev → Corporate Coaching handoff (manual duplication is intentional — Elaine + Emily want the review step)." Mutual decision: keep the duplication manual; the two Engagement records (one per source list) is the intended pattern. *Source: `AWC_Attio_Runbook.md` (Elaine Meeting Decisions, line 106).*

6. **Exec Coaching / PTC stage progression automation**
   Apr 7 Elaine meeting. Delivery-stage progression lives in ClickUp templates with dependencies that Elaine already finds "extremely uniform" and efficient. Mutual decision recorded under "Automations explicitly refused": progression stays manual; Attio scope stops at pipeline + relationship context, not delivery operations. *Source: `AWC_Attio_Runbook.md` (Elaine Meeting Decisions, line 107); `CRM-Discovery-call-with-Elaine-at-AWC-3f8771f6-6fb9.md` [20:59].*

7. **Email-to-engagement auto-creation (forward-to-create)**
   Surfaced on the May 13 support call and again 5/14 ("Feature Request — Forward email to start opportunity"). Discussed in depth on the May 20 call: Michelle confirmed inbound volume is low enough that the manual quick-action workflow (create engagement, then watch the email auto-attach via the company link) is acceptable. Mutual decision: descoped. Captured in the runbook Phase 6 list as "DEPRIORITIZED 2026-05-20" and in `project_email_automation_descoped.md`. *Source: `AWC x MT_ Attio Support May 14, 2026.md` lines 48–52; `AWC_Execution_Plan_2026-05-20.md` lines 323, 330, 507; `AWC_Attio_Runbook.md` Phase 6 item #7.*

8. **ClickUp task comments / company-level notes import**
   The runbook called out from the start that "ClickUp task comments (only descriptions are migrated)" were out of scope. A second-pass company-level notes import (E11) was discussed on the 5/14 and 5/20 calls — the script was build-ready but required AWC to scope which notes were worth importing. Deferred 6/4 per Adam pending a Michelle/Emily decision. Mutual decision: task descriptions migrated as Notes; comment threads and company-level notes left in ClickUp. *Source: `AWC_Attio_Runbook.md` line 75; `AWC_Execution_Plan_2026-05-20.md` lines 15, 445–449.*

9. **Per-firm StepStone sponsor pattern**
   Discussed on the 5/14 and 5/20 calls when the StepStone Group's many-sponsor record came up. Considered whether to design a reusable "sponsor pool" pattern other private-equity firms could follow. Confirmed 6/4 per Adam: "StepStone Sponsor scope = one-off; no per-firm pattern needed." A StepStone Sponsor role_type was added, but no broader templating. Mutual decision: handle StepStone as a one-off, revisit only if a second firm asks for the same shape. *Source: `AWC_Execution_Plan_2026-05-20.md` lines 17, 867.*

10. **Spark email tool replacement**
    Discussed Mar 16 scope and again during the Architecture Deep-Dive (Mar 30). Emily and Michelle described continuing to co-author in Spark and letting Attio pull sent mail via the Gmail integration. Magical Teams agreed: "We'll have to figure that out with the co-authoring… we can figure out what the new workflow looks like." Spark account access was discussed for template review and parked ("we can hold on that for now"). Mutual decision: keep Spark for drafting/co-authoring; Attio captures the sent record. No Spark replacement in this engagement. *Source: `AWC-x-Magical-Teams-Scope-Convo-1ef52538-b15b.md` [11:55–12:10]; `AWC-Architecture-Deep-Dive-273c902b-eae9.md` [57:30, 58:20, 59:21].*

11. **JotForm/Zapier build spec from Claude**
    Discussed during 5/20 planning when the PTC intake-form replacement was scoped. Mutual decision recorded 6/4: Adam owns the build directly using his JotForm + Zapier logins; a separate Claude-authored build spec is no longer needed. The integration itself is in scope; the documentation deliverable is not. *Source: `AWC_Execution_Plan_2026-05-20.md` line 13 (AD-14).*