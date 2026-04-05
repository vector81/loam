"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumnIncreasing,
  Compass,
  Globe,
  Megaphone,
  Search,
  SwatchBook,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

const capabilities = [
  {
    title: "Positioning and Message Systems",
    icon: Compass,
    accent: "text-forest",
    summary:
      "For teams with a strong product but muddy language. We clarify the value prop, sharpen the hierarchy, and create a message system the whole business can use.",
    bullets: ["Offer architecture", "Narrative territory", "Messaging hierarchy", "Sales-page structure"],
  },
  {
    title: "Creative Direction and Web Design",
    icon: SwatchBook,
    accent: "text-terracotta",
    summary:
      "Visual systems, page architecture, and interaction design that feel more like a flagship brand experience than a rented template.",
    bullets: ["Creative direction", "Page systems", "Conversion-focused UX", "Motion and interface polish"],
  },
  {
    title: "Next.js Site Build",
    icon: Globe,
    accent: "text-olive",
    summary:
      "We implement the site layer with the same rigor as the strategy layer, so launch quality does not depend on a handoff gap.",
    bullets: ["App Router builds", "Responsive implementation", "Performance-aware motion", "Production deployment"],
  },
  {
    title: "Editorial and SEO Systems",
    icon: Search,
    accent: "text-forest",
    summary:
      "Search and editorial planning designed around authority, conversion, and consistent compounding rather than empty traffic.",
    bullets: ["Topic architecture", "Editorial planning", "Search intent mapping", "Launch content systems"],
  },
  {
    title: "Campaign and Launch Narratives",
    icon: Megaphone,
    accent: "text-terracotta",
    summary:
      "When the site goes live, the surrounding campaign layer should already know what to say and where to send attention.",
    bullets: ["Launch messaging", "Email sequences", "Conversion assets", "Narrative campaign kits"],
  },
  {
    title: "Reporting and Growth Direction",
    icon: ChartColumnIncreasing,
    accent: "text-olive",
    summary:
      "We measure what matters, then use the data to keep refining the site and the growth system instead of treating launch as the finish line.",
    bullets: ["Insight dashboards", "Signal-based reporting", "Iteration plans", "Growth reviews"],
  },
];

const engagements = [
  {
    title: "Brand Refresh and Site Rebuild",
    description:
      "Best for brands that have outgrown their current website and need sharper positioning before the redesign starts.",
  },
  {
    title: "Launch Sprint for a New Offer",
    description:
      "For founder-led businesses introducing a new product, service, or category and needing message, site, and campaign alignment fast.",
  },
  {
    title: "Ongoing Growth Layer",
    description:
      "For teams who want Loam to stay close after launch and extend the same thinking into SEO, content, and retention systems.",
  },
];

const principles = [
  "We do not separate strategy from implementation if the handoff would weaken the result.",
  "We build around how the business sells, not around generic page patterns.",
  "Every deliverable should make the next layer easier to execute and easier to measure.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-20" />
        <motion.div
          className="absolute right-[10%] top-20 h-80 w-80 rounded-full bg-forest/12 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <AnimatedSection direction="up">
            <span className="section-label">Capabilities</span>
            <div className="mt-7 max-w-5xl">
              <TextReveal
                text="Loam is built for brands that need more than a prettier homepage."
                as="h1"
                className="font-heading text-[clamp(3.7rem,8vw,6.6rem)] leading-[0.9] tracking-[-0.05em] text-earth-950"
              />
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-earth-900/68">
              We combine brand thinking, website creation, and growth systems into one offering so the work stays
              coherent all the way from narrative to launch to long-tail demand.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="scale" delay={0.15}>
            <div className="soil-panel p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/42">How engagements usually start</p>
              <div className="mt-5 space-y-4">
                {engagements.map((item, index) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-earth-200/80 bg-white/60 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-heading text-3xl leading-[0.96] tracking-[-0.03em] text-earth-950">{item.title}</h2>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">0{index + 1}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-earth-900/66">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((item, index) => (
              <AnimatedSection key={item.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.06}>
                <div className="soil-panel h-full p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/72 ${item.accent}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-earth-200/80 bg-white/60 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-earth-900/42">
                      Module {index + 1}
                    </span>
                  </div>
                  <h2 className="mt-8 max-w-md font-heading text-4xl leading-[0.94] tracking-[-0.04em] text-earth-950">{item.title}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-earth-900/68">{item.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-earth-200/80 bg-earth-50 px-4 py-2 text-xs uppercase tracking-[0.16em] text-earth-900/50"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep px-6 py-28 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="max-w-3xl">
            <span className="section-label border-white/10 bg-white/6 text-cream/65 before:bg-terracotta before:shadow-[0_0_0_4px_rgba(198,123,92,0.16)]">
              Operating principles
            </span>
            <h2 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-cream sm:text-6xl">
              The work stays premium when the thinking stays joined up.
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <AnimatedSection key={item} direction="up" delay={index * 0.1}>
                <div className="ink-panel h-full p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cream/38">Principle 0{index + 1}</p>
                  <p className="mt-5 text-lg leading-relaxed text-cream/72">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up">
            <span className="section-label">Need the right mix?</span>
            <h2 className="mt-6 font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950 sm:text-6xl">
              We can shape the engagement around where the pressure actually is.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-earth-900/66">
              Some clients need sharper positioning first. Some need the site rebuilt immediately. Some need the site
              and the growth engine designed together. We scope around the bottleneck.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-earth-950 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
              >
                Talk through the project <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-earth-300 bg-white/55 px-8 py-4 text-sm font-semibold text-earth-900 transition-colors hover:border-forest hover:text-forest"
              >
                Review recent work <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
