import Link from "next/link";
import { ngo, navigationLinks, socialLinks } from "../content/siteConfig";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook size={16} />,
  Instagram: <Instagram size={16} />,
  YouTube: <Youtube size={16} />,
  LinkedIn: <Linkedin size={16} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const col1 = navigationLinks.slice(0, 5);
  const col2 = navigationLinks.slice(5);

  return (
    <footer className="bg-[#0a1f11] text-slate-200">
      {/* Top strip: newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-emerald-300 mb-1">
                Stay updated
              </p>
              <p className="text-xs text-slate-400">
                Get our newsletter — stories, impact reports, and field updates.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 sm:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M11 2L13.5 7.5H19.5L14.75 11.25L16.75 17L11 13.5L5.25 17L7.25 11.25L2.5 7.5H8.5L11 2Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {ngo.name}
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-emerald-400/70 mb-3">
              {ngo.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {ngo.description}
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                >
                  {socialIcons[s.label] || s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {col1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
              More
            </h4>
            <ul className="space-y-3">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-emerald-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {ngo.contact.addressLine1}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${ngo.contact.phone}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {ngo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${ngo.contact.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {ngo.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold rounded-full transition-colors"
              >
                Donate now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} {ngo.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
            <a href="#" className="hover:text-slate-300">
              Annual Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
