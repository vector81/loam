# Loam — Claude Context

## Stack
Next.js 16 (App Router) · TypeScript · Tailwind v4 · motion/react · lucide-react

## Key Paths
```
src/app/                  # Pages (page.tsx per route)
src/app/globals.css       # Design tokens via @theme inline
src/components/navbar.tsx
src/components/footer.tsx
src/components/ui/        # Reusable animated components
public/favicon.svg
.claude/launch.json       # Preview server config
```

## Pages
`/` `/services` `/work` `/about` `/contact`

## UI Components (src/components/ui/)
| File | Purpose |
|------|---------|
| animated-section.tsx | Scroll-triggered reveal (up/left/right/scale) |
| counter.tsx | Animated number on scroll |
| cursor-glow.tsx | Mouse-follow radial glow (desktop only) |
| magnetic-button.tsx | Cursor-follow hover physics |
| parallax-section.tsx | useScroll Y parallax wrapper |
| text-reveal.tsx | Word-by-word clip reveal |

## Design Tokens (globals.css @theme inline)
- Colors: `earth-50/100/200/300/900/950`, `forest`, `forest-light/dark/deep`, `terracotta`, `olive`, `sand`, `cream`
- Fonts: `--font-heading` (Lora), `--font-body` (Raleway)
- CSS classes: `.grain-overlay` `.blob-shape` `.blob-animate` `.topo-lines` `.earth-card` `.glass-nav` `.leaf-divider`

## Conventions
- All animated/interactive components: `"use client"`
- Imports from `"motion/react"` (not framer-motion)
- Tailwind v4: no `tailwind.config.ts`, tokens live in CSS `@theme inline` block
- Icons from `lucide-react`
- Deploy: `vercel --prod --yes` from `E:\loam`
- Production URL: https://loam-alpha.vercel.app

## Context docs (load on demand)
- `.claude/COMMON_MISTAKES.md` — critical gotchas
- `.claude/QUICK_START.md` — commands & imports
- `.claude/ARCHITECTURE_MAP.md` — file map
- `docs/QUICK_REFERENCE.md` — color tokens, component props
