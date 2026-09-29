---
name: Technical Drafting Desk
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#b22c0b'
  on-secondary: '#ffffff'
  secondary-container: '#ff633e'
  on-secondary-container: '#5f0f00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0700'
  on-secondary-fixed-variant: '#8b1b00'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
  canvas-bg: '#F5F5F3'
  panel-surface: '#FDFDFD'
  border-hairline: '#E6E6E2'
  frame-ink: '#111111'
  accent-burnt: '#D94826'
  severity-fatal: '#D94826'
  severity-smell: '#E69500'
  severity-optimization: '#2E7D32'
  grid-pattern: rgba(17, 17, 17, 0.04)
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.14em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system is rooted in the precision of an architectural drafting desk and the clinical scrutiny of a laboratory terminal. It rejects modern SaaS tropes—such as amorphous soft shadows, pill-shaped buttons, and exaggerated border radii—in favor of structural discipline, high contrast, and mechanical transparency. 

The aesthetic is built around:
- **Architectural Blueprint & Drafting Desk:** Visual cues borrowed from physical schematics, engineering schematics, and technical grid paper. Backgrounds feature subtle drafting grid coordinate textures, while cards present clean, uncompromising right angles with explicit mechanical borders.
- **Terminal & Instrument Utility:** Information density is intentional and uncompromising. Data, diagnostics, code, and status indicators occupy dedicated structural slots with monospaced data clarity.
- **Section Indexing:** Sections are cataloged through tracked, uppercase alphanumeric identifiers (e.g., `01 // ROAST`, `02 // WHAT'S WRONG`, `INPUT // SRC`).
- **Emotional Resonance:** Precise, acerbic, analytical, yet impeccably crafted. The user feels like an engineer subjecting code to a high-voltage bench test.

## Colors

The palette simulates high-grade drafting paper, indelible drawing ink, and strict engineering callout flags:

- **Canvas & Surface:** The canvas sits at `#F5F5F3` (a flat, tactile off-white drafting ground), overlaid with a 16px or 24px faint drafting grid rendered via `#111111` at 4% opacity. Individual panels and working trays lift subtly to `#FDFDFD` (warm instrument white).
- **Ink & Boundaries:** Pure structural black (`#111111`) serves as the framing ink for high-priority outlines, typography, and heavy status borders. Intermediate borders and inner layout dividers use `#E6E6E2` to separate zones without visual noise.
- **Accent Ignition:** `#D94826` (Burnt Orange/Red) delivers tactical focus for critical primary calls to action, keyboard shortcut badges, error states, and terminal warnings.
- **Diagnostic Triage Palette:**
  - **Fatal:** `#D94826` (warm red-orange) for structural bugs, syntax faults, and catastrophic oversights.
  - **Code Smell:** `#E69500` (amber/gold) for anti-patterns, style transgressions, and maintainability debts.
  - **Optimization:** `#2E7D32` (precision green) for algorithmic speedups, resource reclamation, and clean patches.

## Typography

The typographic hierarchy establishes tension between structural display headers and monospace machine readout data:

- **Display & Section Anchors:** **Space Grotesk** is reserved exclusively for primary application mastheads, modal titles, and high-level card titles. Its modernist geometry reinforces technical documentation without sacrificing readability.
- **Operational Infrastructure:** **JetBrains Mono** governs the remaining interface—body copy, issue analyses, line-numbered gutters, inputs, button labels, badge chips, and telemetry strips. 
- **Tracked Technical Labels:** Meta tags, strip dividers, and step indicators must utilize uppercase lettering, medium/bold weight, and deliberate letter-spacing (`letter-spacing: 0.12em` to `0.16em`). Standard syntax: `[INDEX] // [DESCRIPTOR]` (e.g., `01 // ROAST`, `AUDIT // REPORT`).

## Layout & Spacing

Layouts follow an intentional "workstation" chassis designed for density and operational speed:

- **Workstation Canvas:** Centered primary viewport spanning a maximum width of `1360px`, framed by a distinct 2px solid `#111111` perimeter.
- **Grid Architecture:** 
  - **Top Bar:** Fixed-height utility ribbon (48px to 56px) housing brand identification, telemetry versions, language dropdown, error-switch flags, and primary trigger buttons.
  - **Workspace Split (Desktop):** Asymmetric split consisting of an input editor pane (55% width) and an audit/report pane (45% width), separated by a continuous vertical 2px boundary.
  - **Status Footer:** 32px to 36px rigid footing strip displaying live model telemetry, engine status, and session coordinates.
- **Adaptive Reflow:**
  - **Desktop (>= 1024px):** Dual-column side-by-side workstation with concurrent live editor and roast readouts.
  - **Tablet & Mobile (< 1024px):** Workstation chassis collapses into a single-column stacked hierarchy (Top Controls → Editor → Run CTA → Roast Report Output → Status Footer). Gutters and margins downscale to `0.75rem` (`12px`).

## Elevation & Depth

This system intentionally departs from diffused ambient blurs and multi-stop gradient shadows. Depth is achieved exclusively through **tactile structural planes and hard-edge isometric projection**:

- **Hard Surface Offset:** Elevated panels and focus states employ crisp, unblurred drop shadows using pure ink: `2px 2px 0px #111111` or `4px 4px 0px #111111`. No blur radius is permitted.
- **Tonal Inset Wells:** Depressed areas (code editor textareas, terminal execution wells, status footers) rely on `#F5F5F3` backgrounds framed by 1px–2px `#111111` or `#E6E6E2` borders, mimicking carved instrument slots.
- **Border Hierarchy:**
  - **Primary Chassis & Dividers:** `2px solid #111111`.
  - **Component Panels & Internal Cards:** `1px solid #111111`.
  - **Subordinate Partitions & Inactive Grids:** `1px solid #E6E6E2`.

## Shapes

The geometric rule is absolute: **all radius values are `0px`**. 

Every perimeter, button, input box, severity pill, status strip, dropdown, and floating tooltip terminates in razor-sharp right angles. This reinforces the blueprint, punch-card, and technical schematic nature of the interface. Geometric variation is delivered strictly through diagonal corner chamfers (optional 45-degree corner clips on special accent tags) or segmented dashed line treatments, never via radial rounding.

## Components

### Buttons
- **Primary ("ROAST MY CODE"):** Background `#D94826`, text `#FDFDFD`, 2px solid `#111111` border. Hard shadow `2px 2px 0px #111111`. On hover, translate `-1px, -1px` with shadow `3px 3px 0px #111111`. On active/pressed, translate `1px, 1px` with shadow `0px 0px 0px`. Monospace bold uppercase type with trailing keybinding indicator badge (`[Ctrl+Enter]`) framed in a 1px solid inverted border.
- **Secondary / Ghost ("Clear", "Sample"):** Background transparent or `#FDFDFD`, text `#111111`, 1px solid `#111111` border. Hover changes background to `#F5F5F3`.
- **Destructive / Retry:** Background `#FDFDFD`, text `#D94826`, 1px solid `#D94826` border. Hover inverts to background `#D94826` with text `#FDFDFD`.

### Header & Section Strips
- Structural headers sit inside 32px height strips with a 1px bottom border.
- Left-aligned tracked uppercase index: `01 // ROAST` or `INPUT // SRC — Your Code`.
- Right-aligned metadata chips showing line numbers, file extension, and action links.

### Diagnostic & Severity Badges
- Strict rectangular tags (`0px` border-radius) with 1px solid borders:
  - **Fatal:** `#D94826` text, 1px solid `#D94826` border, subtle 8% tint background.
  - **Code Smell:** `#E69500` text, 1px solid `#E69500` border, subtle 8% tint background.
  - **Optimization:** `#2E7D32` text, 1px solid `#2E7D32` border, subtle 8% tint background.
- Accompanied by black index square indicators (e.g., solid `#111111` square with white `#FDFDFD` numeric text).

### Code Editor & Snippet Blocks
- Background `#FDFDFD` with a dedicated gutter lane (`#F5F5F3`) separated by a vertical 1px `#E6E6E2` rule.
- Gutter displays right-aligned muted line numbers in `JetBrains Mono`.
- Audit result snippet blocks feature a 3px thick left accent stripe tinted according to severity color, with `✕` (problem line) and `✓` (suggested resolution line) glyph markers.

### Input Fields & Select Controls
- Rectangular surfaces with 1px or 2px `#111111` borders.
- Monospaced values with uppercase tracked placeholder text. Focus ring replaced with an explicit `2px solid #111111` border and an offset hard shadow of `2px 2px 0px #111111`.

### Empty, Loading & Error Display States
- Centered layout within a dedicated report bounding box.
- Standard 64x64px square icon container with a 1px solid `#111111` perimeter:
  - **Empty:** `{}` ASCII braces centered in monochrome ink.
  - **Loading:** Segmented mechanical spinning glyph (`/`, `-`, `\`, `|`) in monospaced cadence with a live cycle pulse.
  - **Error:** Accent-colored `!` with an adjacent "RETRY ANALYSIS" mechanical button.