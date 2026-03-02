import { ngo } from "../content/siteConfig";

type PageHeroProps = {
  image: string;
  title: string;
  subtitle: string;
  useNgoInTitle?: boolean;
};

export default function PageHero({ image, title, subtitle, useNgoInTitle }: PageHeroProps) {
  const displayTitle = useNgoInTitle ? `${title} ${ngo.shortName}` : title;

  return (
    <div className="relative h-[52vh] min-h-[340px] overflow-hidden">
      {/* Background */}
      <img src={image} alt={displayTitle}
        className="absolute inset-0 w-full h-full object-cover hero-zoom" />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1a]/95 via-[#0d2b1a]/75 to-[#0d2b1a]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f11]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-14 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-amber-400 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            {ngo.name}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          {displayTitle}
        </h1>

        {/* Divider + subtitle */}
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 mb-4" />
        <p className="text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#fdf8f0] to-transparent" /> */}
    </div>
  );
}