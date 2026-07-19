import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { EditorialCta, EditorialPageHero } from "@/components/editorial-page";

const capabilities = [
  {
    number: "01",
    title: "Positioning & narrative",
    promise: "Know what to stand for.",
    body: "We clarify the offer, identify the tension worth owning, and build a verbal system that makes the business easier to understand and harder to compare.",
    outputs: [
      "Positioning",
      "Offer architecture",
      "Narrative territory",
      "Messaging system",
    ],
  },
  {
    number: "02",
    title: "Creative direction",
    promise: "Give the idea a world.",
    body: "We translate the strategy into a distinct visual and editorial language—one strong enough to guide every page, campaign, and future decision.",
    outputs: [
      "Art direction",
      "Visual system",
      "Typography",
      "Interaction language",
    ],
  },
  {
    number: "03",
    title: "Digital flagship",
    promise: "Make the website carry its weight.",
    body: "We shape the architecture, copy, interface, motion, and production build as one experience, then obsess over the final ten percent.",
    outputs: [
      "UX architecture",
      "Web design",
      "Next.js build",
      "Performance polish",
    ],
  },
  {
    number: "04",
    title: "Launch & demand",
    promise: "Turn arrival into momentum.",
    body: "We extend the same point of view into launch narratives, editorial systems, search architecture, and retention paths that keep producing demand.",
    outputs: [
      "Launch system",
      "Editorial strategy",
      "SEO architecture",
      "Growth direction",
    ],
  },
];

const shapes = [
  {
    label: "Reframe",
    duration: "3–5 weeks",
    text: "A concentrated positioning and creative-direction engagement for a brand that needs clarity before it needs pages.",
  },
  {
    label: "Flagship",
    duration: "8–14 weeks",
    text: "The complete Loam engagement: positioning, creative direction, copy, interface, and production build in one room.",
  },
  {
    label: "Momentum",
    duration: "Ongoing",
    text: "A focused post-launch layer for teams ready to turn their new brand platform into discovery, demand, and iteration.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Capabilities"
        title="One idea."
        accent="Every layer."
        intro="The work gets stronger when positioning, words, design, code, and growth stop behaving like separate suppliers. Loam brings them into one continuous act."
        image="/loam-portal.png"
        imageAlt="A carved stone portal standing in a pale field"
        note="A clear threshold changes everything after it."
        imagePosition="62% center"
      />

      <section className="border-y border-earth-950/14 bg-white/38 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          {capabilities.map((capability, index) => (
            <AnimatedSection
              key={capability.number}
              direction="up"
              delay={index * 0.04}
            >
              <article className="grid gap-8 border-b border-earth-950/14 py-12 first:border-t lg:grid-cols-[5rem_0.9fr_0.7fr_1fr] lg:items-start lg:py-16">
                <span className="font-editorial text-2xl italic text-petal">
                  {capability.number}
                </span>
                <h2 className="max-w-[11ch] font-body text-[clamp(3rem,5vw,6rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.065em] text-earth-950">
                  {capability.title}
                </h2>
                <p className="font-editorial text-3xl italic leading-none text-petal">
                  {capability.promise}
                </p>
                <div>
                  <p className="max-w-lg text-base font-medium leading-relaxed text-earth-900/66">
                    {capability.body}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                    {capability.outputs.map((output) => (
                      <span
                        key={output}
                        className="border-b border-earth-950/18 pb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-earth-900/48"
                      >
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[70svh] overflow-hidden">
          <Image
            src="/loam-forms.png"
            alt="Three abstract carved forms in a mountain field"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-950/58 via-transparent to-transparent" />
          <p className="absolute bottom-8 left-6 max-w-sm font-editorial text-[clamp(2.7rem,4vw,5rem)] italic leading-[0.86] tracking-[-0.045em] text-white sm:left-10">
            Different pressures. One coherent practice.
          </p>
        </div>

        <div className="bg-earth-950 px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
          <AnimatedSection direction="up">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white/38">
              <ArrowDownRight className="h-4 w-4 text-petal" />
              Ways to work together
            </div>
            <h2 className="mt-7 max-w-[9ch] font-body text-[clamp(4rem,6vw,7.2rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.07em]">
              Scope around
              <span className="block font-editorial font-normal normal-case italic text-petal">
                the pressure.
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-14">
            {shapes.map((shape, index) => (
              <AnimatedSection
                key={shape.label}
                direction="up"
                delay={index * 0.06}
                className="grid gap-5 border-t border-white/16 py-7 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className="font-body text-3xl font-extrabold uppercase tracking-[-0.055em]">
                    {shape.label}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-white/56">
                    {shape.text}
                  </p>
                </div>
                <p className="font-editorial text-lg italic text-petal">
                  {shape.duration}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <EditorialCta
        kicker="Not sure where to begin?"
        title="Bring the"
        accent="bottleneck."
        body="We will tell you honestly whether the pressure is strategic, creative, technical, or all three—and shape the smallest engagement that can actually change it."
      />
    </>
  );
}
