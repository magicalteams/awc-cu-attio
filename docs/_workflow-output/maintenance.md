## How to Keep This Running

This section is for the day-to-day owner of the AWC Attio workspace. It assumes nothing about prior CRM admin experience. If anything below looks broken, the default action is to email Magical Teams (alex@magicalteams.com) before attempting a fix yourself.

---

### 1. Sync Workflows Health Check

Three workflows do the quiet plumbing that keeps Lifecycle Stage and Engagement History accurate. They run on triggers (new list entries, stage changes), not on a schedule, so "healthy" means they have fired recently when activity warranted it.

**The three workflows to check:**

1. **Engagement History to Lifecycle** — updates the parent Company's Lifecycle Stage when a coaching_status changes.
2. **Sales Pipeline to Lifecycle** — updates the parent Company's Lifecycle Stage when a sales_stage changes.
3. **Sales Pipeline to Engagement History on Won** — when a Sales Pipeline entry reaches the Won stage, creates or links the corresponding Engagement History entry.

**How to check them (do this monthly, takes about three minutes):**

1. In Attio, open **Automations → Workflows** from the left sidebar.
2. Click into each workflow by name.
3. Open the **Runs** tab.
4. Confirm two things:
   - At least one successful run in the past 7 days (assuming any pipeline activity happened in that window).
   - No red error rows at the top of the list.

**If a workflow has stopped firing or is throwing errors:** do not edit the workflow yourself. Email Magical Teams with the workflow name and a screenshot of the Runs tab. These are interconnected — editing one in isolation can break Lifecycle Stage across the whole workspace.

---

### 2. JotForm / Zapier PTC Intake

New PTC intake submissions flow from a public JotForm through Zapier into Attio. The zap creates or updates the Company, the coachee Person, the sponsor Person, the Engagement record, and the Sales Pipeline entry.

**Where the zap lives:**

- The zap is in **Michelle's personal Zapier account**, using 1 of the 5 zaps included on her plan.
- Magical Teams holds the Zapier login for build and maintenance. AWC does not need to log in to Zapier under normal operation.

**Daily expectation:** a JotForm submission should appear as a new Engagement (and corresponding Company/People records) in Attio within 5 minutes.

**If a submission does not appear within 5 minutes:**

- Email Magical Teams with the submitter's name and the approximate submission time.
- Do not re-enter the data manually first — duplicates are harder to clean up than a delayed sync.

**Do not disable the zap from the Zapier dashboard without coordinating with Magical Teams.** Pausing the zap stops the form from working entirely. If you need to take the form offline temporarily, do it from JotForm by unpublishing the form, not from Zapier.

---

### 3. Ask Attio Credits

Ask Attio and AI Autofill both consume credits from your workspace's monthly allocation.

**To see your allocation and current usage:**

- Go to **Workspace settings → Billing**. Current allotment depends on your workspace plan and may change if Attio updates their pricing.

**Rough credit consumption:**

- Each **AI Autofill** run on the Engagement Summary field uses approximately 10 credits.
- Each **Ask Attio** query uses credits depending on complexity — a simple lookup is cheap; a multi-record synthesis ("summarize our relationship with StepStone") is more expensive.

**If usage feels high:**

- Open Workspace settings → Billing and check the usage breakdown.
- If the breakdown is unclear or usage looks out of line with team activity, email Magical Teams.

There is no penalty for running out of credits — AI features simply pause until the next billing cycle resets the allocation. Standard CRM functionality is unaffected.

---

### 4. Attio Feature Requests on File

The following requests have been logged with Attio. When Attio ships them, they will appear in the product without any action needed on your end. There is no need to re-request these.

- **Multi-column lock** on list views (currently only the first column locks during horizontal scroll).
- **Color-bar indicators** on status columns instead of small dots (for at-a-glance pipeline reading).
- **Conditional cell formatting** for past-due dates (e.g., red highlight when a Due Date is in the past).
- **Pinned notes / note sorting** on record pages (currently chronological only).
- **Ask Attio reading file attachments natively** (currently only reads structured fields and notes, not attached PDFs/docs).

If you notice another limitation worth raising, mention it to Magical Teams and we will log it with Attio on your behalf.

---

### 5. Where to Email for What

**Magical Teams — alex@magicalteams.com**
- UI tweaks (new views, column changes, filter adjustments)
- Workflow issues (the three sync workflows in section 1)
- Data questions ("why is this company linked to that engagement?")
- Zapier / JotForm intake issues
- Anything dashboard-related you are not sure about

**Attio support — in-app Help button or support.attio.com**
- Login problems (can't access your account)
- Billing questions (invoices, payment method, plan changes)
- Platform outages (Attio itself is slow or down)
- Email/calendar sync at the integration level

Rule of thumb: if it's about *your data or your workspace setup*, email Magical Teams. If it's about *the Attio platform itself*, contact Attio support.

---

### 6. Monthly Five-Minute Health Check

Run through this list once a month. It catches most issues before they become problems.

- [ ] **Workflows firing.** Open Automations → Workflows. Each of the three sync workflows has a successful run in the past 7 days, no recent errors.
- [ ] **Zapier zap active.** Confirm by checking that at least one new PTC engagement has appeared from JotForm in the past 30 days (or submit a test if no real submissions came in). If no test submission appears within 5 minutes, email Magical Teams.
- [ ] **No new duplicate companies.** Open the Companies object, sort by Created date descending, scan the most recent 20 entries for obvious duplicates (same domain, slight name variants).
- [ ] **No new duplicate people.** Same check on the People object, focusing on entries auto-created by Gmail sync.
- [ ] **Lifecycle Stage looks sensible.** Open the Companies list, group by Lifecycle Stage, confirm the counts and assignments roughly match your sense of the business. Flag anything obviously wrong (e.g., an active client showing as Prospect) to Magical Teams.

If all five items pass, the system is healthy. If any fail, email Magical Teams with what you saw.