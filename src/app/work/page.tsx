import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { EditorialCta, EditorialPageHero } from "@/components/editorial-page";

const projects = [
  {
    number: "01",
    name: "Nera",
    category: "Luxury wellness",
    image: "/loam-field-study.png",
    imageAlt: "A pale alpine tree, stone shelter, and path of pink flowers",
    position: "center",
    statement:
      "From another supplement to a ritual people wanted to belong to.",
    challenge:
      "Nera had product substance and loyal customers, but its digital expression felt softer, cheaper, and more generic than the experience it delivered.",
    response:
      "We rebuilt the story around daily clarity, created a tactile editorial world, and designed the flagship site to educate without ever feeling clinical.",
    signals: ["3.1× intent", "+42% depth", "+19% return conversion"],
  },
  {
    number: "02",
    name: "Atelier North",
    category: "Architecture studio",
    image: "/loam-portal.png",
    imageAlt: "A carved stone portal in a pale mountain landscape",
    position: "62% center",
    statement:
      "A portfolio that finally showed how the studio thinks—not only what it makes.",
    challenge:
      "The practice had extraordinary spatial work, but its website reduced that intelligence to a conventional gallery with no strong point of view.",
    response:
      "We shaped a narrative around environmental intelligence, reframed each project as an argument, and built an editorial portfolio with room to breathe.",
    signals: ["$2.4m influenced", "7 enterprise leads", "5.2× discovery"],
  },
  {
    number: "03",
    name: "Thorn",
    category: "Advisory studio",
    image: "/loam-forms.png",
    imageAlt: "Three carved limestone forms in an open field",
    position: "center",
    statement: "A founder-led consultancy became a distinct operating system.",
    challenge:
      "The expertise was deep, but the offer was broad and visitors had to do too much work to understand what Thorn actually changed.",
    response:
      "We tightened the offer architecture, named the method, rebuilt the website around evidence, and connected the flagship to a deliberate nurture layer.",
    signals: ["+58% inquiries", "+31% close rate", "4.4× brand demand"],
  },
];

export default function WorkPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Selected work"
        title="Proof over"
        accent="promise."
        intro="The strongest work does more than improve the surface. It changes the language around the offer, raises the standard people compare it against, and makes the business easier to choose."
        image="/loam-forms.png"
        imageAlt="Three sculptural stone forms in a pale field"
        note="Ideas become valuable when they become tangible."
        imagePosition="center"
      />

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[92rem] space-y-28 lg:space-y-40">
          {projects.map((project, index) => (
            <article key={project.name}>
              <AnimatedSection
                direction="up"
                className="grid gap-8 lg:grid-cols-[0.52fr_1fr] lg:items-end"
              >
                <div>
                  <p className="font-editorial text-2xl italic text-petal">
                    {project.number} / {project.category}
                  </p>
                  <h2 className="mt-5 font-body text-[clamp(4.5rem,8vw,9rem)] font-extrabold uppercase leading-[0.7] tracking-[-0.075em] text-earth-950">
                    {project.name}
                  </h2>
                </div>
                <p className="max-w-3xl font-editorial text-[clamp(2.5rem,4.7vw,5.6rem)] italic leading-[0.88] tracking-[-0.045em] text-earth-900/76">
                  {project.statement}
                </p>
              </AnimatedSection>

              <AnimatedSection
                direction="up"
                delay={0.08}
                className="relative mt-10 aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="100vw"
                  className="project-image object-cover"
                  style={{ objectPosition: project.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/36 via-transparent to-transparent" />
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/12 text-white backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </AnimatedSection>

              <div className="mt-0 grid border-b border-earth-950/16 lg:grid-cols-[1fr_1fr_0.8fr]">
                <AnimatedSection
                  direction="up"
                  className="border-t border-earth-950/16 py-7 lg:border-r lg:px-7 lg:first:pl-0"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-earth-900/38">
                    The pressure
                  </p>
                  <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-earth-900/66">
                    {project.challenge}
                  </p>
                </AnimatedSection>
                <AnimatedSection
                  direction="up"
                  delay={0.05}
                  className="border-t border-earth-950/16 py-7 lg:border-r lg:px-7"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-earth-900/38">
                    The change
                  </p>
                  <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-earth-900/66">
                    {project.response}
                  </p>
                </AnimatedSection>
                <AnimatedSection
                  direction="up"
                  delay={0.1}
                  className="border-t border-earth-950/16 py-7 lg:pl-7"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-earth-900/38">
                    The signals
                  </p>
                  <div className="mt-4 space-y-2">
                    {project.signals.map((signal) => (
                      <p
                        key={signal}
                        className="font-body text-2xl font-extrabold uppercase tracking-[-0.045em] text-earth-950"
                      >
                        {signal}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {index < projects.length - 1 ? (
                <div className="petal-rule mx-auto mt-28 h-px w-2/3 lg:mt-40" />
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <EditorialCta
        kicker="Your turn"
        title="Good offer."
        accent="Stronger gravity."
        body="If the substance is already there but the brand has not caught up, we should probably talk."
      />
    </>
  );
}
