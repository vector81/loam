# Quick Start

## Deploy
```bash
cd E:\loam && vercel --prod --yes
```
Production: https://loam-alpha.vercel.app

## Build check
```bash
cd E:\loam && npm run build
```

## Add a new page
1. Create `src/app/[route]/page.tsx`
2. Add `"use client"` if using hooks/motion
3. Use `AnimatedSection`, `TextReveal`, `MagneticButton` from `@/components/ui/`
4. Follow earth-tone color system from globals.css

## Key imports
```ts
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { Counter } from "@/components/ui/counter"
import { ParallaxSection } from "@/components/ui/parallax-section"
```

## Design colors (Tailwind classes)
`bg-earth-50` `bg-forest` `bg-forest-deep` `bg-terracotta` `bg-olive`
`text-cream` `text-earth-900` `text-forest`

## CSS utility classes
`.grain-overlay` `.blob-shape` `.blob-animate` `.topo-lines` `.earth-card` `.glass-nav`
