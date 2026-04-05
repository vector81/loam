# Common Mistakes

**⚠️ CRITICAL - Read at session start**

1. **Tailwind tokens** — custom colors/fonts live in `globals.css @theme inline`, NOT `tailwind.config.ts`. Never create a tailwind.config.ts.

2. **motion imports** — always `import { ... } from "motion/react"`, never `"framer-motion"`.

3. **"use client"** — required on ANY file using hooks, motion, event handlers. Forgetting = RSC hydration error.

4. **Write tool** — must Read a file before writing it, or use Bash heredoc for new files.

5. **Deploy** — always `vercel --prod --yes` from `E:\loam`. Never run local dev server (burns tokens on port checks).

6. **Tailwind classes** — v4 doesn't support arbitrary values like `w-4.5`. Use `w-5` or CSS.

7. **TextReveal/AnimatedSection** — these are client components; don't nest server components inside them without `"use client"` boundaries.
