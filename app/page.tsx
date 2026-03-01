"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Link from "next/link";
import {
  GraduationCap, Heart, Users, ArrowRight, X, Play,
  Quote, ChevronLeft, ChevronRight, MapPin, Calendar, ArrowUpRight,
} from "lucide-react";
import {
  impactStats, services, homeGalleryImages, homeVideos,
  homeNews, photoStrip, impactStories, testimonials, featuredStory,
} from "./content/homeContent";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const serviceIcons = [<GraduationCap size={24} />, <Heart size={24} />, <Users size={24} />];

  return (
    <>
      <Hero />

      {/* MISSION TAG STRIP */}
      <section className="bg-[#0d2b1a] py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 whitespace-nowrap">Our focus</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Child Education","Primary Healthcare","Women's Livelihoods","Community Dev","Environment"].map((t) => (
              <span key={t} className="text-xs font-medium text-emerald-100/70 border border-emerald-400/20 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
          <Link href="/what-we-do" className="hidden sm:flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-white transition-colors whitespace-nowrap">
            All programs <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative bg-[#fdf8f0] py-16 sm:py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:"radial-gradient(circle at 1px 1px, #16a34a 1px, transparent 0)",backgroundSize:"36px 36px"}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">25 years of work</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1208] leading-tight mb-5" style={{fontFamily:"'Playfair Display', serif"}}>
                Every number<br /><em className="text-emerald-700">tells a story.</em>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-7">
                Behind every statistic is a child who learned to read, a mother who received prenatal care, a family that found economic stability.
              </p>
              <Link href="/impact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-0.5 hover:text-emerald-900 transition-colors">
                Explore our full impact <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {impactStats.map((stat, i) => (
                <div key={stat.label} className={`rounded-2xl p-5 sm:p-6 ${i===0?"bg-[#0d2b1a]":i===1?"bg-emerald-600":i===2?"bg-amber-50 border border-amber-200":"bg-white border border-gray-200"}`}>
                  <p className={`text-3xl sm:text-4xl font-bold mb-1 ${i<2?"text-white":"text-[#0d2b1a]"}`}>{stat.number}</p>
                  <p className={`text-xs sm:text-sm font-medium ${i<2?"text-white/70":"text-gray-600"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLING PHOTO STRIP */}
      <section className="bg-[#1a1208] py-3 overflow-hidden">
        <div className="marquee-track gap-2 px-2">
          {[...photoStrip,...photoStrip].map((src,i) => (
            <div key={i} className="flex-shrink-0 w-52 sm:w-64 h-32 sm:h-40 rounded-xl overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">What we do</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1208] leading-tight" style={{fontFamily:"'Playfair Display', serif"}}>
                Three pillars.<br /><em className="text-emerald-700">One mission.</em>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              Each program strengthens the others — education, health, and livelihoods working as one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service,i) => (
              <div key={service.key} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer">
                <img src={service.imageUrl} alt={service.title}
                  className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                      {serviceIcons[i]}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">{service.key}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{fontFamily:"'Playfair Display', serif"}}>{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/what-we-do" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#0d2b1a] text-[#0d2b1a] font-semibold text-sm hover:bg-[#0d2b1a] hover:text-white transition-all">
              Explore all programs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden">
            <img src={featuredStory.image} alt="Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0d2b1a]/30" />
          </div>
          <div className="bg-[#0d2b1a] flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Quote size={36} className="text-emerald-400/40 mb-5" />
            <p className="text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed mb-7" style={{fontFamily:"'Playfair Display', serif",fontStyle:"italic"}}>
              "{featuredStory.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-1 h-10 bg-amber-500 rounded-full flex-shrink-0" />
              <div>
                <p className="font-bold text-white">{featuredStory.name}</p>
                <p className="text-sm text-slate-400">{featuredStory.detail}</p>
              </div>
            </div>
            <Link href="/impact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white transition-colors">
              Read more stories <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* STORIES FROM THE FIELD */}
      <section className="py-16 sm:py-24 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Voices of change</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
                People we work <em className="text-emerald-700">with.</em>
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => setActiveStory(Math.max(0,activeStory-1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0d2b1a] hover:text-white hover:border-[#0d2b1a] transition-all">
                <ChevronLeft size={17} />
              </button>
              <button onClick={() => setActiveStory(Math.min(impactStories.length-1,activeStory+1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#0d2b1a] hover:text-white hover:border-[#0d2b1a] transition-all">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {impactStories.map((story,i) => (
              <div key={i} className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${i===activeStory?"ring-2 ring-emerald-500 scale-[1.02]":"opacity-80 hover:opacity-100"}`}
                onClick={() => setActiveStory(i)}>
                <div className="relative">
                  <img src={story.image} alt={story.name} className="w-full h-44 sm:h-52 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white rounded-full px-2.5 py-0.5">{story.program}</span>
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-5">
                  <Quote size={18} className="text-emerald-500 mb-2" />
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3 line-clamp-3">"{story.quote}"</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
                    <span className="font-bold text-[#0d2b1a]">{story.name}</span>
                    <span>·</span><MapPin size={11} /><span>{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {impactStories.map((_,i) => (
              <button key={i} onClick={() => setActiveStory(i)}
                className={`rounded-full transition-all ${i===activeStory?"w-6 h-2 bg-emerald-600":"w-2 h-2 bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-16 sm:py-24 bg-[#0d2b1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">From the ground</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{fontFamily:"'Playfair Display', serif"}}>
                Life in our <em className="text-emerald-400">communities.</em>
              </h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white transition-colors self-start sm:self-auto">
              Full gallery <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 auto-rows-[140px] sm:auto-rows-[165px] md:auto-rows-[180px]">
            {homeGalleryImages.map((img,idx) => (
              <button key={idx} type="button" onClick={() => setSelectedImage(idx)}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${idx===0?"col-span-2 row-span-2":idx===3?"col-span-2":""}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="inline-block text-[9px] sm:text-[10px] bg-emerald-500 text-white rounded-full px-2 py-0.5 font-semibold">{img.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Short films</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
                See the impact<br /><em className="text-emerald-700">you make.</em>
              </h2>
            </div>
            <Link href="/media" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-0.5 hover:text-emerald-900 transition-colors self-start sm:self-auto">
              Browse all <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {homeVideos.map((video,idx) => (
              <button key={video.id} type="button" onClick={() => setSelectedVideo(idx)}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden text-left hover:shadow-2xl transition-shadow">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={18} className="text-[#0d2b1a] ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold bg-amber-500 text-white rounded-full px-2 py-0.5">{video.label}</span>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-sm font-semibold text-[#1a1208] line-clamp-2">{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-amber-50 border-y border-amber-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">What people say</p>
          <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-8" />
          <Quote size={40} className="text-amber-200 mx-auto mb-5" />
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#1a1208] mb-7" style={{fontFamily:"'Playfair Display', serif",fontStyle:"italic"}}>
            "{testimonials[activeTestimonial].text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src={testimonials[activeTestimonial].image} alt=""
              className="w-11 h-11 rounded-full object-cover border-2 border-amber-300" />
            <div className="text-left">
              <p className="font-bold text-[#1a1208] text-sm">{testimonials[activeTestimonial].name}</p>
              <p className="text-xs text-gray-500">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-7">
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all ${i===activeTestimonial?"w-7 h-2 bg-amber-600":"w-2 h-2 bg-amber-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-16 sm:py-24 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Latest updates</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
                News from <em className="text-emerald-700">the field.</em>
              </h2>
            </div>
            <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 border-b-2 border-emerald-600 pb-0.5 hover:text-emerald-900 transition-colors self-start sm:self-auto">
              All news <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeNews.map((item,i) => (
              <Link key={i} href={item.href} className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 text-xs font-bold bg-amber-500 text-white rounded-full px-3 py-1">{item.category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3"><Calendar size={11} /><span>{item.date}</span></div>
                  <h3 className="font-bold text-[#1a1208] text-base sm:text-lg leading-snug mb-4 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">Read more <ArrowRight size={11} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section className="py-16 sm:py-24 bg-[#0d2b1a] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">Get involved</p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{fontFamily:"'Playfair Display', serif"}}>
              Your support<br /><em className="text-emerald-400">changes everything.</em>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">There are many ways to walk alongside the communities we serve.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {icon:<Heart size={26}/>,color:"bg-emerald-500",title:"Donate",desc:"Even ₹100 provides meals for 5 children. Every rupee reaches the community directly.",cta:"Make a donation",href:"/get-involved"},
              {icon:<Users size={26}/>,color:"bg-amber-500",title:"Volunteer",desc:"Teach, assist in health camps, or support operations. Your skills can transform lives.",cta:"Join as volunteer",href:"/get-involved"},
              {icon:<GraduationCap size={26}/>,color:"bg-[#1a5c3a]",title:"Partner",desc:"CSR partnerships, corporate volunteering, and institutional collaborations.",cta:"Explore partnerships",href:"/get-involved"},
            ].map((card) => (
              <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-7 hover:bg-white/10 transition-all group">
                <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>{card.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{fontFamily:"'Playfair Display', serif"}}>{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">{card.desc}</p>
                <Link href={card.href} className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-white transition-colors">
                  {card.cta} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA — fixed: inline style backgroundImage so photo actually loads */}
      <section className="relative overflow-hidden"
        style={{backgroundImage:"url('https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1a]/97 via-[#0d2b1a]/80 to-[#0d2b1a]/30" />
        <div className="relative flex flex-col justify-center min-h-[320px] sm:min-h-[380px] py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/60 mb-4">Start today</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-xl leading-tight" style={{fontFamily:"'Playfair Display', serif"}}>
              Your support can<br />change a child's story.
            </h2>
            <p className="text-slate-300 mb-8 max-w-md text-sm sm:text-base">
              Partner with us as a donor, volunteer, or community champion and help us reach the next 50,000 lives.
            </p>
            <Link href="/get-involved"
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm sm:text-base shadow-lg shadow-amber-500/30 transition-all">
              Get involved today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage!==null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 text-white/70 hover:text-white"><X size={26}/></button>
            <img src={homeGalleryImages[selectedImage].src} alt={homeGalleryImages[selectedImage].alt} className="w-full max-h-[72vh] object-contain rounded-2xl" />
            <div className="mt-3 flex items-center justify-between px-1">
              <p className="text-xs sm:text-sm text-white/70">{homeGalleryImages[selectedImage].alt}</p>
              <span className="text-emerald-400 text-xs font-semibold">{homeGalleryImages[selectedImage].label}</span>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <button onClick={() => setSelectedImage(selectedImage===0?homeGalleryImages.length-1:selectedImage-1)}
                className="px-4 sm:px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium flex items-center gap-1"><ChevronLeft size={15}/>Prev</button>
              <button onClick={() => setSelectedImage((selectedImage+1)%homeGalleryImages.length)}
                className="px-4 sm:px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-sm font-medium flex items-center gap-1">Next<ChevronRight size={15}/></button>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo!==null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-white/70 hover:text-white"><X size={26}/></button>
            <div className="rounded-2xl overflow-hidden bg-black">
              <div className="aspect-video">
                <iframe className="w-full h-full" src={homeVideos[selectedVideo].url} title={homeVideos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="p-4 sm:p-5 bg-[#0d2b1a]">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">{homeVideos[selectedVideo].label}</p>
                <p className="font-semibold text-white text-sm sm:text-base">{homeVideos[selectedVideo].title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}