"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Compass, Layers3, Sprout, SwatchBook } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { TextReveal } from "@/components/ui/text-reveal";

const beliefs = [
  {
    title: "Positioning is design work",
    body:
      "The visual layer only gets really good once the offer and the language are sharp enough to support it.",
  },
  {
    title: "A website is a sales surface",
    body:
      "If it only looks impressive and does not make the business easier to understand, it is unfinished.",
  },
  {
    title: "Growth should extend the brand",
    body:
      "Content, SEO, email, and launch campaigns should sound like the same intelligence, not separate contractors.",
  },
];

const approach = [
  {
    icon: Compass,
    title: "Strategy first",
    body: "We start by reading the business: where the offer is strong, where it is muddy, and where attention is leaking.",
  },
  {
    icon: SwatchBook,
    title: "Taste with structure",
    body: "The visual system matters, but it needs hierarchy, restraint, and a reason for every aesthetic decision.",
  },
  {
    icon: Layers3,
    title: "Built as one system",
    body: "We prefer a joined-up process where messaging, design, and implementation strengthen each other as the site takes shape.",
  },
  {
    icon: Sprout,
    title: "Compounding after launch",
    body: "The launch is just the point where the website becomes useful to the rest of the growth engine.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-20" />
        <motion.div
          className="absolute right-[8%] top-20 h-80 w-80 rounded-full bg-forest/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <AnimatedSection direction="up" className="max-w-4xl">
            <span className="section-label">About Loam</span>
            <div className="mt-7">
              <TextReveal
                text="Loam exists for brands that need the thinking and the making to happen in the same room."
                as="h1"
                className="font-heading text-[clamp(3.8rem,8vw,6.7rem)] leading-[0.9] tracking-[-0.05em] text-earth-950"
              />
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-earth-900/68">
              We built Loam around a simple frustration: too many projects lose quality in the gaps between strategy,
              design, build, and growth. So we structured the studio to close those gaps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left">
            <div className="soil-panel p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">Why the name fits</p>
              <h2 className="mt-5 font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950">Loam is the soil that supports deeper growth.</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-earth-900/68">
                <p>
                  We liked the metaphor because it says exactly what we care about: not flash for its own sake, but the
                  underlying conditions that make strong growth possible.
                </p>
                <p>
                  In practical terms, that means better positioning, a sharper website, and a smarter system for how
                  the brand gets discovered and remembered.
                </p>
                <p>
                  Loam is not trying to be the biggest agency. The aim is narrower and harder: to be the studio that
                  makes premium brands feel more coherent, more distinct, and more convincing.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative overflow-hidden rounded-[2rem] bg-earth-950 p-10 text-cream">
              <div className="topo-lines absolute inset-0 opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-forest/20 via-transparent to-terracotta/16" />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cream/42">Core beliefs</p>
                <div className="mt-6 space-y-4">
                  {beliefs.map((belief) => (
                    <div key={belief.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                      <h3 className="font-heading text-2xl">{belief.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-cream/66">{belief.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep px-6 py-28 sm:px-8 lg:px-10">
        <ParallaxSection speed={0.14} className="absolute inset-0">
          <div className="topo-lines absolute inset-0 opacity-10" />
        </ParallaxSection>
        <div className="relative mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="max-w-3xl">
            <span className="section-label border-white/10 bg-white/6 text-cream/65 before:bg-terracotta before:shadow-[0_0_0_4px_rgba(198,123,92,0.16)]">
              How we work
            </span>
            <h2 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-cream sm:text-6xl">
              We care about taste, but we trust structure more.
            </h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {approach.map((item, index) => (
              <AnimatedSection key={item.title} direction="up" delay={index * 0.08}>
                <div className="ink-panel h-full p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cream">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-cream">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/66">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up">
            <span className="section-label">Work with Loam</span>
            <h2 className="mt-6 font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950 sm:text-6xl">
              We are most useful when the business is good and the brand layer needs to catch up fast.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-earth-900/66">
              If you already know the offer has substance, but the website, message, or growth architecture is not
              carrying its weight, that is the kind of pressure we like solving.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-earth-950 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
              >
                Start the conversation <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-earth-300 bg-white/55 px-8 py-4 text-sm font-semibold text-earth-900 transition-colors hover:border-forest hover:text-forest"
              >
                See the work <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
