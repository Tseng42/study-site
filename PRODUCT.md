# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (no build tooling, no framework) — deployed as plain files to GitHub Pages. Chosen deliberately over Vite/React for zero-maintenance handoff and drag-and-drop deploy simplicity.

## Users

Primary: Taiwan high school students preparing for 學測 (GSAT), starting with the requester's younger brother, studying independently across all 5 core subjects. Browses primarily on desktop/laptop, must also work well on mobile.

Secondary (confirmed near-term possibility): the site may be shared with the brother's classmates or other 學測 test-takers, so it should read as a credible, welcoming study product rather than a one-off private tool.

## Product Purpose

A full-subject 學測 review site: organized notes per subject/unit, unit quizzes (single-choice, 4 options), an automatically-compiled wrong-question book ("錯題本") for spaced review, and per-unit/per-subject progress tracking. No backend — a pure static site; all user data (quiz answers, progress, wrong-book state) persists client-side via localStorage. Success is a student being able to browse full coverage of all 5 subjects, review notes, drill quizzes, have missed questions surface automatically, and see visible progress over months of prep.

## Positioning

Distinguishes itself from generic flashcard/quiz apps (Quizlet-style) or cram-school portals by being purpose-built to Taiwan's 學測 curriculum structure (5 core subjects, organized by semester or domain) and tightly coupling three things in one lightweight tool: structured notes, quizzes, and an automatically-compiled wrong-question book — with zero account/login friction (open and study immediately, data stays on-device).

## Operating Context

- Studying at home, primarily desktop/laptop, secondarily mobile, across the run-up to 學測.
- Repeated, session-based use over weeks/months: read notes, take a unit quiz, revisit 錯題本 to redrill missed questions, check off completed units.
- No account system — each browser/device holds its own progress independently; no cross-device sync.

## Capabilities and Constraints

- Pure static HTML/CSS/JS (ES Modules, no build step), deployed to GitHub Pages.
- Content model: 5 subjects × units (111 units total across 國文/英文/數學/自然/社會), each unit has notes (bullets/tables) and an optional single-choice quiz with explanations.
- All persistence is client-side localStorage (progress, quiz history, wrong-book state) — no server, no accounts, no sync.
- Content is being filled in incrementally: 10 units currently have full notes+quiz content; ~101 are placeholder ("製作中") stubs. This is an ongoing, real state the design must handle gracefully, not an edge case to hide.
- Undecided: whether the possible future multi-user sharing scenario will ever need accounts or sync — explicitly out of scope for now.

## Brand Commitments

Working name so far: 「學測複習站」. No existing logo or fixed visual identity — the site has been intentionally plain/unstyled up to now by the requester's explicit choice ("先求功能完整可用,視覺風格簡單樸素即可"), and they are now ready to move into an intentional visual design phase.

## Evidence on Hand

- 10 real, subject-accurate example units already written (國文×2, 英文×2, 數學×2, 自然×2, 社會×2) with real notes (bullet points + tables) and real quiz questions with explanations — usable as authentic content for design mockups instead of lorem ipsum.
- ~101 additional unit titles already defined per subject (國文/英文/數學 grouped by semester 高一上–高三下; 自然/社會 grouped by domain) — real information architecture to design against, not a hypothetical one.

## Product Principles

- Zero-friction study tool: open and start reviewing immediately, no login, no setup.
- Full curriculum coverage is the organizing backbone — every subject/unit has a visible place, even before its content is written.
- Mistakes drive review: wrong answers surface automatically into 錯題本 rather than requiring manual tracking.
- Visible progress as motivation: completion and quiz history should read at a glance to sustain months of self-study.
- Built to scale from one user to a shared resource without re-architecting, even though accounts/sync stay out of scope for now.

## Accessibility & Inclusion

No specific requirement established beyond mobile-responsive usability; no additional accessibility need confirmed at this time.
