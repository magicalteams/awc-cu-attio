I have everything I need. Let me compose the final report.

# Verifiable AWC Client Quotes Tied to Shipped Features

A numbered inventory of direct, source-verified client quotes from the AWC engagement, each paired with the specific item that shipped in response. Quotes are verbatim from the transcript files; speaker labels are corrected to true names where transcripts mistakenly attribute lines to "Magical Teams" placeholders.

---

**1. The "snapshot of the client relationship" ask → Relationship View**

- **speaker:** Michelle Friedman (Founder, AWC)
- **meeting_date:** 2026-01-22
- **source_file:** `c:/Users/adam/Attio/Project History Docs/Magical-Teams-x-AWC-Kickoff-5337229b-b631.md`
- **quote_verbatim:** "It's just not easy to get the snapshot and like Jill said, a lot of cutting and pasting. So you'll, you'll see what that all looks like. But for me, just like, where can I see like the relationship with a company?"
- **shipped_solution:** Relationship View — a new list (cross-cuts Sales Pipeline + Engagement History) sorted by company with sales_stage and coaching_status side-by-side, plus AI Engagement Summary column.
- **where_in_attio:** Sidebar → Lists → **Relationship View** (filter by Company)

---

**2. "Whole relationship picture" ask → Relationship View (table form) confirmed by Michelle in 5/20 meeting**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-05-20
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Attio-Support-8d27f1d9-1480.md`
- **quote_verbatim:** "Right. So I'm picturing a third list, which in ClickUp we have like all engagements. It's like the summary view that. It's like the relationship, or you can call it relationship view or something like that."
- **shipped_solution:** Built the named "Relationship View" list in response to this exact phrasing. Alex on the same call: "Adam, is that making sense? I think we just need a third list here that scans across both but gives them the table view." Adam: "I can build that."
- **where_in_attio:** Sidebar → Lists → **Relationship View**

---

**3. May 22 email — Stepstone snapshot confirmation (verified from prior conversation)**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-05-22
- **source_file:** Email to Adam (quoted in prior conversation)
- **quote_verbatim:** "I just wanted to say I'm really loving Attio. I need to email a senior contact at Stepstone who I haven't been in touch with in a long time and it's so helpful to get this snapshot of the engagements he's been associated with, last email, etc. We will likely still want to tweak the highlights on this landing page as we think about it more, but this is really such an incredibly helpful tool for me."
- **shipped_solution:** Relationship View + person/company landing page highlights — direct confirmation that the snapshot we built solves the original 1/22 ask.
- **where_in_attio:** Records → Companies → Stepstone → right rail Highlights + linked **Relationship View**

---

**4. "Who has the ball" → Awaiting Response From attribute**

- **speaker:** Emily Bohannon (Director of Operations, AWC)
- **meeting_date:** 2026-05-14
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Attio-Support-51ad3855-1df3.md`
- **quote_verbatim:** "Waiting for a client could happen at any stage. It's like if we've, I mean, if we sent the proposal, we're waiting. If we've sent them an sw, we're waiting. It's not a stage in and of itself."
- **shipped_solution:** Added `awaiting_response_from` select attribute (Us / Client / Stalled / N/A) on Engagements, surfaced as a column and Kanban card field — solves the "who has the ball" question without inflating the sales-stage list.
- **where_in_attio:** Records → Engagements → any Engagement → **Awaiting Response From**; visible as column in Sales Pipeline and Relationship View

---

**5. Success stories "doesn't have a place to live" → Success Stories attribute + Relationship View column**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-03-30
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-Architecture-Deep-Dive-273c902b-eae9.md`
- **quote_verbatim:** "I see them go by. I'm like, oh, my God, that's a success story. And it just doesn't have a place to live. And I never remember them."
- **shipped_solution:** Added `success_stories` text attribute on the Engagement object; surfaced on Engagement detail page and exposed as a column on Relationship View so Michelle can scan past wins for a company at a glance.
- **where_in_attio:** Records → Engagements → any Engagement → **Success Stories** field; column on **Relationship View**

---

**6. "Want a story… What's a time I worked on this with a client" → AskAttio over Success Stories + Templates pricing/testimonial library**

- **speaker:** Emily Bohannon
- **meeting_date:** 2026-03-30
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-Architecture-Deep-Dive-273c902b-eae9.md`
- **quote_verbatim:** "Because of when we. When we're creating a program. And like, Michelle's like, I want a story. What's the time that I worked on this with a client? You know, that was a success story. Like, to be able to pull for that purpose too would be great."
- **shipped_solution:** Success Stories attribute is plain-text so AskAttio (which reads notes/fields but not files) can retrieve it. Testimonials Google Sheet will be ingested via `import_testimonials.js` as Notes on Company records (Phase 5 GATE).
- **where_in_attio:** Sidebar → Ask Attio → query example: "Show me success stories from PTC engagements with PE firms"

---

**7. Pre-call meeting prep at the company level → Relationship View + AskAttio at Company level + AI Engagement Summary**

- **speaker:** Emily Bohannon
- **meeting_date:** 2026-03-30
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-Architecture-Deep-Dive-273c902b-eae9.md`
- **quote_verbatim:** "Yeah, I, I mean if I, because like a lot I will often prep a call agenda and so again I like I almost always just go to all work by company because we know we're meeting with like here American securities. We see all the people in a list. I can even do a screenshot of this, you know, with the type, the start all of this kind of stuff. It gives us the full history…"
- **shipped_solution:** Engagement List + Relationship View pinned at the Company record level, with AI Autofill Engagement Summary column. Adam (5/20): "If you were to. Yeah. If you expand it to show all… it's basically a full list of all engagements associated with that company."
- **where_in_attio:** Records → Companies → [Company] → Engagement List widget + Ask Attio button (right rail)

---

**8. Proposal pricing decisions → Pricing Recommendation prompt + Pricing Guides on Templates object**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-05-20
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Attio-Support-8d27f1d9-1480.md`
- **quote_verbatim:** "And Jill built us, like, we've cleaned up our pricing. It's now like we have like a spreadsheet that is tabs or all the different stuff… we're not going to have the pricing tables buried inside of everything in Panda Docs anymore. We're going to work off one spreadsheet and that we could give to Claude or give to Adio or whatever. Like, we're hoping we can get some AI help with pricing now that we have this whole framework for how we're pricing."
- **shipped_solution:** AWC's pricing guide (4 tabs) loaded as markdown on the **Templates** object; **Pricing Recommendation** stored prompt in AskAttio Stored Prompts that references it. Adam's commitment on same call: "I'm going to create a pricing table template for you and then. And then you can ask Addio to reference that."
- **where_in_attio:** Records → Templates → **AWC Pricing Guide**; Ask Attio → Stored Prompts → **Pricing Recommendation**

---

**9. "Who are high values, who are big connectors" → High Value Company checkbox + High-Value role_type**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-05-14
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Attio-Support-51ad3855-1df3.md`
- **quote_verbatim:** "This is like to me, the really fun part of ADEO is to be able to. I just completed a coaching engagement with an amazing coachee. And honestly, like in like a year from now, I'm not even going to be signing me on my mind, but I want to be able to go back and be like, who are my favorite, who are high values, who are big connectors… I want to start prioritizing out of these thousands of people who do I actually really want to spend time with."
- **shipped_solution:** Per 6/4 consolidation: `high_value_company` checkbox on Companies + **High-Value** option on People `role_type` (alongside other roles). Filterable across People grouped-by-role-type view.
- **where_in_attio:** Records → People → grouped view → **High-Value** group; Records → Companies → filter `High Value Company = true`

---

**10. Won-task duplication workflow → Sales Pipeline → Engagement History automatic dual-list membership**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-01-22
- **source_file:** `c:/Users/adam/Attio/Project History Docs/Magical-Teams-x-AWC-Kickoff-5337229b-b631.md`
- **quote_verbatim:** "Each opportunity is a task and then it moves through those stages when it be and it either is dead or it's on hold or it has these or it's one business and then we make a duplicate of that task and then it then a whole nother part of this is like business we've won over the years…"
- **shipped_solution:** Single Engagement record can live in **both** Sales Pipeline (with sales_stage) and Engagement History (with coaching_status). When Emily/Elaine marks an Engagement as Won, it auto-appears in Engagement History as Active/Onboarding — eliminating ClickUp's manual task-duplication step while preserving the Elaine-and-Emily review point. Emily on 5/20: "we would switch the status to one and it will automatically appear in engagement history as active."
- **where_in_attio:** Records → Engagements → [single record]; visible in **Sales Pipeline** and **Engagement History** lists simultaneously

---

**11. Meeting-prep templates → AskAttio Stored Prompts library**

- **speaker:** Michelle Friedman
- **meeting_date:** 2026-03-16 (Folk Follow-Up)
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Folk-Follow-Up-5ebf983b-aee6.md`
- **quote_verbatim:** "Yeah, I mean, they have, I'm looking like a whole bunch of like, already prompts that you can use, you know, like recap a call, meeting prep. Yeah. Run account research. They have a bunch of them. And then you can just do. Make up your own. Where we could have like our pricing."
- **shipped_solution:** AWC's library lives in Attio's native **Stored Prompts** in Ask Attio (per MEMORY: "AWC's AA prompts live in Ask Attio's native Stored Prompts, not as notes; Templates object holds bodies only"). Includes Meeting Prep, Pricing Recommendation, Recap, Relationship Summary.
- **where_in_attio:** Ask Attio → **Stored Prompts** (left rail of the AskAttio panel)

---

**12. ClickUp pipeline terminology preserved → kept stages + SOW Onboarding rename**

- **speaker:** Emily Bohannon
- **meeting_date:** 2026-05-20
- **source_file:** `c:/Users/adam/Attio/Project History Docs/AWC-x-MT-Attio-Support-8d27f1d9-1480.md`
- **quote_verbatim:** "Basically the way it functions in click up is that once the sow has been signed, really it's kind of a way for. Elaine's in charge of the sows and it's a way to communicate to me because I don't get a notification when it's signed. So if I see it's been signed, then it's my cue to set up the list."
- **shipped_solution:** Sales Stage #6 renamed from "Send SOW" → **SOW Onboarding** to match ClickUp's "SOW Signed/Onboarding" terminology and preserve Emily's "cue to set up the list" workflow. Adam on same call: "I would recommend just changing the name of the SOW sales step to sow onboarding like you had it. And I'll do that."
- **where_in_attio:** Lists → Sales Pipeline → Kanban board → column **SOW Onboarding** (stage #6)

---

**Bonus context — April 17 client check-in email (verified from prior conversation):**

> "Thanks for a great call today, I am very excited about how things are progressing!" — AWC team email after the April 17 client review where the 11-stage sales pipeline, 4-stage Engagement History, schema deltas, and Relationship View were greenlit. Demonstrates client satisfaction at the schema-approval gate that preceded the historical migration (4/23).