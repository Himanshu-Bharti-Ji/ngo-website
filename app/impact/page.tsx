import PageHero from "../components/PageHero";
import { Award, TrendingUp, Users, Heart, CheckCircle } from "lucide-react";
import { impactContent } from "../content/pagesContent";

const storyIconMap: Record<string, React.ReactNode> = {
  award: <Award size={28} className="text-amber-400" />,
  heart: <Heart size={28} className="text-amber-400" />,
  trending: <TrendingUp size={28} className="text-amber-400" />,
  users: <Users size={28} className="text-amber-400" />,
};

const storyImages = [
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
];

const byNumbersBg = [
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
];

const byNumbersLabels = ["Education", "Healthcare", "Livelihood", "Community"];
const byNumbersKeys = ["education", "healthcare", "livelihood", "community"] as const;

export default function Impact() {
  const { hero, stats, stories, byNumbers } = impactContent;

  return (
    <>
      <PageHero image={hero.image} title={hero.title} subtitle={hero.subtitle} />

      {/* STAT TILES — dark with color accents */}
      <section className="bg-[#0d2b1a] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-3">Our achievements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{fontFamily:"'Playfair Display', serif"}}>
              The numbers behind <em className="text-emerald-400">the mission.</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label}
                className={`rounded-2xl p-5 sm:p-7 text-center border transition-all hover:-translate-y-1 ${i===0?"bg-emerald-600 border-emerald-500":i===1?"bg-amber-500 border-amber-400":"bg-white/5 border-white/10 hover:bg-white/10"}`}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <div className="w-6 h-0.5 bg-white/40 rounded-full mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES — photo cards, not white boxes */}
      <section className="py-16 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Real people, real change</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
              Success <em className="text-emerald-700">stories.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stories.map((story, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Photo background */}
                <img src={storyImages[i]} alt={story.title} className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/50 to-transparent" />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                      {storyIconMap[story.icon] || <Award size={22} className="text-amber-400" />}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white" style={{fontFamily:"'Playfair Display', serif"}}>{story.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{story.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS — image cards per category */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Detailed breakdown</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
              By the <em className="text-emerald-700">numbers.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {byNumbersKeys.map((key, i) => (
              <div key={key} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img src={byNumbersBg[i]} alt={byNumbersLabels[i]} className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/98 via-[#0d2b1a]/70 to-[#0d2b1a]/20" />
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle size={18} className="text-emerald-400" />
                    <h4 className="text-base sm:text-lg font-bold text-emerald-300 uppercase tracking-wider text-sm">{byNumbersLabels[i]}</h4>
                  </div>
                  <ul className="space-y-2">
                    {byNumbers[key].map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-200">
                        <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}