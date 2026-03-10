import Link from "next/link";
import PageHero from "../components/PageHero";
import { Users, Heart, Eye, ArrowRight } from "lucide-react";
import { teamContent } from "../content/pagesContent";
import { NGO } from "../content/ngoImages";

const cultureIconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={32} className="text-white" />,
  eye: <Eye size={32} className="text-white" />,
  users: <Users size={32} className="text-white" />,
};

const cultureBg = [
  NGO.childlineCommunityMeet,
  NGO.farmVisit,
  NGO.sewingTraining,
];

export default function Team() {
  const { hero, president, members, culture } = teamContent;

  return (
    <>
      {/* Page hero uses founder image as background */}
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* PRESIDENT HIGHLIGHT SECTION */}
      <section className="bg-[#0d2b1a] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] gap-10 items-center">
          {/* Large portrait */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/60 border border-emerald-700/40">
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-[420px] sm:h-[460px] object-cover object-top-left scale-125"
              />
            </div>
          </div>

          {/* Text block */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300/70 mb-4">
              Leadership
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {president.name}
            </h2>
            <p className="text-amber-300 font-semibold text-sm sm:text-base mb-4">
              {president.position}
            </p>
            <p className="text-sm sm:text-base text-emerald-100/90 mb-4">
              {president.highlight}
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {president.bio}
            </p>
          </div>
        </div>
      </section>

      {/* CORE TEAMS — cards with same portrait icon */}
      <section className="py-16 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
                The people driving change
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-4" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a1208]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our core <em className="text-emerald-700">teams.</em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl">
              Jan Vikas works through small, committed teams of field
              coordinators, community organisers and support staff rooted in the
              villages of West Champaran and neighbouring districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white shadow-sm hover:shadow-xl border border-amber-100 overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* top strip with mini photo */}
                <div className="flex items-center gap-4 px-5 pt-5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-emerald-700/40 bg-emerald-900/10">
                    <img
                      src={NGO.founderPortrait}
                      alt="Jan Vikas leadership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 mb-1">
                      {member.position}
                    </p>
                    <h3
                      className="text-lg font-semibold text-[#1a1208]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {member.name}
                    </h3>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 flex-1">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CULTURE — uses real NGO images now */}
      <section className="py-16 sm:py-20 bg-[#0d2b1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">
              Who we are
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-5" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our team <em className="text-emerald-400">culture.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {culture.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl group"
              >
                <img
                  src={cultureBg[i % cultureBg.length]}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/70 to-[#0d2b1a]/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center mb-4">
                    {cultureIconMap[item.icon] || (
                      <Heart size={28} className="text-white" />
                    )}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA — keep but use NGO image if you like */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${NGO.sewingTraining})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1a]/97 via-[#0d2b1a]/85 to-[#0d2b1a]/50" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">
            Work with us
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join our growing team.
          </h2>
          <p className="text-slate-300 mb-8 max-w-md text-sm sm:text-base">
            We welcome committed individuals who want to work with children,
            women and farmers in some of the most marginalised communities of
            Bihar.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm sm:text-base transition-all shadow-lg shadow-amber-500/30"
          >
            Contact for opportunities <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
