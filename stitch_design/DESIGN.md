---
name: Terra Pure
colors:
  surface: '#f3faff'
  surface-dim: '#c7dde9'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#dbf1fe'
  surface-container-high: '#d5ecf8'
  surface-container-highest: '#cfe6f2'
  on-surface: '#071e27'
  on-surface-variant: '#40493d'
  inverse-surface: '#1e333c'
  inverse-on-surface: '#dff4ff'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#9c4400'
  on-secondary: '#ffffff'
  secondary-container: '#fd7613'
  on-secondary-container: '#5b2500'
  tertiary: '#545748'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6f5f'
  on-tertiary-container: '#f0f2df'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb68f'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#773200'
  tertiary-fixed: '#e2e4d1'
  tertiary-fixed-dim: '#c6c8b5'
  on-tertiary-fixed: '#1a1d11'
  on-tertiary-fixed-variant: '#45483a'
  background: '#f3faff'
  on-background: '#071e27'
  surface-variant: '#cfe6f2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system translates the agricultural roots of the brand into a digital-first identity that balances professional SaaS-like efficiency with the warmth of organic farming. The brand personality is grounded, transparent, and restorative.

The design style is **Corporate Modern with Organic Influences**. It utilizes high-quality photography of soil and produce, combined with a structured layout that communicates reliability and institutional trust. The visual language moves away from the "busy" nature of traditional packaging towards a clean, airy, and high-end aesthetic that appeals to health-conscious professionals and eco-conscious families.

## Colors

The palette is derived directly from the fertile landscape of the Belagavi region. 

- **Primary (Leaf Green):** A deep, vibrant green used for primary actions, branding, and success states. It represents growth and vitality.
- **Secondary (Harvest Orange):** A warm, energetic orange used for accents, notifications, and secondary call-to-actions, reminiscent of ripe fruit and the sun.
- **Tertiary (Seedling Cream):** A soft, off-white used for large background surfaces to reduce eye strain and provide a more "natural" feel than pure white.
- **Neutral (Earth Grey):** A sophisticated charcoal used for typography and UI borders, ensuring high legibility and a grounded feel.

## Typography

The typography system prioritizes clarity and a contemporary feel. 

**Manrope** is used for headlines. Its geometric yet friendly proportions provide a modern, professional look that builds trust quickly. 

**Work Sans** is used for all body copy and UI labels. Its slightly wider apertures ensure excellent readability across various screen sizes, especially for nutritional information and product descriptions. 

Letter spacing is tightened for large display headers to create a "locked-in" editorial look, while UI labels use increased tracking for better scanability.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

The spacing rhythm is based on an 8px baseline grid. Large "breathing rooms" (48px+) are encouraged between major content sections to evoke the openness of farmland. 

On mobile, margins are reduced to 16px to maximize real estate for product imagery, while gutters remain at 16px to ensure a compact but legible information density. Desktop layouts should use centered containers with a maximum width of 1280px to maintain professional readability.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** rather than heavy shadows. This keeps the interface feeling "flat" and modern, mirroring the cleanliness of organic produce.

- **Level 0 (Base):** The Tertiary Cream background.
- **Level 1 (Cards/Surfaces):** Pure white surfaces with a subtle, 1px Earth Grey border at 10% opacity.
- **Level 2 (Interactive):** Elements that require focus (like active modals or dropdowns) use a very soft, highly-diffused shadow (#2E7D32 at 8% opacity) to provide a "lift" that feels light and airy.

Avoid heavy black shadows; instead, use tinted shadows that pull from the primary green palette to maintain a cohesive organic mood.

## Shapes

The shape language is **Rounded**, reflecting the soft curves found in nature (leaves, hills, and fruits). 

A standard corner radius of **0.5rem (8px)** is applied to buttons and input fields. Larger containers like product cards and featured banners should use **1rem (16px)** to emphasize their "contained" and safe nature. 

Avoid sharp 0px corners, as they appear too aggressive and industrial for a health-focused organic brand. Icons should also follow this rounded philosophy, using a consistent 2px stroke weight with rounded caps.

## Components

### Buttons
- **Primary:** Solid Leaf Green with White text. High-contrast and easily identifiable.
- **Secondary:** Leaf Green outline with a subtle cream hover state.
- **Tertiary:** Text-only with a secondary orange underline on hover.

### Cards
Cards should be the primary vehicle for product listing. Use the Seedling Cream background for the card body with a white header area for the product image. Keep information hierarchy strict: Image > Price > Title > Add to Cart.

### Input Fields
Inputs use the Earth Grey for borders (20% opacity) and transition to a 2px Leaf Green border on focus. Labels should always be visible above the field using the `label-md` style.

### Chips & Tags
Used for dietary labels (e.g., "Gluten-Free", "100% Organic"). These should use the Secondary Orange at a low opacity for the background with dark orange text to provide a pop of color without overwhelming the primary branding.

### Lists
Lists in this design system should use "organic" bullet points—small, stylized leaf icons or simple green dots—to reinforce the brand identity even in text-heavy areas.