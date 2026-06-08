# Pre-Call Test Scenarios

Five short exercises to run before our Wednesday June 3 call. Each takes under two minutes. The goal is to surface either a quiet "yes, this works" or a specific question we can talk through together. Do these in any order.

---

## 1. Pull up a company's full engagement history

**Prerequisite:** Logged into Attio, on the Engagements object.

**Steps:**
1. Open the **Engagements** object from the left sidebar.
2. Switch to the **Relationship View** (table view grouped by Company).
3. In the search/filter bar at the top, type **StepStone**.
4. Scan the rows that appear under the StepStone Group grouping.

**What to notice:** You should see every StepStone engagement — historical coaching, PTC, any open pipeline — in one continuous table, with company, coach, stage, fee, and engagement type visible without clicking into each record. If a known engagement is missing, or if StepStone appears split across two slightly different company names, flag it for the call.

**linked_feature_id:** `relationship-view-engagements`

---

## 2. Ask Attio for a Blue Owl summary

**Prerequisite:** Ask Attio panel accessible (right-side panel or keyboard shortcut).

**Steps:**
1. Open **Ask Attio** from the top-right (or hit the shortcut).
2. Select the **"Relationship summary"** stored prompt from the dropdown.
3. When it prompts for a company, type **Blue Owl Capital**.
4. Read the generated brief end to end.

**What to notice:** The summary should pull from actual engagement records, sponsor names, recent email threads, and any notes — not generic boilerplate. If it cites engagements that don't exist, misses an obvious sponsor relationship, or returns "I don't have information about this company," that's worth raising. Names and dates should match what you'd write yourself.

**linked_feature_id:** `ask-attio-stored-prompts`

---

## 3. Set "Awaiting Response From" on a pipeline card

**Prerequisite:** Sales Pipeline board view open.

**Steps:**
1. Open the **Sales Pipeline** list, switch to the **Kanban board** view.
2. Find an engagement currently in the **Client Has Proposal** or **Waiting for Signed SOW** column — pick one for **New Mountain Capital** if available, otherwise any real prospect.
3. Click the card to open it, find the **Awaiting Response From** field, set it to **Client**.
4. Close the card and look at it on the board.

**What to notice:** The card should now show a visual indicator (color band, icon, or tag) marking it as "ball is in the client's court." Toggle it to **Us** and confirm the indicator changes. If you can't see any visual change on the card itself without opening it, that's a question — the whole point of this field is at-a-glance triage from the board.

**linked_feature_id:** `awaiting-response-indicator`

---

## 4. Run a pricing recommendation

**Prerequisite:** Ask Attio panel open.

**Steps:**
1. Open **Ask Attio**.
2. Select the **"Pricing recommendation"** stored prompt.
3. Enter a realistic scenario: **"6-month PTC engagement for a VP-level coachee at Benefit Street Partners, executive-track."**
4. Read the recommended fee range and the reasoning.

**What to notice:** The answer should reference the AWC pricing guide loaded into Templates — specific dollar ranges for PTC, any adjustments for level or extension, and ideally a comparable past engagement at Benefit Street or a similar PE firm. If the number feels off versus what you'd quote, or it pulls a fee from a one-off discounted engagement as the benchmark, write down the specific case so we can refine the prompt.

**linked_feature_id:** `pricing-recommendation-prompt`

---

## 5. Confirm the sync workflows are running

**Prerequisite:** Workspace admin access (Michelle).

**Steps:**
1. Go to **Settings** (gear icon, bottom-left) → **Automations** → **Workflows**.
2. Find the workflow named something like **"PTC Intake — JotForm to Engagement"** (the Zapier-fed sync).
3. Click into it and look at the **Run history** tab.
4. Confirm the most recent runs show **Success** status with timestamps from the last few days.

**What to notice:** You should see a clean run log — submissions coming in, engagements being created, no red error rows. If you see failed runs, partial syncs, or the last successful run is older than expected given the JotForm submission volume, that's the most important thing to bring to the call. The "Awaiting Response From" indicator and the Relationship View only stay trustworthy if the underlying sync keeps firing, so this one is the foundation under the other four.

**linked_feature_id:** `workflow-sync-monitoring`

---

**A note on what we're doing here:** these five together cover the spine of what was built — the headline view Michelle asked for, the two stored prompts that show off Ask Attio, the new pipeline triage field, and the plumbing underneath. Two minutes each. Bring any "huh, that's not what I expected" moments to the call and we'll work through them live.