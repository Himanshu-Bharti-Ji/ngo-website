import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  description,
  imageUrl,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-pointer">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img src={imageUrl} alt={title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
            {icon}
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#0d2b1a] group-hover:text-white group-hover:border-[#0d2b1a] transition-all duration-300">
            <ArrowUpRight size={14} />
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#1a1208] mb-3 group-hover:text-emerald-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>

        <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-3 group-hover:w-16 transition-all duration-300" />

        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}