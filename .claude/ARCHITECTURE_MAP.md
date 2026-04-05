# Architecture Map

## Entry Points
- `src/app/layout.tsx` — root layout, fonts, Navbar, Footer, grain overlay
- `src/app/page.tsx` — homepage (Hero→Stats→Services→Work→Philosophy→Testimonials→CTA)
- `src/app/globals.css` — all design tokens + utility classes

## Route Pages
- `src/app/services/page.tsx` — 6 service cards with deliverable lists
- `src/app/work/page.tsx` — 3 case studies with metrics
- `src/app/about/page.tsx` — story, values, team
- `src/app/contact/page.tsx` — animated contact form

## Shared Components
- `src/components/navbar.tsx` — fixed glass pill nav, scroll-shrink, mobile menu
- `src/components/footer.tsx` — 4-col dark footer

## Animated Primitives (src/components/ui/)
- `animated-section` — useInView wrapper, triggers direction variants
- `counter` — useMotionValue + animate from 0→value on scroll
- `cursor-glow` — mouse position radial gradient (md+)
- `magnetic-button` — useSpring cursor follow, renders `<a>` or `<button>`
- `parallax-section` — useScroll Y transform wrapper
- `text-reveal` — splits text by word, clips reveal from bottom

## Config
- `next.config.ts` — minimal Next.js config
- `tsconfig.json` — `@/*` → `./src/*`
- `.claude/launch.json` — preview server (npm run dev, autoPort true)
