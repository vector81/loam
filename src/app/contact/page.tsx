"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const serviceOptions = [
  "Positioning",
  "Creative direction",
  "Digital flagship",
  "Launch and demand",
  "The whole system",
  "Not sure yet",
];

const timelineOptions = [
  "Now",
  "Within 30 days",
  "This quarter",
  "Just exploring",
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("Within 30 days");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  return (
    <section className="min-h-screen bg-earth-50 px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-[92rem] overflow-hidden border border-earth-950/14 bg-white/42 lg:grid-cols-[0.72fr_1fr]">
        <div className="relative min-h-[72svh] overflow-hidden lg:min-h-full">
          <Image
            src="/loam-field-study.png"
            alt="A white tree, stone shelter, and path of pink flowers"
            fill
            preload
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-950/72 via-earth-950/4 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/58">
              A useful beginning
            </p>
            <h1 className="mt-5 max-w-[9ch] font-body text-[clamp(4rem,7vw,8rem)] font-extrabold uppercase leading-[0.72] tracking-[-0.075em]">
              Tell us what needs
              <span className="block font-editorial font-normal normal-case italic text-petal">
                to take root.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-sm font-medium leading-relaxed text-white/72">
              Give us the honest version: what is changing, what feels behind,
              and what a stronger outcome would make possible.
            </p>
          </div>
        </div>

        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, transform: "translateY(12px)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="flex min-h-[44rem] flex-col justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-petal text-earth-950">
                  <Check className="h-6 w-6" />
                </span>
                <p className="mt-10 text-[9px] font-bold uppercase tracking-[0.3em] text-earth-900/42">
                  Brief received
                </p>
                <h2 className="mt-5 max-w-[9ch] font-body text-[clamp(4rem,7vw,7rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.07em] text-earth-950">
                  The first seed is
                  <span className="block font-editorial font-normal normal-case italic text-petal">
                    in the ground.
                  </span>
                </h2>
                <p className="mt-7 max-w-lg text-base font-medium leading-relaxed text-earth-900/66">
                  We will read the brief properly and reply with an honest view
                  on fit, scope, and the most useful next move.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnimatedSection direction="up">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-earth-900/42">
                    Project inquiry · Usually replies within one day
                  </p>
                  <h2 className="mt-5 max-w-[10ch] font-editorial text-[clamp(3rem,5vw,5.6rem)] italic leading-[0.84] tracking-[-0.045em] text-earth-950">
                    Start wherever the pressure feels strongest.
                  </h2>
                </AnimatedSection>

                <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2">
                  {[
                    {
                      label: "Your name",
                      key: "name",
                      type: "text",
                      placeholder: "Amina Clarke",
                      required: true,
                    },
                    {
                      label: "Email",
                      key: "email",
                      type: "email",
                      placeholder: "amina@brand.com",
                      required: true,
                    },
                    {
                      label: "Company",
                      key: "company",
                      type: "text",
                      placeholder: "Your brand",
                      required: false,
                    },
                    {
                      label: "Working budget",
                      key: "budget",
                      type: "text",
                      placeholder: "$20k–$60k",
                      required: false,
                    },
                  ].map((field) => (
                    <label key={field.key} className="block">
                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-earth-900/48">
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(event) =>
                          setFormData((current) => ({
                            ...current,
                            [field.key]: event.target.value,
                          }))
                        }
                        className="mt-3 w-full border-0 border-b border-earth-950/22 bg-transparent px-0 py-3 text-base font-medium text-earth-950 outline-none transition-colors duration-200 placeholder:text-earth-900/26 focus:border-petal"
                      />
                    </label>
                  ))}
                </div>

                <fieldset className="mt-10">
                  <legend className="text-[9px] font-bold uppercase tracking-[0.24em] text-earth-900/48">
                    Where is the pressure?
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const active = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleService(service)}
                          className={`editorial-button border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] ${
                            active
                              ? "border-petal bg-petal text-earth-950"
                              : "border-earth-950/16 text-earth-900/58 hover:border-earth-950/42"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset className="mt-9">
                  <legend className="text-[9px] font-bold uppercase tracking-[0.24em] text-earth-900/48">
                    When should it move?
                  </legend>
                  <div className="mt-4 grid grid-cols-2 gap-px bg-earth-950/14 sm:grid-cols-4">
                    {timelineOptions.map((option) => {
                      const active = timeline === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setTimeline(option)}
                          className={`editorial-button min-h-14 px-3 py-3 text-[9px] font-bold uppercase tracking-[0.15em] ${
                            active
                              ? "bg-earth-950 text-white"
                              : "bg-earth-50 text-earth-900/54 hover:bg-earth-100"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="mt-9 block">
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-earth-900/48">
                    The honest context
                  </span>
                  <textarea
                    rows={5}
                    required
                    placeholder="What is changing in the business? What feels weaker than the offer deserves? What would become possible if the brand finally caught up?"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    className="mt-3 w-full resize-none border border-earth-950/16 bg-earth-50/72 p-4 text-sm font-medium leading-relaxed text-earth-950 outline-none transition-colors duration-200 placeholder:text-earth-900/28 focus:border-petal"
                  />
                </label>

                <div className="mt-8 flex flex-col gap-5 border-t border-earth-950/14 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs font-medium leading-relaxed text-earth-900/46">
                    No generic sales call. We read first, then tell you what we
                    genuinely think.
                  </p>
                  <button
                    type="submit"
                    className="editorial-button inline-flex items-center justify-center gap-3 bg-earth-950 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white"
                  >
                    Plant the brief
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
