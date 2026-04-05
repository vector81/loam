"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

const serviceOptions = [
  "Positioning",
  "Website Design",
  "Next.js Build",
  "SEO and Content",
  "Launch Campaign",
  "Retention System",
  "Not sure yet",
];

const timelineOptions = ["Immediate", "Within 30 days", "This quarter", "Just exploring"];

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
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service],
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden px-6 pt-40 pb-20 sm:px-8 lg:px-10">
        <div className="topo-lines absolute inset-0 opacity-20" />
        <motion.div
          className="absolute right-[8%] top-16 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AnimatedSection direction="up" className="max-w-4xl">
            <span className="section-label">Contact</span>
            <div className="mt-7">
              <TextReveal
                text="Tell us what the brand needs to become clearer, sharper, or harder to ignore."
                as="h1"
                className="font-heading text-[clamp(3.75rem,8vw,6.7rem)] leading-[0.9] tracking-[-0.05em] text-earth-950"
              />
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-earth-900/68">
              If you know the business has more substance than the current site or marketing makes visible, send the
              brief. We will reply with an honest read on fit, scope, and next steps.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <AnimatedSection direction="left" className="space-y-6">
            <div className="soil-panel p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/40">What happens next</p>
              <div className="mt-6 space-y-5">
                {[
                  {
                    icon: Mail,
                    title: "Reply within one business day",
                    body: "If it looks like a fit, we will send back a short response with our read on the project.",
                  },
                  {
                    icon: Clock3,
                    title: "Discovery call",
                    body: "A working session focused on the bottleneck, not a generic sales presentation.",
                  },
                  {
                    icon: MapPin,
                    title: "Scoped recommendation",
                    body: "You get the clearest path we see, whether that is a full engagement or a tighter starting point.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-forest">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl leading-[0.96] tracking-[-0.03em] text-earth-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-earth-900/66">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-earth-950 p-6 text-cream">
              <div className="topo-lines absolute opacity-0" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-cream/42">Good fit signals</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Founder-led brand",
                  "Premium service or product",
                  "Website no longer matches the offer",
                  "Needs brand and growth to align",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/74"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="soil-panel flex min-h-[42rem] flex-col items-center justify-center px-8 py-16 text-center"
                >
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="mt-6 font-heading text-4xl text-earth-950">Brief received</h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-earth-900/66">
                    We have your note and will reply with next steps within one business day if the fit looks right.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="soil-panel p-8 md:p-9"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { label: "Name", key: "name", type: "text", placeholder: "Amina Clarke", required: true },
                      {
                        label: "Email",
                        key: "email",
                        type: "email",
                        placeholder: "amina@brand.com",
                        required: true,
                      },
                      { label: "Company", key: "company", type: "text", placeholder: "Your brand", required: false },
                      {
                        label: "Budget range",
                        key: "budget",
                        type: "text",
                        placeholder: "$15k - $40k",
                        required: false,
                      },
                    ].map((field) => (
                      <label key={field.key} className="block">
                        <span className="mb-2 block text-sm font-medium text-earth-900/72">{field.label}</span>
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(event) =>
                            setFormData((current) => ({ ...current, [field.key]: event.target.value }))
                          }
                          className="w-full rounded-[1.25rem] border border-earth-200 bg-white/75 px-4 py-3 text-sm text-earth-950 outline-none transition-colors placeholder:text-earth-900/30 focus:border-forest"
                        />
                      </label>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-medium text-earth-900/72">What do you need?</p>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => {
                        const active = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                              active
                                ? "border border-earth-950 bg-earth-950 text-cream"
                                : "border border-earth-200 bg-white/65 text-earth-900/60 hover:border-forest hover:text-forest"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-medium text-earth-900/72">Timing</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {timelineOptions.map((option) => {
                        const active = timeline === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setTimeline(option)}
                            className={`rounded-[1.25rem] border px-4 py-3 text-left text-sm transition-colors ${
                              active
                                ? "border-earth-950 bg-earth-950 text-cream"
                                : "border-earth-200 bg-white/65 text-earth-900/64 hover:border-forest hover:text-forest"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="mt-6 block">
                    <span className="mb-2 block text-sm font-medium text-earth-900/72">Project context</span>
                    <textarea
                      rows={6}
                      required
                      placeholder="What is changing in the business, what feels off about the current brand or site, and what would a strong outcome look like?"
                      value={formData.message}
                      onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                      className="w-full resize-none rounded-[1.5rem] border border-earth-200 bg-white/75 px-4 py-4 text-sm text-earth-950 outline-none transition-colors placeholder:text-earth-900/30 focus:border-forest"
                    />
                  </label>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-sm leading-relaxed text-earth-900/58">
                      This form is for genuine project inquiries. If we are not the right fit, we will still try to be useful.
                    </p>
                    <MagneticButton
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-earth-950 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
                    >
                      Send the brief <ArrowRight className="h-4 w-4" />
                    </MagneticButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
