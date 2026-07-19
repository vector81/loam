"use client";

import type { ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Compass,
  Link2,
  MonitorSmartphone,
  Pause,
  PenTool,
  Play,
  Search,
  Sprout,
  Zap,
} from "lucide-react";

type TimelineStatus = "completed" | "in-progress" | "pending";

type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: TimelineStatus;
  energy: number;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Read the business",
    date: "Week 01",
    content:
      "We audit the offer, buyer tension, and hidden leverage so the strategy starts from what is actually true.",
    icon: Compass,
    relatedIds: [2],
    status: "completed",
    energy: 94,
  },
  {
    id: 2,
    title: "Shape the narrative",
    date: "Week 02",
    content:
      "Messaging, tone, and category framing are sharpened until the brand sounds as strong as the work behind it.",
    icon: PenTool,
    relatedIds: [1, 3],
    status: "completed",
    energy: 88,
  },
  {
    id: 3,
    title: "Build the flagship",
    date: "Weeks 03-05",
    content:
      "Design, copy, motion, and implementation are brought together into a site that feels intentional at every layer.",
    icon: MonitorSmartphone,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 72,
  },
  {
    id: 4,
    title: "Launch discovery",
    date: "Weeks 05-06",
    content:
      "Search structure, editorial entry points, and launch content are aligned so the work starts compounding from day one.",
    icon: Search,
    relatedIds: [3, 5],
    status: "pending",
    energy: 49,
  },
  {
    id: 5,
    title: "Compound the system",
    date: "After launch",
    content:
      "Retention loops, reporting, and ongoing experimentation extend the same thinking beyond the website itself.",
    icon: Sprout,
    relatedIds: [4],
    status: "pending",
    energy: 36,
  },
];

function getStatusClass(status: TimelineStatus) {
  switch (status) {
    case "completed":
      return "border-forest/20 bg-forest/10 text-forest-deep";
    case "in-progress":
      return "border-terracotta/20 bg-terracotta/10 text-terracotta-dark";
    default:
      return "border-earth-300/80 bg-white/65 text-earth-900/72";
  }
}

export function RadialOrbitalTimeline() {
  const [rotation, setRotation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(
    timelineData[0]?.id ?? null,
  );

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRotation((current) => Number(((current + 0.22) % 360).toFixed(3)));
    }, 40);

    return () => window.clearInterval(intervalId);
  }, [isPlaying]);

  const highlightedIds = useMemo(() => {
    if (selectedId === null) {
      return {};
    }

    const activeItem = timelineData.find((item) => item.id === selectedId);
    if (!activeItem) {
      return {};
    }

    const nextHighlights: Record<number, boolean> = { [selectedId]: true };
    activeItem.relatedIds.forEach((id) => {
      nextHighlights[id] = true;
    });
    return nextHighlights;
  }, [selectedId]);

  const selectedItem = useMemo(
    () => timelineData.find((item) => item.id === selectedId) ?? null,
    [selectedId],
  );

  function handleSelect(id: number) {
    setSelectedId((current) => {
      const nextId = current === id ? null : id;
      if (nextId === null) {
        setIsPlaying(true);
        return null;
      }

      setIsPlaying(false);
      const index = timelineData.findIndex((item) => item.id === nextId);
      if (index >= 0 && timelineData.length > 0) {
        setRotation(280 - (index / timelineData.length) * 360);
      }
      return nextId;
    });
  }

  return (
    <div
      className="relative w-full min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-earth-200/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,240,225,0.88)_48%,rgba(232,223,201,0.82)_100%)] p-5 shadow-[0_34px_90px_rgba(74,53,32,0.12)] sm:min-h-[36rem] sm:p-6"
      onClick={() => {
        setSelectedId(null);
        setIsPlaying(true);
      }}
    >
      <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-earth-300/90 to-transparent" />
      <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-terracotta/12 blur-3xl" />
      <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-forest/12 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="inline-flex items-center rounded-full border border-earth-300/80 bg-white/70 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-earth-900 transition-colors">
              Loam process orbit
            </div>
            <h3 className="mt-4 font-heading text-3xl leading-[0.94] tracking-[-0.04em] text-earth-950">
              One engagement. Multiple layers moving together.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-earth-900/66">
              Click any node to inspect how strategy, flagship design, and
              growth systems connect across the work.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-8 items-center justify-center rounded-full border border-earth-300/80 bg-white/72 px-3 text-xs font-semibold text-earth-950 transition-colors hover:bg-earth-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 self-start"
            onClick={(event) => {
              event.stopPropagation();
              setIsPlaying((current) => !current);
            }}
          >
            {isPlaying ? (
              <Pause className="mr-2 h-3.5 w-3.5" />
            ) : (
              <Play className="mr-2 h-3.5 w-3.5" />
            )}
            {isPlaying ? "Pause orbit" : "Resume orbit"}
          </button>
        </div>

        <div className="relative min-h-[20rem]">
          <div className="absolute left-1/2 top-[44%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-terracotta via-forest-light to-forest shadow-[0_0_0_16px_rgba(255,255,255,0.34),0_24px_60px_rgba(61,107,79,0.2)]">
            <div className="absolute inset-3 rounded-full border border-white/35" />
            <div className="absolute inset-6 rounded-full bg-white/78 backdrop-blur-sm" />
          </div>
          <div className="absolute left-1/2 top-[44%] h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-earth-300/65" />
          <div className="absolute left-1/2 top-[44%] h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-earth-300/35" />

          {timelineData.map((item, index) => {
            const angle =
              (((index / timelineData.length) * 360 + rotation) * Math.PI) /
              180;
            const x = Number((136 * Math.cos(angle)).toFixed(3));
            const y = Number((136 * Math.sin(angle)).toFixed(3));
            const opacity = Number(
              Math.max(
                0.48,
                Math.min(1, 0.56 + ((1 + Math.sin(angle)) / 2) * 0.44),
              ).toFixed(3),
            );
            const scale = Number(
              (0.92 + ((1 + Math.cos(angle)) / 2) * 0.16).toFixed(3),
            );
            const zIndex = Math.round(100 + 40 * Math.cos(angle));
            const isSelected = selectedId === item.id;
            const isConnected =
              !!selectedId &&
              (
                timelineData.find((entry) => entry.id === selectedId)
                  ?.relatedIds ?? []
              ).includes(item.id);
            const isHighlighted = highlightedIds[item.id];
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className="group absolute left-1/2 top-[44%] cursor-pointer text-left transition-all duration-700"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isSelected ? 1.14 : scale})`,
                  opacity: isSelected ? 1 : opacity,
                  zIndex: isSelected ? 200 : zIndex,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  handleSelect(item.id);
                }}
              >
                <div
                  className={`absolute -inset-3 rounded-full ${isHighlighted ? "animate-pulse" : ""}`}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(61,107,79,0.18) 0%, rgba(212,196,168,0.08) 44%, rgba(255,255,255,0) 72%)",
                  }}
                />
                <div
                  className={[
                    "relative flex h-12 w-12 items-center justify-center rounded-full border text-earth-950 shadow-[0_16px_36px_rgba(74,53,32,0.12)] transition-all duration-300",
                    isSelected
                      ? "border-earth-950 bg-earth-950 text-cream"
                      : isConnected
                        ? "border-forest/40 bg-white text-forest-deep"
                        : "border-earth-300/80 bg-white/84 text-earth-950",
                  ].join(" ")}
                >
                  <Icon size={16} />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-[3.5rem] -translate-x-1/2 whitespace-nowrap text-center">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      isSelected ? "text-earth-950" : "text-earth-900/58"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedItem ? (
          <div
            className="mx-auto w-full max-w-[26rem] rounded-[1.8rem] border border-earth-300/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(245,240,225,0.86))] text-earth-950 shadow-[0_24px_60px_rgba(74,53,32,0.12)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col space-y-1.5 p-6 pb-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${getStatusClass(selectedItem.status)}`}
                  >
                    {selectedItem.status.replace("-", " ")}
                  </div>
                  <h3 className="mt-3 font-heading text-[1.6rem] font-semibold leading-none tracking-[-0.03em]">
                    {selectedItem.title}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-earth-900/46">
                  {selectedItem.date}
                </span>
              </div>
            </div>

            <div className="space-y-4 p-6 pt-0 text-sm leading-relaxed text-earth-900/72">
              <p>{selectedItem.content}</p>

              <div className="rounded-[1.35rem] border border-earth-200/80 bg-white/72 p-4">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-earth-900/54">
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-terracotta" />
                    Energy
                  </span>
                  <span>{selectedItem.energy}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-earth-200/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-terracotta via-forest-light to-forest"
                    style={{ width: `${selectedItem.energy}%` }}
                  />
                </div>
              </div>

              {selectedItem.relatedIds.length > 0 ? (
                <div className="border-t border-earth-200/80 pt-4">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-earth-900/52">
                    <Link2 className="h-3.5 w-3.5 text-forest" />
                    Connected nodes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.relatedIds.map((id) => {
                      const relatedItem = timelineData.find(
                        (item) => item.id === id,
                      );
                      if (!relatedItem) {
                        return null;
                      }

                      return (
                        <button
                          key={id}
                          type="button"
                          className="inline-flex h-8 items-center justify-center rounded-full border border-earth-300/80 bg-white/72 px-3 text-xs font-semibold text-earth-950 transition-colors hover:bg-earth-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSelect(id);
                          }}
                        >
                          {relatedItem.title}
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
