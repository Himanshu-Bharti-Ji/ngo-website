import Link from "next/link";
import PageHero from "../components/PageHero";
import { Users, Heart, Eye, ArrowRight } from "lucide-react";
import { teamContent } from "../content/pagesContent";

const memberImages = [
  "https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
  "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
  "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
  "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
];

const cultureIconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={32} className="text-white" />,
  eye: <Eye size={32} className="text-white" />,
  users: <Users size={32} className="text-white" />,
};

const cultureBg = [
  "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop",
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop",
];

export default function Team() {
  const { hero, members, culture } = teamContent;

  return (
    <>
      <PageHero image={hero.image} title={hero.title} subtitle={hero.subtitle} />

      {/* LEADERSHIP TEAM — photo overlay cards */}
      <section className="py-16 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">The people driving change</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
              Leadership <em className="text-emerald-700">team.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {members.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer">
                <img src={memberImages[i % memberImages.length]} alt={member.name}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Gradient overlay — always partially visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a] via-[#0d2b1a]/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">{member.position}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{fontFamily:"'Playfair Display', serif"}}>{member.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CULTURE — photo background tiles */}
      <section className="py-16 sm:py-20 bg-[#0d2b1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">Who we are</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{fontFamily:"'Playfair Display', serif"}}>
              Our team <em className="text-emerald-400">culture.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {culture.map((item, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
                <img src={cultureBg[i]} alt={item.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/60 to-[#0d2b1a]/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center mb-4">
                    {cultureIconMap[item.icon] || <Heart size={28} className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{fontFamily:"'Playfair Display', serif"}}>{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA — background image */}
      <section className="relative overflow-hidden"
        style={{backgroundImage:"url('https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1a]/97 via-[#0d2b1a]/85 to-[#0d2b1a]/50" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">Work with us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-xl leading-tight" style={{fontFamily:"'Playfair Display', serif"}}>
            Join our growing team.
          </h2>
          <p className="text-slate-300 mb-8 max-w-md text-sm sm:text-base">
            We're always looking for talented and passionate individuals. If you're driven by purpose, there's a place for you here.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm sm:text-base transition-all shadow-lg shadow-amber-500/30">
            Contact for opportunities <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}