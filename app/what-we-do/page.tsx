import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import {
  GraduationCap,
  Heart,
  Users,
  Briefcase,
  Users2,
  Leaf,
} from "lucide-react";
import { whatWeDoContent } from "../content/pagesContent";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  education: <GraduationCap size={40} />,
  healthcare: <Heart size={40} />,
  community: <Users size={40} />,
  skills: <Briefcase size={40} />,
  family: <Users2 size={40} />,
  environment: <Leaf size={40} />,
};

export default function WhatWeDo() {
  const { hero, programs, programDetails } = whatWeDoContent;

  return (
    <>
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Main Programs */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center justify-center px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/40">
                Core pillars
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">
                Programs that work together.
              </h2>
              <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
                From classrooms and health camps to self-help groups, each
                program strengthens the others to create lasting change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {programs.map((program) => (
              <ServiceCard
                key={program.key}
                icon={iconMap[program.key] || <Users size={40} />}
                title={program.title}
                description={program.description}
                imageUrl={program.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Description */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Program Details
          </h2>

          {programDetails.map((detail, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 mb-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                {detail.title}
              </h3>
              <p className="text-gray-700 mb-4">{detail.intro}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {detail.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
