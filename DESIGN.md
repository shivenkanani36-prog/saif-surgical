# Design Brief — Saif Surgical & Scientific Equipment

**Purpose:** Professional medical equipment supplier website for Anand, Gujarat. Builds local trust, drives WhatsApp leads, and conveys clinical expertise.

**Tone:** Professional, refined, trustworthy. Medical aesthetic prioritizes clarity, cleanliness, and confidence. No playfulness; precision and reliability.

**Differentiation:** Combines medical authority (navy + blue primary) with approachable warmth (green accents, rounded corners, clean spacing). Structural zones deliberately surface-treated for hierarchy. Not generic.

---

## Palette (OKLCH — AA+ Contrast)

| Token | OKLCH Value | Hex Equiv. | Usage |
| --- | --- | --- | --- |
| Primary (Blue) | `0.57 0.16 258` | `#0A74DA` | Buttons, links, accents, trust bar |
| Secondary (Navy) | `0.20 0.06 258` | `#082B45` | Headings, footer bg, dark sections |
| Accent (Green) | `0.67 0.17 138` | `#2FB66D` | WhatsApp, success, health emphasis |
| Muted (Light Gray) | `0.97 0.01 258` | `#F4F7FA` | Section backgrounds, neutral zones |
| Neutral (Text) | `0.11 0.01 258` | `#1A2A3A` | Body text, foreground |
| Border | `0.92 0.002 0` | `#E2E8F0` | Card borders, dividers |

---

## Typography

| Tier | Font | Usage | Scale |
| --- | --- | --- | --- |
| Display | System sans (Segoe UI, Roboto) | H1–H6, nav, hero | `clamp(28px, 5vw, 60px)` |
| Body | System sans (Segoe UI, Roboto) | Paragraphs, metadata | `14px–16px` |
| Mono | SF Mono / Monaco | Code, technical | `12px–13px` |

**Line height:** `1.6` body, `1.25` headings. **Weight hierarchy:** 400 body, 600 nav, 700 headings, 800 hero.

---

## Structural Zones

| Zone | Background | Border | Depth | Purpose |
| --- | --- | --- | --- | --- |
| Header | White | Bottom shadow | Elevated | Navigation, logo, CTA |
| Hero | Navy overlay `0.20 0.06 258 / 0.7` on image | None | Full viewport | Hero content, badge, CTAs |
| Trust bar | Primary blue `0.57 0.16 258` | None | Flat | Social proof, testimonials |
| Content section (alt.) | Muted bg `0.97 0.01 258` | None | Flat | Product cards, expertise |
| Cards | White `1 0 0` | Subtle `0 2px 16px rgba(10,116,218,0.08)` | Lifted | Info cards, product tiles |
| CTA section | Navy `0.20 0.06 258` | None | Flat | Call-to-action, urgency |
| Footer | Navy `0.20 0.06 258` | Top divider | Grounded | Links, legal, brand |

---

## Shape & Spacing

| Element | Radius | Spacing | Note |
| --- | --- | --- | --- |
| Cards | `16px` | `24px` padding | Modern, approachable |
| Buttons | `8px` | `10–14px` padding | Professional, actionable |
| Buttons (pill) | `999px` | `20px` padding | CTA emphasis |
| Section padding | — | `80px` vertical | Breathing room, mobile `48px` |
| Gap (grid) | — | `24px` | Consistent rhythm |

---

## Elevation & Shadows

| Tier | Shadow | Usage |
| --- | --- | --- |
| Subtle | `0 1px 8px rgba(0,0,0,0.08)` | Header, inactive |
| Card | `0 2px 16px rgba(10,116,218,0.08)` | Cards at rest |
| Card hover | `0 8px 32px rgba(10,116,218,0.18)` | Cards on hover, lift `translateY(-4px)` |
| Focus | `0 0 0 3px rgba(10,116,218,0.12)` | Form inputs |

---

## Component Patterns

**Buttons:** `ss-btn` base + modifier (`.ss-btn-blue`, `.ss-btn-green`, `.ss-btn-outline-white`). Hover: opacity `0.92`, `translateY(-1px)`.

**Cards:** `.ss-card` with shadow + rounded corners. Hover: lift + shadow intensify. Image cards scale `1.05` on hover.

**Forms:** Rounded `8px` inputs, `13px` labels, navy text. Focus state: blue border + blue ring (`rgba(10,116,218,0.12)`).

**Hero badge:** Small green pill with uppercase text, 8% opacity background.

**Navigation:** Fixed header, flex layout, active link color blue. Mobile: hamburger toggle, flex column mobile menu.

---

## Motion & Interaction

| Element | Duration | Easing | Effect |
| --- | --- | --- | --- |
| Button hover | `0.2s` | ease-out | Opacity + lift |
| Card hover | `0.25s` | ease-out | Scale + shadow |
| Image zoom | `0.3s` | ease-out | `scale(1.05)` |
| Link underline | `0.2s` | ease-out | Color change |
| Form focus | `0.2s` | ease-out | Border + ring |

---

## Constraints

- No raw hex literals in components; all colors via CSS tokens (`oklch(var(--primary))`, etc.).
- No arbitrary color classes; use semantic tokens exclusively.
- Responsive: mobile-first, `sm: 600px`, `md: 900px` breakpoints.
- Forms: `13px` labels, `14px` inputs, `8px` radius, `10px` padding.
- Images: lazy loading, `max-width: 100%`, `object-fit: cover`.

---

## Signature Detail

**Trust indicator system:** Blue trust bar, green success accents, navy authority footers. Subtle blue shadow on cards creates visual hierarchy without drama. Hero badge (green pill) signals promotional content. Section alternation (white/gray) maintains visual rhythm without jarring color shifts.

---

**Output Files:** `src/frontend/src/index.css` (OKLCH tokens + Saif Surgical CSS), `src/frontend/tailwind.config.js` (theme overrides), this brief.
