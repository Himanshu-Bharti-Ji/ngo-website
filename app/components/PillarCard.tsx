"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

type PillarCardProps = {
  service: {
    key: string;
    title: string;
    description: string;
    imageUrl: string;
  };
  icon: React.ReactNode;
};

const PillarCard: React.FC<PillarCardProps> = ({ service, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-56 sm:h-64 md:h-72 object-cover transition-all duration-500 ease-in-out md:group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/40 to-transparent" />

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        {/* icon + key */}
        {/* <div className="flex items-center gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            {icon}
          </div>

          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
            {service.key}
          </span>
        </div> */}

        {/* animated container */}
        <div className="transition-all duration-500 ease-in-out md:translate-y-12 md:group-hover:translate-y-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            {service.title}
          </h3>

          {/* description */}
          <p className="text-slate-100 text-sm mt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            {service.description}
          </p>
        </div>
      </div>

      {/* arrow */}

      <div className="absolute top-4 right-4 rounded-full px-2.5 py-1 bg-emerald-500/60 border border-emerald-400/40 flex items-center justify-center">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">
          {service.key}
        </span>
      </div>
    </div>
  );
};

export default PillarCard;
