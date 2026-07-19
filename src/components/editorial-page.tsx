import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

type EditorialPageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  note: string;
  children?: ReactNode;
  imagePosition?: string;
};

export function EditorialPageHero({
  eyebrow,
  title,
  accent,
  intro,
  image,
  imageAlt,
  note,
  children,
  imagePosition = "center",
}: EditorialPageHeroProps) {
  return (
    <section className="editorial-page-hero overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,0.75fr)] lg:items-end">
        <AnimatedSection direction="up" className="relative z-10">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/48">
            <span className="h-px w-10 bg-petal" />
            {eyebrow}
          </div>
          <h1 className="mt-8 max-w-[11ch] font-body text-[clamp(4.5rem,9vw,9.5rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em] text-earth-950">
            {title}
            <span className="mt-3 block font-editorial font-normal normal-case italic tracking-[-0.055em] text-petal">
              {accent}
            </span>
          </h1>
          <div className="mt-10 grid max-w-3xl gap-7 border-t border-earth-950/16 pt-7 sm:grid-cols-[auto_1fr]">
            <ArrowDownRight className="h-7 w-7 text-petal" />
            <p className="max-w-xl text-base font-medium leading-relaxed text-earth-900/72 sm:text-lg">
              {intro}
            </p>
          </div>
          {children}
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.12}>
          <figure className="editorial-image-frame relative aspect-[4/5] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-gradient-to-t from-earth-950/62 to-transparent px-6 pb-6 pt-28 text-white">
              <span className="max-w-[16rem] font-editorial text-2xl italic leading-none">
                {note}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/68">
                Field study
              </span>
            </figcaption>
          </figure>
        </AnimatedSection>
      </div>
    </section>
  );
}

type EditorialCtaProps = {
  kicker?: string;
  title: string;
  accent: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

export function EditorialCta({
  kicker = "The next season",
  title,
  accent,
  body,
  href = "/contact",
  linkLabel = "Start the conversation",
}: EditorialCtaProps) {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
      <AnimatedSection
        direction="up"
        className="mx-auto grid max-w-[92rem] gap-10 border-y border-earth-950/16 py-14 lg:grid-cols-[1fr_0.42fr] lg:items-end"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-earth-900/45">
            {kicker}
          </p>
          <h2 className="mt-6 max-w-[13ch] font-body text-[clamp(3.7rem,7vw,8rem)] font-extrabold uppercase leading-[0.76] tracking-[-0.07em] text-earth-950">
            {title}
            <span className="block font-editorial font-normal normal-case italic text-petal">
              {accent}
            </span>
          </h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-md text-base font-medium leading-relaxed text-earth-900/68">
            {body}
          </p>
          <Link
            href={href}
            className="editorial-link mt-8 inline-flex items-center gap-3 border-b border-current pb-2 text-xs font-bold uppercase tracking-[0.24em] text-earth-950"
          >
            {linkLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
