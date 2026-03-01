"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { heroSlides, impactStats } from "../content/homeContent";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-[70vh] md:h-[80vh]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full overflow-hidden">
              {/* Background image with zoom animation */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover hero-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/50" />
              </div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                  {slide.eyebrow && (
                    <p className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-500/40 mb-4">
                      {slide.eyebrow}
                    </p>
                  )}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-100/85 mb-8">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Link
                      href={slide.primaryCta.href}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
                    >
                      {slide.primaryCta.label}
                    </Link>
                    {slide.secondaryCta && (
                      <Link
                        href={slide.secondaryCta.href}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors"
                      >
                        {slide.secondaryCta.label}
                      </Link>
                    )}
                  </div>

                  {slide.badge && (
                    <p className="text-xs sm:text-sm text-emerald-200">
                      {slide.badge}
                    </p>
                  )}
                </div>

                {/* Small stats strip under content, using same theme */}
                <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
                  {impactStats.slice(0, 3).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-slate-900/70 border border-white/10 px-3 py-2"
                    >
                      <dt className="text-slate-300">{stat.label}</dt>
                      <dd className="text-lg sm:text-xl font-bold text-emerald-300">
                        {stat.number}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}