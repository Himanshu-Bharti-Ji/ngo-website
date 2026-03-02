import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import {
  GraduationCap,
  Heart,
  Users,
  Briefcase,
  Users2,
  Leaf,
  PhoneCall,
  TrainFront,
  Scale,
  Sprout,
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
                Programmes that work together.
              </h2>
              <p className="text-slate-200 max-w-2xl text-sm sm:text-base">
                From CHILDLINE and Bridge Course Camps to SHGs, leprosy support and sustainable agriculture, each
                programme strengthens the others to create lasting change.
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
            Programme details
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

      {/* Major Projects & Partnerships */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
              Major projects &amp; partnerships
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-4" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a1208]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              High‑impact initiatives<br />
              <em className="text-emerald-700">with diverse partners.</em>
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-2xl">
              Jan Vikas has a proven track record of managing high‑impact projects with national and international
              sponsors, especially in child protection, women&apos;s rights, sustainable agriculture and the rights of
              leprosy‑affected families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">CHILDLINE 1098 (District collaboration)</h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Child protection · 24x7 helpline
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                A 24‑hour emergency phone service for children in need of care and protection, responding to cases of
                abuse, neglect, missing children and children in distress across the district.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <TrainFront size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Railway CHILDLINE – Narkatiyaganj Railway Station
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Child protection · Railways
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                An initiative to ensure care, protection and well‑being of run‑away, unaccompanied and trafficked
                children who come in contact with the railways at Narkatiyaganj.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Scale size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kopal Project</h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Gender justice · PNDT Act
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Focused on control of female foeticide under the PNDT Act through community monitoring, awareness and
                work with service providers and families.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Users2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">NABARD–supported SHG project</h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    SHGs · skills &amp; empowerment
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Formation and strengthening of women&apos;s Self Help Groups, their empowerment and skill‑development
                training to build sustainable livelihoods and financial inclusion.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Elementary education of Dalit &amp; minority girls
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Education · Bridge Course &amp; learning centres
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Bridge Course Residential Camps and learning centres ensuring elementary education for Dalit and minority
                girls, breaking cycles of child marriage, child labour and long‑term exclusion.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Sprout size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Revival of agriculture‑based livelihoods (running project)
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Agriculture · Nepal‑bordering districts
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Working in Nepal‑bordering districts of Eastern Uttar Pradesh and Northern Bihar to decrease cost of
                production through scientific, area‑specific PoPs and sustainable agriculture practices.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Promotion of educational &amp; health status of women &amp; children
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Health · education · gender
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Interventions that ensure women and children access education, health services and awareness — because
                when women are healthy and informed, families and futures are stronger.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Educational &amp; social welfare support for leprosy‑affected families
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide">
                    Inclusion · rehabilitation
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Long‑term educational, social welfare and psycho‑social support for families affected by leprosy, who
                face profound, multi‑faceted challenges and systemic marginalisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
