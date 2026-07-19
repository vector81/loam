import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { EditorialCta, EditorialPageHero } from "@/components/editorial-page";

const beliefs = [
  {
    number: "01",
    title: "Truth before theatre",
    body: "The most compelling creative direction begins with something commercially and culturally true. We find that first.",
  },
  {
    number: "02",
    title: "One mind, many mediums",
    body: "Positioning, words, design, and code become stronger when they are shaped together instead of passed between silos.",
  },
  {
    number: "03",
    title: "Beauty must carry weight",
    body: "Every beautiful decision should clarify the idea, sharpen desire, or make the next action feel inevitable.",
  },
  {
    number: "04",
    title: "Launch is germination",
    body: "We build systems that keep producing attention and demand after the first burst of launch energy disappears.",
  },
];

export default function AboutPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="The studio"
        title="Small by"
        accent="design."
        intro="Loam is built for close, consequential work—the kind where the people shaping the strategy are still there when the sentence, screen, and system become real."
        image="/loam-field-study.png"
        imageAlt="A white tree and stone shelter in a pale mountain landscape"
        note="Stay close to the thing that makes it grow."
      />

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <AnimatedSection direction="up" className="lg:sticky lg:top-32">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/44">
              Why Loam
            </p>
            <h2 className="mt-6 max-w-[9ch] font-body text-[clamp(4rem,7vw,8rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.07em] text-earth-950">
              Because growth needs
              <span className="block font-editorial font-normal normal-case italic text-petal">
                the right ground.
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.12}>
            <div className="border-t border-earth-950/16">
              {[
                "A brand can have a brilliant offer and still feel strangely forgettable. Usually, the problem is not effort. It is that the strategy, language, visual world, and digital experience were made as separate things.",
                "Loam closes those gaps. We work from the inside out: first finding the idea with enough truth and tension to hold everything together, then building the brand experience around it.",
                "The name is our standard. Loam is fertile because different materials coexist inside it. Strategy gives the work structure. Taste gives it magnetism. Technology gives it reach. None is enough alone.",
              ].map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="border-b border-earth-950/16 py-7 font-editorial text-[clamp(1.9rem,3.2vw,3.6rem)] italic leading-[1.02] tracking-[-0.035em] text-earth-900/78"
                >
                  <span className="mr-4 align-top font-body text-[9px] font-bold not-italic tracking-[0.25em] text-petal">
                    0{index + 1}
                  </span>
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative min-h-[76svh] overflow-hidden">
        <Image
          src="/loam-landscape-pink-v2.png"
          alt="A pale mountain valley filled with pink flowers"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-earth-950/18" />
        <AnimatedSection
          direction="up"
          className="absolute inset-x-5 bottom-8 max-w-5xl text-white sm:inset-x-8 lg:inset-x-10 lg:bottom-12"
        >
          <p className="font-editorial text-[clamp(3rem,6vw,7rem)] italic leading-[0.82] tracking-[-0.055em] drop-shadow-[0_4px_22px_rgba(33,24,21,0.45)]">
            “The work gets interesting when strategy stops looking like a
            document and starts changing how the whole brand behaves.”
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-earth-950 px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[92rem]">
          <AnimatedSection direction="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/38">
              What we protect
            </p>
            <h2 className="mt-6 max-w-[11ch] font-body text-[clamp(4rem,7.5vw,8.8rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.07em]">
              Four beliefs.
              <span className="block font-editorial font-normal normal-case italic text-petal">
                No theatre.
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid border-t border-white/16 md:grid-cols-2">
            {beliefs.map((belief, index) => (
              <AnimatedSection
                key={belief.number}
                direction="up"
                delay={index * 0.06}
                className="border-b border-white/16 py-8 md:odd:border-r md:odd:pr-8 md:even:pl-8"
              >
                <span className="font-editorial text-xl italic text-petal">
                  {belief.number}
                </span>
                <h3 className="mt-8 font-body text-4xl font-extrabold uppercase leading-none tracking-[-0.055em]">
                  {belief.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-white/58">
                  {belief.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <EditorialCta
        kicker="Work with Loam"
        title="Bring the"
        accent="substance."
        body="If the business is already good but the way it presents, explains, or grows has fallen behind, that is exactly where we are useful."
      />
    </>
  );
}
