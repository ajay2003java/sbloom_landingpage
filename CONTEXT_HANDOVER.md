# sBLOOM - Project Context & Handover Document

## 1. Project Overview

sBLOOM is an industry-focused **Revenue & Lead Generation Partner** for expertise-led businesses in Healthcare, Education, and Consulting / Professional Services. Unlike generic digital agencies selling vanity metrics (likes, impressions, basic posts), sBLOOM's core value proposition is:
> **"We help you get more revenue."**

The platform operates on a **Dual-Engine Model (In-Person + Digital)** delivering real paying customers through 4 modular services:

### Core 4 Modular Revenue Services:
1. **Field Sales Marketing (FSM)** *(In-Person · Internal Team Support)*: Training, pitch coaching, objection handling, and performance commission structures to empower the client's internal sales/field reps.
2. **Advisor & Affiliate Network** *(In-Person · External Referral System)*: Curated network of trusted doctors, teachers, executives, and community leaders who refer warm clients for a commission without needing technical product knowledge.
3. **Core Digital Presence** *(Digital · Internal Conversion Assets)*: High-converting website, Google Business Profile (GBP) Top 3 local maps dominance, and active social media proof.
4. **Influencer Partnerships** *(Digital · External Creator Amplification)*: Vetted local and domain creators sharing authentic recommendations to drive targeted inbound inquiries.

*Clients have full modular freedom: they can choose any single service or combine all four into a unified revenue engine.*

---

## 2. User Flow & Journeys

The platform routes users through two primary funnels starting from the Homepage:

### Journey A: The Client Route (Revenue Growth)
Targeting clinics, hospitals, schools, academies, and consulting firms looking to generate qualified paying clients.
1. **Home / Hero:** Clear value proposition: *"We help you get more revenue."*
2. **Modular Services Explorer:** Interactive 4-service switcher explaining how sBLOOM is helpful in each service with revenue impact.
3. **FSM vs. Advisor Comparison:** Visual breakdown of on-ground internal sales enablement vs. external community referrals.
4. **Custom Inquiry:** Direct selection of needed services into the lead capture form (`/contact?service=[id]`).

### Journey B: The Partner / Advisor Route (Commission Network)
Targeting trusted professionals, educators, and community connectors who want to monetize their network through warm introductions.
1. **Home / Gateway:** User selects *"Become an Advisor"* or *"Join as an Advisor & Earn Commission"*.
2. **Advisor Network Portal (`/creative-workspace`):** Transparent explanation of the commission model, zero technical selling burden, and lead submission workflow.
3. **Registration:** Direct onboarding form for referral partners.

---

## 3. Codebase Structure & Technology Stack

**Tech Stack:** React (TypeScript) + Vite + CSS (Vanilla/Custom Design System)
**Key Libraries:** React Router (Routing), Framer Motion (Animations), Lucide React / React Icons (Icons)

The architecture is highly component-driven to avoid duplicating pages for different industries and entities. Data configurations power the dynamic rendering of pages.

**Directory Overview:**
- `/src/pages/`: Contains all main route components.
  - `HomePage.tsx`: The main gateway.
  - `IndustryLandingPage.tsx`: Dynamic industry routing.
  - `EntitySelectionPage.tsx`, `TailoredStrategyPage.tsx`: Dynamic entity-based content routing.
  - `PartnerWorkspacePage.tsx`, `PartnerApplyPage.tsx`: The freelancer workspace funnel (also mapped to `/partner-workspace`).
  - `AboutPage.tsx`, `ServicesPage.tsx`, `ContactPage.tsx`: Standard informational pages.
- `/src/components/`: Reusable UI components (Hero Sections, Cards, Navigation, Footer). Includes global features like `ConsultationModal`.
- `/src/data/`: Centralized configuration objects that power dynamic pages (e.g., industry text, capabilities).
- `/src/index.css`: Contains the global design tokens, typography (serif/sans-serif mix), color variables (off-white, navy, terracotta, lavender, muted blue), and responsive grid setup.

---

## 4. Visual Design & Aesthetics Rules

- **Overall Mood:** Premium editorial, warm, intelligent, human.
- **Base Color:** Warm off-white/ivory.
- **Primary Text Color:** Deep navy/ink.
- **Accents:** Restrained coral/terracotta, soft lavender, and muted blue (used for interaction, not decoration).
- **Typography:** Elegant high-contrast serif for major headlines; clean modern sans-serif for body/UI labels.
- **Avoid:** Neon colors, generic SaaS dashboard styling, glassmorphism, or excessive animations.
- **Interactions:** Subtle hover lifts, image zoom, gentle section reveals (respecting `prefers-reduced-motion`).

---

## 5. Maintenance & Update SOP

If any changes are made to the codebase, follow these procedures to maintain consistency:

### 1. Adding a New Industry
- Do not create a new page component.
- Open the relevant configuration file in `/src/data/` (e.g., `industries.ts`).
- Add the new industry key with its associated text, capabilities, and image references. The `IndustryLandingPage` and `TailoredStrategyPage` will automatically render it.

### 2. Updating Services or Capabilities
- Update the centralized data objects. Do not hardcode new text into components directly. Keep the `BUILD · CREATE · PROMOTE` framework intact.

### 3. Styling Changes
- All new styling must adhere to the design system in `index.css`.
- Use existing CSS variables for colors, typography, and spacing.
- Ensure desktop (12-column grid), tablet (6-column grid), and mobile (single column) breakpoints are respected.

### 4. Updating this Context Document
- **MANDATORY:** If architectural changes are made, new routes are added, or core dependencies change, this `CONTEXT_HANDOVER.md` file MUST be updated in the same pull request/commit to reflect the current state of truth.

---

## 6. Available Context & Reference Documents
- **`sBLOOM_Antigravity_Full_Implementation_Plan.md`**: Found in the project root. This contains the original 15-step prompt breakdown, product direction, and exact content matrix used to build the site. It is the ultimate source of truth for the project's original intent.
- **Development Server:** Run `npm run dev` to start the local Vite server.
