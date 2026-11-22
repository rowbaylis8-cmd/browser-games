# PourRight — Developer Brief

**One-line summary:** PourRight is a full barista simulation, bean to cup, played in the browser and built to be found through web search.

> **How to read this brief:** Sections marked **Client decision** are the client's fixed spec. Anything marked **Suggested** is an implementation idea for the developer to confirm or change, not a client requirement. Open questions are collected at the end.

## 1. Overview and concept

**Client decision**

- **Name:** PourRight.
- **Concept:** A full barista simulation playable in the browser, bean to cup.
- **What the player does:** picks a bean, grinds it, steams milk, and does pour-overs.
- **Format:** A web app, not an app store listing.

## 2. Core gameplay loop

**Suggested** (derived from the client's concept; confirm with the client):

1. **Choose** — pick a bean (from the origins unlocked so far).
2. **Prepare** — grind the bean and set up the drink for the current level.
3. **Brew** — pull the shot, texture the milk, or run the pour-over, depending on the level.
4. **Serve** — present the drink and receive a score.
5. **Progress** — a good score unlocks the next level or a new bean origin; replay to improve.

## 3. Levels (launch set)

The client has specified three launch levels. Goals and player actions below come from the spec; scoring details and unlock conditions are **Suggested**.

### Level 1 — Espresso

| | |
|---|---|
| **Goal (client)** | Espresso only. Dial in the grind, pull the shot, serve. |
| **Player actions (client)** | Adjust grind; pull the shot; serve. |
| **Scoring inputs (suggested)** | Grind setting versus a target range; shot time and/or yield; optional penalty for over- or under-extraction. |
| **Unlock condition (suggested)** | Available from the start. |

### Level 2 — Latte (milk texturing)

| | |
|---|---|
| **Goal (client)** | Adds milk texturing for a latte. |
| **Player actions (client)** | Everything in Level 1, plus steaming/texturing milk. |
| **Scoring inputs (suggested)** | Level 1 espresso score, plus milk temperature and texture (foam amount) against target ranges. |
| **Unlock condition (suggested)** | Reach a minimum score on Level 1. |

### Level 3 — Pour-over

| | |
|---|---|
| **Goal (client)** | Pour-over, where water temperature and bloom time decide the score. |
| **Player actions (client)** | Set water temperature; bloom; complete the pour. |
| **Scoring inputs (client)** | Water temperature and bloom time. |
| **Scoring detail (suggested)** | Score each input by distance from a target value or range, with targets possibly varying by bean origin. |
| **Unlock condition (suggested)** | Reach a minimum score on Level 2. |

## 4. Bean origins

**Client decision:** four unlockable bean origins, by country, with the flavour notes below. Gameplay effects and unlock rules are **Suggested**.

| Origin | Flavour profile (client) | Gameplay effect (suggested) | Unlock (suggested) |
|---|---|---|---|
| Ethiopia | Floral notes | Rewards lighter, more precise extraction; narrower target window | Earned by progression (e.g. clearing a level) |
| Colombia | Balanced body | Forgiving, wide target window; good starter bean | Possibly the default/first bean (to confirm, as all four are described as unlockable) |
| Jamaica | Blue Mountain rarity | Rare/premium: harder to unlock, higher score potential | Late unlock (e.g. high score on Level 3) |
| Kenya | Bright and juicy single-origin | Rewards accurate pour-over temperature and bloom | Earned by progression |

## 5. Companion kettle timer web app

**Client decision:** A companion web app that times the player's real kettle at home.

**Suggested implementation notes:**

- Build as a separate, simple page or route (e.g. `/kettle`) sharing the same domain and branding.
- Core function: a start/stop timer the player runs alongside their real kettle, with optional bloom and pour-stage prompts that echo Level 3.
- Keep it usable on a phone in the kitchen: large controls, screen kept awake while timing (where the browser supports it), optional sound cue.
- No hardware connection is assumed; "times the kettle" is interpreted as a manual timer. Confirm with the client (see Open questions).

## 6. Branding

**Client decision**

- **Homepage tagline:** "Every cup starts with a choice."

**Suggested:** Show the tagline prominently on the homepage with a single clear call to action (e.g. "Start pouring") that drops the player straight into Level 1.

## 7. Positioning and distribution

**Client decision**

- PourRight is a **web app meant to be found through web search**, not an app store listing.

**Suggested implementation notes:**

- Treat search discoverability as a core requirement: server-rendered or static HTML with real text content, descriptive page titles and meta descriptions, and clean, readable URLs.
- Consider indexable supporting pages (e.g. per level, per bean origin, the kettle timer) so each can rank for relevant searches.
- Add social sharing metadata (Open Graph) and a sitemap.
- Optionally make it installable as a PWA, without any app store submission.

## 8. Build approach and MVP scope

**Client decision**

- **Solo-friendly build.** Start with **one core mechanic and one screen.**

**Suggested MVP:** Level 1 espresso (dial in the grind, pull the shot, serve) on a single screen, with a score at the end.

**Suggested phased roadmap:**

| Phase | Scope |
|---|---|
| 1 | Level 1: espresso, one screen, one core mechanic (grind + shot + serve) |
| 2 | Level 2: milk texturing for a latte |
| 3 | Level 3: pour-over scored on water temperature and bloom time |
| 4 | Four unlockable bean origins: Ethiopia, Colombia, Jamaica, Kenya |
| 5 | Companion kettle timer web app |

Homepage with the tagline and basic search-engine setup should ship alongside Phase 1.

## 9. Suggested tech notes

All points in this section are **Suggested**.

- **Stack:** Plain HTML, CSS and JavaScript (Canvas or DOM-based) is enough for the MVP. A lightweight framework (e.g. Svelte, Preact or Vue) is reasonable if state grows across levels.
- **Rendering for search:** Use a static or pre-rendered homepage and content pages so search engines see real content; load the game itself after.
- **Performance:** Keep initial load small and fast (compressed assets, lazy-loaded game code and audio) for both players and search ranking.
- **Responsive:** Support desktop and mobile; design controls for touch and mouse from the start.
- **Progress saving:** Store unlocks and scores in browser local storage for the MVP; no accounts needed initially.
- **Hosting:** Any static host with HTTPS and a CDN is sufficient for the MVP.
- **Accessibility:** Keyboard controls, readable contrast, and no information conveyed by colour alone.

## 10. Open questions for the client

1. **Scoring:** What does a "good" shot, latte and pour-over look like? Should scoring be realistic (based on real barista ranges) or simplified and arcade-like?
2. **Unlocks:** How should levels and bean origins unlock (by score, by completion, or something else)? Is any origin available from the start?
3. **Bean effects:** Should origins change gameplay (difficulty, target ranges) or be flavour and cosmetic only?
4. **Grinding and bean selection:** The concept includes picking and grinding a bean; should bean picking appear in Level 1, or only once origins unlock?
5. **Kettle timer:** Is the companion app a manual timer, or is any connection to a real (smart) kettle expected?
6. **Visual style and audio:** Is there a preferred art style, colour palette, logo or sound direction?
7. **Platforms:** Is mobile play a priority at launch, or desktop first?
8. **Accounts and monetization:** Are player accounts, leaderboards, ads or payments planned at any stage?
9. **Domain and analytics:** Is a domain already chosen, and which analytics or search tools should be set up?
10. **Language:** English only at launch, or other languages planned?
