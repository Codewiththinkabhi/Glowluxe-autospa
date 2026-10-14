# GlowLuxe Auto Spa — Single Source of Truth (`Glowluxe-design.md`)

## 1. Scope & Anti-SaaS Execution Rules
- **Editorial Automotive Layout (NO SaaS Cards):** Do NOT wrap every paragraph, feature, or service in soft floating card containers with rounded borders. Use full-bleed background section blocks (`#050505` and `#0B0B0B`) and flush image-to-edge layouts.
- **Static Output Only:** Do NOT generate HTML5 video tags, video players, or animated background video overlays.
- **Hero Media Handling:** Render the hero background area as a static dark container (`#050505`) with a static placeholder image element (`<img src="assets/images/hero-fallback.webp">`).
- **Clean Code Structure:** Output semantically clean HTML/CSS using BEM naming conventions (`.hero`, `.hero__content`, `.services`, `.services__grid`) suited for Flexbox and CSS Grid layout blocks.

---

## 2. WordPress 1:1 Migration Rules
- **Top-Level Wrapper Standard:** Every main section MUST use `<section class="c-section">` (translates directly to WordPress Gutenberg / Elementor full-width section blocks).
- **Direct Layout Container Standard:** Internal grid and flex layouts MUST use `<div class="c-container">`.
- **FORBIDDEN:** Do NOT create nested inner section wrappers or unnecessary legacy div depth.

---

## 3. Brand Color Tokens & Variables

```css
:root {
  /* Brand Accents */
  --glow-brand-red: #F20D24;        /* Primary CTA & Active Highlights */
  --glow-brand-red-bright: #FF1428; /* Hover States */
  --glow-brand-red-dark: #B50918;   /* Pressed / Active States */

  /* Dark Surfaces */
  --glow-surface-base: #050505;      /* Main