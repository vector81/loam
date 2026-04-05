"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Counter } from "@/components/ui/counter";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

const projects = [
  {
    name: "Nera",
    category: "Luxury wellness",
    summary:
      "A premium supplement brand with a credible product and an underpowered brand experience. We rebuilt the narrative, restructured the flagship site, and wrapped launch content around a sharper promise.",
    challenge:
      "The business had strong retention and weak first impression. Traffic landed, but the site made the brand feel softer and cheaper than the actual product experience.",
    response:
      "We reframed the messaging around ritual and clarity, designed a visual system with more restraint, and built a layered conversion path that handled education without feeling clinical.",
    results: [
      { value: 3.1, suffix: "x", label: "Increase in demo intent" },
      { value: 42, suffix: "%", label: "Lift in engaged session depth" },
      { value: 19, suffix: "%", label: "Improvement in return visitor conversion" },
    ],
    chips: ["Positioning", "Website Build", "Launch Narrative"],
    tone: "from-forest-deep via-forest to-forest-light",
  },
  {
    name: "Atelier North",
    category: "Architecture studio",
    summary:
      "A practice doing sophisticated spatial work without a digital presence to match. We shaped an editorial portfolio system and a website that felt more like a point of view than a gallery.",
    challenge:
      "The old site showed projects but failed to tell clients how the studio thought. The work looked premium; the framing around it did not.",
    response:
      "We created a message framework around environmental intelligence, restructured the case-study flow, and introduced a journal layer that turned expertise into long-tail authority.",
    results: [
      { value: 2.4, suffix: "M", label: "Pipeline influenced", prefix: "$" },
      { value: 7, suffix: "", label: "New enterprise leads from inbound" },
      { value: 5.2, suffix: "x", label: "Growth in organic discovery pages" },
    ],
    chips: ["Creative Direction", "Case Study UX", "Editorial System"],
    tone: "from-earth-950 via-terracotta-dark to-terracotta",
  },
  {
    name: "Thorn",
    category: "Advisory studio",
    summary:
      "A founder-led consulting business evolving into a more productized offer. We rebuilt the site around a clearer operating model, then connected it to a growth and retention layer.",
    challenge:
      "Traffic was decent but the positioning was broad, the offer stack was muddy, and the site asked visitors to do too much interpretive work.",
    response:
      "We tightened the offer architecture, redesigned the service hierarchy, implemented a cleaner conversion path, and built supporting nurture flows for post-visit follow-up.",
    results: [
      { value: 58, suffix: "%", label: "Increase in qualified inquiries" },
      { value: 31, suffix: "%", label: "Lift in proposal close rate" },
      { value: 4.4, suffix: "x", label: "Growth in branded search demand" },
    ],
    chips: ["Offer Strategy", "Site Rebuild", "Retention Layer"],
    tone: "from-olive via-forest to-forest-deep",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-20" />
        <motion.div
          className="absolute left-[6%] top-16 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="max-w-4xl">
            <span className="section-label">Selected work</span>
            <div className="mt-7">
              <TextReveal
                text="The best projects make the business easier to explain and harder to ignore."
                as="h1"
                className="font-heading text-[clamp(3.8rem,8vw,6.7rem)] leading-[0.9] tracking-[-0.05em] text-earth-950"
              />
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-earth-900/68">
              These are the kinds of engagements we like most: premium teams with a strong underlying offer and a
              brand presence that has not caught up yet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-12">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} direction="up" delay={index * 0.08}>
              <div className="overflow-hidden rounded-[2.2rem] border border-earth-200/80 bg-white shadow-[0_36px_86px_rgba(74,53,32,0.1)]">
                <div className={`bg-gradient-to-br ${project.tone} p-8 text-cream md:p-10`}>
                  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cream/48">{project.category}</p>
                      <h2 className="mt-3 font-heading text-5xl leading-[0.92] tracking-[-0.04em]">{project.name}</h2>
                      <p className="mt-5 text-xl leading-relaxed text-cream/74">{project.summary}</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/10">
                      <ArrowUpRight className="h-5 w-5 text-cream" />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/72"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-8 p-8 md:grid-cols-[1fr_1fr_0.95fr] md:p-11">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">Pressure point</p>
                    <p className="mt-4 text-lg leading-relaxed text-earth-900/68">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">What we changed</p>
                    <p className="mt-4 text-lg leading-relaxed text-earth-900/68">{project.response}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-earth-200/80 bg-earth-50 p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">Signals</p>
                    <div className="mt-5 space-y-5">
                      {project.results.map((result) => (
                        <div key={result.label}>
                          <div className="font-heading text-4xl text-earth-950">
                            {result.prefix ? <span>{result.prefix}</span> : null}
                            <Counter value={result.value} suffix={result.suffix} duration={2.1} />
                          </div>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-earth-900/46">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-earth-100 px-6 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up">
            <span className="section-label">Looking for similar leverage?</span>
            <h2 className="mt-6 font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950 sm:text-6xl">
              If the offer is good but the brand experience feels behind, that is usually where we create the most lift.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-earth-900/66">
              We do our best work when there is already something real worth amplifying and the site, story, and growth
              layers just need to be brought up to the same standard.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-earth-950 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-earth-300 bg-white/55 px-8 py-4 text-sm font-semibold text-earth-900 transition-colors hover:border-forest hover:text-forest"
              >
                Review capabilities <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
