import Link from "next/link";
import { ngo } from "../content/siteConfig";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#0d2b1a] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + name */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Logomark */}
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400 transition-colors">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L13.5 7.5H19.5L14.75 11.25L16.75 17L11 13.5L5.25 17L7.25 11.25L2.5 7.5H8.5L11 2Z" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight leading-none text-white group-hover:text-emerald-200 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                {ngo.name}
              </span>
              <span className="block text-[10px] text-slate-400 tracking-[0.15em] uppercase mt-0.5">
                {ngo.tagline}
              </span>
            </div>
          </Link>

          {/* Right: contact chips */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${ngo.contact.phone}`}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors">
              <Phone size={13} className="text-emerald-400" />
              {ngo.contact.phone}
            </a>
            <div className="w-px h-4 bg-white/10" />
            <a href={`mailto:${ngo.contact.email}`}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors">
              <Mail size={13} className="text-emerald-400" />
              {ngo.contact.email}
            </a>
            <div className="w-px h-4 bg-white/10" />
            <Link href="/get-involved"
              className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-full transition-colors">
              Donate
            </Link>
          </div>

          {/* Mobile donate */}
          <Link href="/get-involved"
            className="lg:hidden text-xs font-bold bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-full transition-colors">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}