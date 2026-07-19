"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { BloomFilm } from "@/components/bloom-film";
import { AnimatedSection } from "@/components/ui/animated-section";

const disciplines = [
  {
    number: "01",
    title: "Position the truth",
    note: "Offer · narrative · verbal identity",
    copy: "Find the sharpest thing that is already true about the business, then make every word carry it.",
  },
  {
    number: "02",
    title: "Build the flagship",
    note: "Direction · design · Next.js",
    copy: "Turn that truth into a digital experience with the presence, pace, and precision to change perception.",
  },
  {
    number: "03",
    title: "Create momentum",
    note: "Launch · editorial · demand",
    copy: "Give the brand a system for being discovered, remembered, and chosen long after launch day.",
  },
];

const projects = [
  {
    name: "Nera",
    category: "Wellness, re-authored",
    image: "/loam-field-study.png",
    position: "center",
  },
  {
    name: "Atelier North",
    category: "Architecture with a voice",
    image: "/loam-portal.png",
    position: "60% center",
  },
  {
    name: "Thorn",
    category: "Advisory, made inevitable",
    image: "/loam-forms.png",
    position: "center",
  },
];

const process = [
  {
    number: "01",
    title: "Read",
    body: "We look past the brief and find the real commercial tension.",
  },
  {
    number: "02",
    title: "Distil",
    body: "We turn complexity into one clear, ownable point of view.",
  },
  {
    number: "03",
    title: "Make",
    body: "Strategy, words, design, and code take shape in the same room.",
  },
  {
    number: "04",
    title: "Compound",
    body: "The launch becomes a beginning, with systems built to keep growing.",
  },
];

export default function Home() {
  const prototypePinkRef = useRef<HTMLDivElement>(null);
  const prototypeHintRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        id="prototype-hero"
        data-prototype="hero"
        className="prototype-reveal relative z-[60] min-h-svh overflow-hidden bg-white"
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;

          const bounds = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;

          if (prototypePinkRef.current) {
            prototypePinkRef.current.style.setProperty("--reveal-x", `${x}px`);
            prototypePinkRef.current.style.setProperty("--reveal-y", `${y}px`);
          }

          if (
            prototypeHintRef.current &&
            prototypeHintRef.current.style.opacity !== "0"
          ) {
            prototypeHintRef.current.style.opacity = "0";
          }
        }}
        onPointerLeave={() => {
          prototypePinkRef.current?.style.removeProperty("--reveal-x");
          prototypePinkRef.current?.style.removeProperty("--reveal-y");
          prototypeHintRef.current?.style.removeProperty("opacity");
        }}
      >
        <Image
          src="/loam-landscape-cream-v2.png"
          alt="A sunlit mountain valley with a small stone cottage"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />

        <div
          ref={prototypeHintRef}
          aria-hidden="true"
          className="prototype-hover-hint pointer-events-none absolute inset-0"
        >
          <Image
            src="/loam-landscape-pink-v2.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          ref={prototypePinkRef}
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(circle 165px at var(--reveal-x, -1000px) var(--reveal-y, -1000px), black 0%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle 165px at var(--reveal-x, -1000px) var(--reveal-y, -1000px), black 0%, black 88%, transparent 100%)",
          }}
        >
          <Image
            src="/loam-landscape-pink-v2.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
          <p className="pointer-events-none absolute bottom-[8%] right-[9%] z-10 max-w-[15rem] -rotate-[5deg] text-right font-editorial text-[clamp(1.6rem,2.6vw,3.2rem)] italic leading-[0.88] tracking-[-0.035em] text-white drop-shadow-[0_3px_12px_rgba(83,42,43,0.5)]">
            Some things bloom when noticed.
          </p>
        </div>

        <div className="pointer-events-none absolute left-[5%] top-[7%] z-10 w-[min(54rem,90vw)] text-left text-white">
          <div
            aria-label="Make it take root."
            className="drop-shadow-[0_4px_18px_rgba(23,61,43,0.34)]"
          >
            <span className="block font-body text-[clamp(3.7rem,9.6vw,10.5rem)] font-extrabold uppercase leading-[0.7] tracking-[-0.08em]">
              Make it
            </span>
            <span className="mt-2 block font-editorial text-[clamp(4.2rem,10.4vw,11.25rem)] italic leading-[0.7] tracking-[-0.065em]">
              take root.
            </span>
          </div>
          <p className="mt-7 max-w-md font-body text-sm font-semibold leading-relaxed text-white/88 drop-shadow-[0_2px_10px_rgba(23,61,43,0.5)] sm:text-base">
            Positioning, digital flagships, and growth systems for ambitious
            brands ready to become impossible to overlook.
          </p>
        </div>

        <p className="pointer-events-none absolute left-[58%] top-[57%] z-10 hidden max-w-[23rem] -rotate-[7deg] font-editorial text-[clamp(2.2rem,3.4vw,4.7rem)] italic leading-[0.82] tracking-[-0.045em] text-white/92 drop-shadow-[0_3px_12px_rgba(23,61,43,0.48)] sm:block">
          The best ideas grow where nobody is looking.
        </p>

        <div className="pointer-events-none absolute left-[19%] top-[62%] z-10 hidden max-w-[15rem] -rotate-[4deg] text-white/92 drop-shadow-[0_2px_9px_rgba(23,61,43,0.5)] md:block">
          <div className="flex items-center gap-2 font-body text-[9px] font-semibold uppercase tracking-[0.28em]">
            <span>Field note</span>
            <span className="h-px w-8 bg-current opacity-45" />
            <span>01</span>
          </div>
          <p className="mt-2 font-editorial text-[1.45rem] italic leading-[0.92] tracking-[-0.025em]">
            A small place for ideas to become inevitable.
          </p>
        </div>

        <a
          href="#original-hero"
          className="prototype-enter-link absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 px-5 pt-3 text-white drop-shadow-[0_2px_9px_rgba(23,61,43,0.5)] focus-visible:rounded-t-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span className="prototype-enter-label whitespace-nowrap font-body text-[10px] font-bold uppercase tracking-[0.34em] sm:text-[11px]">
            Enter the studio <span aria-hidden="true">↓</span>
          </span>
          <span
            aria-hidden="true"
            className="prototype-enter-line h-11 w-px bg-current opacity-70"
          />
        </a>
      </section>

      <section
        id="original-hero"
        className="overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-36"
      >
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.54fr)] lg:items-center">
          <AnimatedSection direction="up">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/45">
              <span className="h-px w-10 bg-petal" />
              Loam, beneath the surface
            </div>
            <h1 className="mt-8 max-w-[12ch] font-body text-[clamp(4.2rem,8.2vw,9.4rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em] text-earth-950">
              Good brands get attention.
              <span className="mt-4 block font-editorial font-normal normal-case italic text-petal">
                Great ones create gravity.
              </span>
            </h1>
            <div className="mt-10 grid max-w-3xl gap-7 border-t border-earth-950/16 pt-7 sm:grid-cols-[auto_1fr]">
              <ArrowDownRight className="h-7 w-7 text-petal" />
              <p className="max-w-xl text-lg font-medium leading-relaxed text-earth-900/68">
                Loam finds the strongest thing your business can stand for, then
                builds the words, digital experience, and growth system that
                make people feel it.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              <Link
                href="/work"
                className="editorial-link inline-flex items-center gap-3 border-b border-earth-950 pb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-earth-950"
              >
                See what took root
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="editorial-link inline-flex items-center gap-3 border-b border-earth-950/28 pb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-earth-900/56"
              >
                Read the field notes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.12}>
            <figure className="editorial-image-frame relative aspect-[4/5] overflow-hidden">
              <Image
                src="/loam-field-study.png"
                alt="A white stone shelter and tree in a pale mountain field"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-6 left-6 max-w-[12rem] font-editorial text-2xl italic leading-none text-white drop-shadow-md">
                Build the conditions. Growth follows.
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-earth-950/14 bg-white/42 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-5 border-b border-earth-950/14 py-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <AnimatedSection direction="up">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/45">
                Three ways in
              </p>
              <h2 className="mt-4 max-w-[10ch] font-body text-5xl font-extrabold uppercase leading-[0.78] tracking-[-0.065em] text-earth-950 sm:text-7xl">
                One point of view.
              </h2>
            </AnimatedSection>
            <p className="max-w-lg text-base font-medium leading-relaxed text-earth-900/62 lg:justify-self-end">
              Not a menu of disconnected services. A joined-up practice for
              making the business clearer, more desirable, and easier to grow.
            </p>
          </div>

          {disciplines.map((item, index) => (
            <AnimatedSection
              key={item.number}
              direction="up"
              delay={index * 0.05}
            >
              <Link
                href="/services"
                className="service-row group grid gap-5 border-b border-earth-950/14 py-9 text-earth-950 md:grid-cols-[5rem_1fr_0.75fr_1fr] md:items-center"
              >
                <span className="font-editorial text-2xl italic text-petal group-hover:text-white/62">
                  {item.number}
                </span>
                <h3 className="font-body text-4xl font-extrabold uppercase leading-none tracking-[-0.055em] sm:text-5xl">
                  {item.title}
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] opacity-48">
                  {item.note}
                </p>
                <p className="max-w-md text-sm font-medium leading-relaxed opacity-68">
                  {item.copy}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="relative min-h-[82svh] overflow-hidden">
        <Image
          src="/loam-forms.png"
          alt="Three carved stone forms standing in a pale mountain field"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/76 via-earth-950/4 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 sm:px-8 lg:px-10 lg:pb-16">
          <AnimatedSection
            direction="up"
            className="mx-auto flex max-w-[92rem] flex-col gap-8 text-white lg:flex-row lg:items-end lg:justify-between"
          >
            <h2 className="max-w-[12ch] font-body text-[clamp(4rem,8vw,9rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em]">
              Strategy you can
              <span className="block font-editorial font-normal normal-case italic text-petal">
                feel in the room.
              </span>
            </h2>
            <p className="max-w-md border-l border-white/42 pl-5 text-sm font-medium leading-relaxed text-white/76">
              The work should not look strategic. It should make every choice
              feel more inevitable—from the first sentence to the final
              interaction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[92rem]">
          <AnimatedSection
            direction="up"
            className="flex flex-col gap-6 border-b border-earth-950/16 pb-9 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/45">
                Selected growth
              </p>
              <h2 className="mt-5 font-body text-6xl font-extrabold uppercase leading-[0.78] tracking-[-0.07em] text-earth-950 sm:text-8xl">
                Work that
                <span className="ml-3 font-editorial font-normal normal-case italic text-petal">
                  landed.
                </span>
              </h2>
            </div>
            <Link
              href="/work"
              className="editorial-link inline-flex items-center gap-3 border-b border-earth-950 pb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-earth-950"
            >
              Open the case files
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.name}
                direction="up"
                delay={index * 0.08}
                className={
                  index === 0
                    ? "lg:col-span-5"
                    : index === 1
                      ? "lg:col-span-7"
                      : "lg:col-span-12"
                }
              >
                <Link href="/work" className="project-card group block">
                  <div
                    className={`relative overflow-hidden ${
                      index === 2 ? "aspect-[16/7]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes={
                        index === 2
                          ? "100vw"
                          : "(min-width: 1024px) 50vw, 100vw"
                      }
                      className="project-image object-cover"
                      style={{ objectPosition: project.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/42 via-transparent to-transparent" />
                    <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-5 border-b border-earth-950/16 py-5">
                    <h3 className="font-body text-3xl font-extrabold uppercase tracking-[-0.055em] text-earth-950">
                      {project.name}
                    </h3>
                    <p className="text-right font-editorial text-lg italic text-earth-900/52">
                      {project.category}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-950 px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[92rem]">
          <AnimatedSection direction="up" className="max-w-6xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/38">
              Our working belief
            </p>
            <h2 className="mt-7 font-body text-[clamp(4rem,8.2vw,9.2rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em]">
              We do not decorate businesses.
              <span className="mt-4 block font-editorial font-normal normal-case italic text-petal">
                We reveal their force.
              </span>
            </h2>
          </AnimatedSection>

          <div className="mt-20 grid border-t border-white/16 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <AnimatedSection
                key={item.number}
                direction="up"
                delay={index * 0.06}
                className="border-b border-white/16 px-0 py-7 md:border-r md:px-6 md:first:pl-0 xl:border-b-0"
              >
                <span className="font-editorial text-xl italic text-petal">
                  {item.number}
                </span>
                <h3 className="mt-9 font-body text-4xl font-extrabold uppercase tracking-[-0.055em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-white/54">
                  {item.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[92svh] overflow-hidden bg-[#315c8e]">
        <BloomFilm />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/68 via-earth-950/4 to-earth-950/12" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-6 text-[9px] font-bold uppercase tracking-[0.28em] text-white/72 sm:px-8 lg:px-10">
          <span>Bloom study · 01</span>
          <span className="hidden sm:block">The point of the groundwork</span>
        </div>
        <AnimatedSection
          direction="up"
          className="absolute inset-x-5 bottom-9 text-white sm:inset-x-8 lg:inset-x-10 lg:bottom-12"
        >
          <div className="mx-auto flex max-w-[92rem] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[10ch] font-body text-[clamp(5rem,11vw,12rem)] font-extrabold uppercase leading-[0.66] tracking-[-0.08em] drop-shadow-[0_5px_25px_rgba(18,28,32,0.28)]">
              Then it
              <span className="mt-3 block font-editorial font-normal normal-case italic">
                blooms.
              </span>
            </h2>
            <p className="max-w-sm border-l border-white/58 pl-5 text-sm font-semibold leading-relaxed text-white/82 drop-shadow-md">
              Not louder for the sake of it. Alive, distinct, and finally
              carrying the force that was underneath all along.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="grid min-h-[82svh] lg:grid-cols-2">
        <div className="relative min-h-[55svh] overflow-hidden lg:min-h-full">
          <Image
            src="/loam-portal.png"
            alt="A carved stone portal in a field of pale pink flowers"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-earth-100 px-6 py-20 sm:px-12 lg:px-16">
          <AnimatedSection direction="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/42">
              The next threshold
            </p>
            <h2 className="mt-7 max-w-[10ch] font-body text-[clamp(4rem,7vw,8.5rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em] text-earth-950">
              Ready to become
              <span className="mt-3 block font-editorial font-normal normal-case italic text-petal">
                impossible to overlook?
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-base font-medium leading-relaxed text-earth-900/66">
              Bring the business with substance. We will help the brand catch up
              to it.
            </p>
            <Link
              href="/contact"
              className="editorial-button mt-9 inline-flex items-center gap-3 bg-earth-950 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white"
            >
              Begin the project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
