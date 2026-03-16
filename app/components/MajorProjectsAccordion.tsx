"use client";

import React, { useState } from "react";
import { ChevronRightCircle, ChevronDown } from "lucide-react";
import { whatWeDoContent } from "../content/pagesContent";

// ─── Home-page slice: first 5 projects only ───────────────────────────────────
const HOME_PROJECTS = whatWeDoContent.janVikasProjects.slice(0, 5);

// ─── Background images per panel ─────────────────────────────────────────────
const PANEL_IMAGES: Record<string, string> = {
  "childline-district":
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1280&auto=format&fit=crop",
  "railway-childline":
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1280&auto=format&fit=crop",
  "kopal-project":
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1280&auto=format&fit=crop",
  "nabard-shg":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1280&auto=format&fit=crop",
  "dalit-girls-education":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1280&auto=format&fit=crop",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function MajorProjectsAccordion() {
  // Desktop: hover index | Mobile: tap-toggle index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMobileTap = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#092e20]">
      {/* ── Section header ────────────────────────────────────────────────── */}
      <div className="relative z-10 px-6 pt-12 pb-8 sm:pt-14 sm:pb-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">
          Major projects &amp; partnerships
        </p>
        <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6" />
        <h2
          className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          High-impact initiatives
          <br />
          <em className="text-emerald-400">with diverse partners.</em>
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Five of Jan Vikas&apos;s flagship programmes spanning child
          protection, gender justice, education, and sustainable livelihoods.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE  (< lg): vertical tap-to-expand cards
      ════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col divide-y divide-white/10">
        {HOME_PROJECTS.map((project, idx) => {
          const isOpen = activeIndex === idx;
          const imgSrc =
            PANEL_IMAGES[project.key] ??
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1280&auto=format&fit=crop";

          return (
            <div
              key={project.key}
              className="relative overflow-hidden"
              onClick={() => handleMobileTap(idx)}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={imgSrc}
                  alt={project.title}
                  className={[
                    "w-full h-full object-cover transition-all duration-700",
                    isOpen ? "opacity-25 scale-105" : "opacity-10",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-0 transition-colors duration-500",
                    isOpen
                      ? "bg-gradient-to-br from-emerald-900/85 via-emerald-800/70 to-emerald-900/90"
                      : "bg-[#092e20]/80",
                  ].join(" ")}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 px-5 py-4 cursor-pointer select-none">
                {/* Collapsed row: number + title + chevron */}
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "text-[10px] font-bold tracking-[0.2em] shrink-0 transition-colors duration-300",
                      isOpen ? "text-amber-400" : "text-white/30",
                    ].join(" ")}
                  >
                    0{idx + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-white text-base leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-0.5 leading-snug">
                      {project.tagline}
                    </p>
                    {/* Tag pill — always visible */}
                    <span
                      className={[
                        "inline-block mt-1.5 text-[9px] font-bold ",
                        "px-2 py-0.5 rounded-full border transition-colors duration-300",
                        isOpen
                          ? "border-emerald-300/50 text-emerald-300 bg-emerald-900/40"
                          : "border-white/20 text-white/40 bg-white/5",
                      ].join(" ")}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className={[
                      "shrink-0 transition-all duration-300",
                      isOpen ? "rotate-180 text-emerald-400" : "text-white/40",
                    ].join(" ")}
                  />
                </div>

                {/* Expandable description + footer */}
                <div
                  className={[
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen
                      ? "max-h-64 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0",
                  ].join(" ")}
                >
                  <div className="h-0.5 w-12 mb-4 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pb-2">
                    <span className="text-xs font-semibold tracking-wide text-emerald-400 uppercase">
                      Learn more
                    </span>
                    <ChevronRightCircle
                      size={15}
                      strokeWidth={1.8}
                      className="text-emerald-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP  (≥ lg): horizontal hover accordion
      ════════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:flex w-full"
        style={{ height: "clamp(460px, 62vh, 680px)" }}
      >
        {HOME_PROJECTS.map((project, idx) => {
          const isActive = activeIndex === idx;
          const imgSrc =
            PANEL_IMAGES[project.key] ??
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1280&auto=format&fit=crop";

          return (
            <div
              key={project.key}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex((prev) => (prev === idx ? null : idx))
              }
              className={[
                "group relative flex flex-col cursor-pointer overflow-hidden",
                "border-r border-white/10 last:border-r-0",
                "transition-all duration-500 ease-in-out",
                isActive ? "flex-[2.8]" : "flex-1",
              ].join(" ")}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={imgSrc}
                  alt={project.title}
                  className={[
                    "w-full h-full object-cover transition-all duration-700",
                    isActive ? "scale-105 opacity-30" : "opacity-15",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-0 transition-colors duration-500",
                    isActive
                      ? "bg-gradient-to-br from-emerald-900/85 via-emerald-800/70 to-emerald-900/90"
                      : "bg-gradient-to-b from-[#092e20]/40 to-[#092e20]/70",
                  ].join(" ")}
                />
              </div>

              {/* Panel content */}
              <div className="relative z-10 flex flex-col h-full p-8 xl:p-10">
                {/* Index number */}
                <span
                  className={[
                    "text-[10px] font-bold tracking-[0.2em] mb-5 transition-colors duration-300",
                    isActive ? "text-amber-400" : "text-white/30",
                  ].join(" ")}
                >
                  0{idx + 1}
                </span>

                {/* Title */}
                <div className="mb-4">
                  <h3
                    className="text-xl xl:text-2xl font-semibold text-white leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-1 leading-snug">
                    {project.tagline}
                  </p>
                  {/* Animated underline */}
                  <div
                    className={[
                      "h-0.5 mt-4 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400",
                      "transition-all duration-500",
                      isActive ? "w-16" : "w-8",
                    ].join(" ")}
                  />
                </div>

                {/* Tag pill */}
                <span
                  className={[
                    "inline-block text-[10px] font-bold  px-2.5 py-1",
                    "rounded-full border transition-colors duration-300 w-fit",
                    isActive
                      ? "border-emerald-300/50 text-emerald-300 bg-emerald-900/40"
                      : "border-white/20 text-white/40 bg-white/5",
                  ].join(" ")}
                >
                  {project.tag}
                </span>

                {/* Description — reveals on hover */}
                <div
                  className={[
                    "overflow-hidden transition-all duration-700 ease-out",
                    isActive
                      ? "max-h-52 opacity-100 mt-5"
                      : "max-h-0 opacity-0 mt-0",
                  ].join(" ")}
                >
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className={[
                    "mt-auto pt-6 flex items-center justify-between",
                    "transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-40",
                  ].join(" ")}
                >
                  <span className="text-xs font-semibold tracking-wide text-white uppercase">
                    Learn more
                  </span>
                  <ChevronRightCircle
                    size={20}
                    strokeWidth={1.5}
                    className={[
                      "text-white transition-transform duration-300",
                      isActive ? "translate-x-1" : "",
                    ].join(" ")}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── "View all" CTA ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex justify-center py-8 sm:py-10">
        <a
          href="/what-we-do"
          className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                     border border-emerald-500/50 text-emerald-400 text-sm font-semibold
                     hover:bg-emerald-800/40 hover:border-emerald-400 transition-all duration-300"
        >
          View all projects &amp; partnerships
          <ChevronRightCircle
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
