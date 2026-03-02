"use client";

import { useState } from "react";

type ViewLevel = "india" | "bihar";

export default function IndiaOperationsMap() {
  const [view, setView] = useState<ViewLevel>("india");
  const isIndiaView = view === "india";

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-xs font-semibold text-slate-100 tracking-wide">
            Jan Vikas geographic footprint
          </p>
        </div>

        <div className="inline-flex rounded-full bg-slate-800 p-0.5 text-[11px] text-slate-300">
          <button
            onClick={() => setView("india")}
            className={`px-3 py-1 rounded-full transition ${
              isIndiaView ? "bg-emerald-500 text-white" : ""
            }`}
          >
            India
          </button>
          <button
            onClick={() => setView("bihar")}
            className={`px-3 py-1 rounded-full transition ${
              !isIndiaView ? "bg-emerald-500 text-white" : ""
            }`}
          >
            Bihar & border belt
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-64 sm:h-80 bg-slate-950 overflow-hidden">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out ${
            isIndiaView
              ? "scale-100 translate-x-0 translate-y-0"
              : "scale-[2.8] -translate-x-[22%]"
          }`}
        >
          {/* India Image */}
          <img
            src="/india-map.png"
            alt="India Map"
            className="max-h-full max-w-full object-contain pointer-events-none"
          />

          {/* Bettiah Marker */}
          <div
            className={`absolute ${
              isIndiaView ? "left-[56.5%] top-[35%]" : "left-[56.5%] top-[37%]"
            }`}
          >
            <div className="relative flex items-center gap-2">
              {/* Dot */}
              <div
                className={` ${isIndiaView ? "w-2.5 h-2.5" : "w-1.5 h-1.5"} bg-emerald-400 rounded-full shadow-md shadow-emerald-500/40 transition-all ease-in-out`}
              />

              {/* Soft Pulse Ring */}
              <div className="absolute w-5 h-5 -left-1 -top-1 border border-emerald-400/40 rounded-full animate-ping" />

              {/* Label */}
              <span
                className={`ml-3  ${isIndiaView ? "text-[16px]" : "text-[6px]"} text-emerald-200 font-semibold whitespace-nowrap`}
              >
                Bettiah · West Champaran
              </span>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent">
          <p className="text-[11px] text-slate-200">
            Main areas of operation: West Champaran, East Champaran and
            Sitamarhi districts of Bihar; agriculture-based livelihood
            initiatives in Nepal-bordering districts of Eastern Uttar Pradesh.
          </p>
        </div>
      </div>
    </div>
  );
}
