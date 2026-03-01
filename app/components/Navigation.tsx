"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../content/siteConfig";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
        : "bg-white border-b border-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[13px] font-medium rounded-md whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-semibold"
                      : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile: brand name */}
          <span className="lg:hidden text-sm font-bold text-[#0d2b1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Udaan Foundation
          </span>
          <div className="lg:hidden w-8" />
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-1">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-emerald-700 bg-emerald-50 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}