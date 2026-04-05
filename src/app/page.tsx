"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  ChartColumnIncreasing,
  Compass,
  Feather,
  Globe,
  Layers3,
  Sprout,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Counter } from "@/components/ui/counter";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { TextReveal } from "@/components/ui/text-reveal";

const HeroAtmosphere = dynamic(() => import("@/components/ui/hero-atmosphere"), {
  ssr: false,
});

const capabilities = [
  {
    title: "Position the brand",
    copy:
      "Clarify the offer, sharpen the message, and make the brand feel expensive before anyone reads the proposal.",
    icon: Compass,
    accent: "text-forest",
    surface: "from-forest/12 via-forest/6 to-transparent",
  },
  {
    title: "Design and build the site",
    copy:
      "Web experiences with stronger hierarchy, better motion, and more conviction than the average agency brochure.",
    icon: Globe,
    accent: "text-terracotta",
    surface: "from-terracotta/12 via-terracotta/6 to-transparent",
  },
  {
    title: "Launch the growth system",
    copy:
      "Editorial plans, search structure, retention flows, and reporting layers that keep working after launch week ends.",
    icon: Sprout,
    accent: "text-olive",
    surface: "from-olive/16 via-olive/6 to-transparent",
  },
];

const serviceLanes = [
  {
    name: "Brand and Positioning",
    points: ["Offer architecture", "Messaging systems", "Narrative direction"],
  },
  {
    name: "Web Design and Build",
    points: ["Creative direction", "Next.js implementation", "Conversion-focused UX"],
  },
  {
    name: "Marketing and Growth",
    points: ["SEO and editorial", "Launch campaigns", "Retention loops"],
  },
];

const stats = [
  { value: 27, suffix: "+", label: "Brands repositioned" },
  { value: 4.8, suffix: "x", label: "Average lift in qualified traffic" },
  { value: 86, suffix: "%", label: "Projects extended after launch" },
  { value: 18, suffix: "mo", label: "Typical compounding runway" },
];

const systems = [
  {
    title: "Messaging architecture",
    body:
      "We define the language that makes the rest of the site, deck, and campaign feel like one mind made it.",
    icon: Feather,
  },
  {
    title: "Digital flagship",
    body:
      "The website becomes your sharpest sales surface, not a disconnected design exercise or a generic template.",
    icon: Layers3,
  },
  {
    title: "Growth operating layer",
    body:
      "Search, content, launch rhythms, and reporting get connected into one system instead of separate retainers.",
    icon: ChartColumnIncreasing,
  },
];

const engagements = [
  {
    name: "Nera",
    category: "Luxury wellness",
    summary: "Reframed a soft product story into a premium category narrative, then rebuilt the site around it.",
    metrics: ["3.1x demo intent", "42% stronger time on site", "Launch narrative system"],
    tone: "from-forest-deep via-forest to-forest-light",
  },
  {
    name: "Atelier North",
    category: "Architecture studio",
    summary: "Designed a portfolio experience and editorial layer that made the studio look as thoughtful as the work.",
    metrics: ["2.4M pipeline influenced", "7 new inbound enterprise leads", "Editorial platform launch"],
    tone: "from-earth-900 via-terracotta-dark to-terracotta",
  },
  {
    name: "Thorn",
    category: "Productized consulting",
    summary: "Turned a consultant-led business into a sharper studio offer with a site built for conversion and trust.",
    metrics: ["58% lift in qualified inquiries", "Offer stack redesign", "Retention email system"],
    tone: "from-olive via-forest to-forest-deep",
  },
];

const process = [
  {
    step: "01",
    title: "Read the real business",
    text:
      "We start with what is actually true: the offer, the client, the sales motion, the weak spots, and the hidden leverage.",
  },
  {
    step: "02",
    title: "Shape the narrative",
    text:
      "Once the strategy is clear, we define the language, hierarchy, and visual attitude that make the brand feel unmistakable.",
  },
  {
    step: "03",
    title: "Build the flagship",
    text:
      "Design, copy, motion, structure, and implementation come together in one site that feels deliberate at every level.",
  },
  {
    step: "04",
    title: "Turn it into a system",
    text:
      "Then we extend the same thinking into SEO, launch content, retention flows, and reporting so the work compounds.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);

  return (
    <>
      <CursorGlow />

      <section ref={heroRef} className="relative overflow-hidden px-6 pt-40 pb-32 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-25" />
        <HeroAtmosphere />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-earth-300 to-transparent" />
        <motion.div
          className="absolute -top-8 right-[8%] h-[30rem] w-[30rem] rounded-full bg-terracotta/14 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-[2%] h-[28rem] w-[28rem] rounded-full bg-forest/14 blur-3xl"
          animate={{ scale: [1, 1.12, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-x-[8%] top-28 h-px bg-gradient-to-r from-transparent via-earth-300/70 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <AnimatedSection direction="up">
              <span className="section-label">Loam is a strategy-led growth studio</span>
            </AnimatedSection>

            <div className="mt-8 max-w-5xl">
              <TextReveal
                text="Marketing, websites, and brand systems built to feel inevitable."
                as="h1"
                className="font-heading text-[clamp(3.95rem,8vw,7.35rem)] leading-[0.88] tracking-[-0.05em] text-earth-950"
              />
            </div>

            <AnimatedSection direction="up" delay={0.25} className="editorial-rule mt-9 max-w-2xl">
              <p className="text-xl leading-relaxed text-earth-900/72 sm:text-[1.35rem]">
                Loam combines positioning, web creation, and organic growth into one studio engagement. We help
                ambitious brands look sharper, sound clearer, and convert with more force.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.35} className="mt-12 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-earth-950 px-8 py-4.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream shadow-[0_18px_38px_rgba(26,51,37,0.2)] transition-colors hover:bg-forest-deep"
              >
                Start your project <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-earth-300 bg-white/60 px-8 py-4.5 text-sm font-semibold uppercase tracking-[0.14em] text-earth-900 transition-colors hover:border-forest hover:text-forest"
              >
                See selected work <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.45} className="mt-12 flex flex-wrap gap-3">
              {["Positioning", "Website Design", "Next.js Build", "SEO Systems", "Launch Campaigns"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-earth-200/90 bg-white/55 px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-earth-900/52"
                >
                  {item}
                </span>
              ))}
            </AnimatedSection>
          </motion.div>

          <AnimatedSection direction="scale" delay={0.2}>
            <div className="soil-panel relative overflow-hidden p-5 sm:p-6">
              <div className="terrain-grid absolute inset-0 opacity-30" />
              <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="relative rounded-[1.9rem] bg-earth-950 px-6 py-8 text-cream sm:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-forest/24 via-transparent to-terracotta/18" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cream/48">Studio operating model</p>
                      <h2 className="mt-2 font-heading text-4xl leading-[0.96] tracking-[-0.035em]">One team. Three layers.</h2>
                    </div>
                    <div className="rounded-full border border-white/12 bg-white/6 p-3">
                      <Blocks className="h-5 w-5 text-cream" />
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {serviceLanes.map((lane, index) => (
                      <motion.div
                        key={lane.name}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-heading text-2xl">{lane.name}</p>
                          <span className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
                            Layer {index + 1}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {lane.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs text-cream/78"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/6 px-5 py-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cream/45">Current bias</p>
                      <p className="mt-1 text-sm text-cream/75">Premium service brands, design-forward studios, founder-led products</p>
                    </div>
                    <Bot className="h-5 w-5 text-terracotta-light" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="soil-panel mx-auto max-w-7xl px-7 py-8">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} direction="up" delay={index * 0.08}>
                <div className="flex flex-col gap-2 border-l border-earth-200/80 pl-5 first:border-l-0 first:pl-0">
                  <div className="font-heading text-5xl leading-none tracking-[-0.04em] text-earth-950">
                    <Counter value={stat.value} suffix={stat.suffix} duration={2.2} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-earth-900/48">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="max-w-3xl">
            <span className="section-label">What Loam actually does</span>
            <h2 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950 sm:text-6xl">
              The point is not more deliverables. The point is a brand that lands harder.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-earth-900/68">
              We design the strategic layer, the website layer, and the growth layer together so the business stops
              leaking coherence across channels.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <AnimatedSection key={item.title} direction="up" delay={index * 0.1}>
                <div className="soil-panel group relative h-full overflow-hidden p-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.surface} opacity-90`} />
                  <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-earth-300/80 to-transparent" />
                  <div className="relative flex h-full flex-col">
                    <div className={`mb-10 inline-flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-white/72 ${item.accent}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-4xl leading-[0.96] tracking-[-0.035em] text-earth-950">{item.title}</h3>
                    <p className="mt-5 flex-1 text-lg leading-relaxed text-earth-900/68">{item.copy}</p>
                    <LinkLine />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest-deep px-6 py-32 sm:px-8 lg:px-10">
        <ParallaxSection speed={0.16} className="absolute inset-0">
          <div className="topo-lines absolute inset-0 opacity-10" />
        </ParallaxSection>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection direction="left">
            <span className="section-label border-white/10 bg-white/6 text-cream/65 before:bg-terracotta before:shadow-[0_0_0_4px_rgba(198,123,92,0.16)]">
              How the system works
            </span>
            <h2 className="mt-6 max-w-md font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-cream sm:text-6xl">
              The site is the flagship. Everything else extends from it.
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-cream/64">
              Loam is built for founders and teams who are tired of hiring one shop for branding, another for the
              website, and a third for growth.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-3">
            {systems.map((system, index) => (
              <AnimatedSection key={system.title} direction="up" delay={index * 0.1}>
                <div className="ink-panel h-full p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-cream">
                    <system.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl text-cream">{system.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/62">{system.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-label">Selected engagements</span>
              <h2 className="mt-6 font-heading text-4xl text-earth-950 sm:text-5xl">
                Work that changes how the brand is perceived, not just how it looks.
              </h2>
            </div>
            <MagneticButton
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-earth-300 bg-white/55 px-6 py-3 text-sm font-semibold text-earth-900 transition-colors hover:border-forest hover:text-forest"
            >
              Open the case studies <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </AnimatedSection>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {engagements.map((item, index) => (
              <AnimatedSection key={item.name} direction="up" delay={index * 0.1}>
                <div className="overflow-hidden rounded-[2.1rem] border border-earth-200/80 bg-white shadow-[0_30px_70px_rgba(74,53,32,0.1)]">
                  <div className={`bg-gradient-to-br ${item.tone} p-9 text-cream`}>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cream/48">{item.category}</p>
                    <h3 className="mt-3 font-heading text-4xl leading-[0.96] tracking-[-0.035em]">{item.name}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-cream/72">{item.summary}</p>
                  </div>
                  <div className="space-y-3 p-9">
                    {item.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-full border border-earth-200/80 bg-earth-50 px-4 py-3 text-sm text-earth-900/66"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection direction="left">
            <span className="section-label">Process</span>
            <h2 className="mt-6 max-w-md font-heading text-5xl leading-[0.92] tracking-[-0.04em] text-earth-950 sm:text-6xl">
              Deliberate enough to make the work feel expensive.
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-earth-900/66">
              We are not trying to make the fastest website in the room. We are trying to make the clearest and most
              convincing one.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} direction="up" delay={index * 0.08}>
                <div className="soil-panel h-full p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/42">{item.step}</p>
                  <h3 className="mt-5 font-heading text-3xl leading-[0.96] tracking-[-0.03em] text-earth-950">{item.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-earth-900/66">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-earth-100 px-6 py-32 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest/8 via-transparent to-terracotta/10" />
        <div className="relative mx-auto max-w-5xl text-center">
          <AnimatedSection direction="up">
            <span className="section-label">Ready when you are</span>
            <div className="mt-6 flex justify-center">
              <TextReveal
                text="If the business is strong but the brand experience is lagging, we should talk."
                as="h2"
                className="max-w-5xl justify-center font-heading text-5xl leading-[0.9] tracking-[-0.05em] text-earth-950 sm:text-[4.9rem]"
              />
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-earth-900/66">
              Loam is best for teams that want one coherent studio to shape the strategy, website, and growth layer in
              the same motion.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-earth-950 px-8 py-4.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-forest-deep"
              >
                Book the discovery call <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-earth-300 bg-white/60 px-8 py-4.5 text-sm font-semibold uppercase tracking-[0.14em] text-earth-900 transition-colors hover:border-forest hover:text-forest"
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

function LinkLine() {
  return (
    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest">
      Explore this layer <ArrowRight className="h-4 w-4" />
    </div>
  );
}
