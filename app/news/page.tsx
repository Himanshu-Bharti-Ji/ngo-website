import PageHero from "../components/PageHero";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { newsContent } from "../content/pagesContent";

const newsImages = [
  "https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/8472016/pexels-photo-8472016.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/6646962/pexels-photo-6646962.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
];

const categoryColors: Record<string, string> = {
  Education: "bg-emerald-500",
  Healthcare: "bg-blue-500",
  Livelihood: "bg-amber-500",
  Community: "bg-purple-500",
};

export default function News() {
  const { hero, items } = newsContent;
  const [featured, ...rest] = items;

  return (
    <>
      <PageHero image={hero.image} title={hero.title} subtitle={hero.subtitle} />

      {/* FEATURED NEWS — large hero card */}
      <section className="py-12 sm:py-16 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">Latest news</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
          </div>

          {/* Featured large card */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 cursor-pointer">
            <img src={newsImages[0]} alt={featured.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`text-xs font-bold text-white rounded-full px-3 py-1 ${categoryColors[featured.category] || "bg-emerald-500"}`}>
                  {featured.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                  <Calendar size={12} />
                  <span>{new Date(featured.date).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})}</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 max-w-2xl" style={{fontFamily:"'Playfair Display', serif"}}>{featured.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base mb-5 max-w-xl line-clamp-2">{featured.description}</p>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm transition-all">
                Read full story <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Grid of remaining news */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img src={newsImages[i+1]} alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold text-white rounded-full px-3 py-1 ${categoryColors[item.category] || "bg-emerald-500"}`}>
                    {item.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={11} />
                    <span>{new Date(item.date).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})}</span>
                  </div>
                  <h3 className="font-bold text-[#1a1208] text-base sm:text-lg leading-snug mb-4 group-hover:text-emerald-700 transition-colors" style={{fontFamily:"'Playfair Display', serif"}}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{item.description}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors">
                    Read more <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER — styled rich section */}
      <section className="relative overflow-hidden"
        style={{backgroundImage:"url('https://images.pexels.com/photos/6646907/pexels-photo-6646907.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-[#0d2b1a]/90" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">Stay connected</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{fontFamily:"'Playfair Display', serif"}}>
            Stay <em className="text-emerald-400">updated.</em>
          </h2>
          <p className="text-slate-300 mb-8 text-sm sm:text-base">
            Subscribe to our newsletter — field stories, impact reports, and program updates delivered to you.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-400 transition-colors" required />
            <button type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}