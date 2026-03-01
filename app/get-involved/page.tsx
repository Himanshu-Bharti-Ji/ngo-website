"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Users, Handshake, ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import { ngo } from "../content/siteConfig";
import { getInvolvedContent } from "../content/pagesContent";

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState("donate");
  const { hero, donationImpact, volunteerOpportunities, partnershipTypes } = getInvolvedContent;

  const tabs = [
    { id: "donate", label: "Donate", icon: <Heart size={18} /> },
    { id: "volunteer", label: "Volunteer", icon: <Users size={18} /> },
    { id: "partner", label: "Partner", icon: <Handshake size={18} /> },
  ];

  return (
    <>
      <PageHero image={hero.image} title={hero.title} subtitle={hero.subtitle} />

      {/* TAB SWITCHER */}
      <section className="bg-[#0d2b1a] py-6 sticky top-12 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-3">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab===tab.id?"bg-amber-500 text-white shadow-lg shadow-amber-500/30":"bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* DONATE TAB */}
      {activeTab === "donate" && (
        <section className="py-16 sm:py-20 bg-[#fdf8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Make a difference</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208] mb-5" style={{fontFamily:"'Playfair Display', serif"}}>
                  Every rupee<br /><em className="text-emerald-700">reaches a life.</em>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Your donation directly impacts thousands. Whether a one-time contribution or a monthly commitment, every amount creates real change.
                </p>

                {/* Impact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {donationImpact.map((item, i) => (
                    <div key={i} className={`rounded-2xl p-4 border ${i===0?"bg-[#0d2b1a] border-[#0d2b1a]":i===1?"bg-emerald-600 border-emerald-600":"bg-white border-gray-200"}`}>
                      <p className={`text-xl font-bold mb-1 ${i<2?"text-white":"text-emerald-700"}`}>{item.amount}</p>
                      <p className={`text-xs leading-relaxed ${i<2?"text-white/70":"text-gray-600"}`}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-base transition-colors shadow-lg shadow-emerald-600/30">
                  Donate Now
                </button>
              </div>

              {/* Right: why donate */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img src="https://images.pexels.com/photos/8500300/pexels-photo-8500300.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop"
                  alt="Why donate" className="w-full h-64 sm:h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/95 via-[#0d2b1a]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{fontFamily:"'Playfair Display', serif"}}>
                    Why support {ngo.shortName}?
                  </h3>
                  <ul className="space-y-3">
                    {[{label:"Transparent",desc:"Complete transparency in fund utilization"},{label:"Impact Driven",desc:"Every rupee creates maximum social impact"},{label:"Tax Benefits",desc:"Registered 80G NGO — donations are tax deductible"},{label:"Regular Updates",desc:"Updates on how your donation is making a difference"}].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={11} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white">{item.label}</span>
                          <span className="text-slate-400 text-sm"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VOLUNTEER TAB */}
      {activeTab === "volunteer" && (
        <section className="py-16 sm:py-20 bg-[#fdf8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Give your time</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
                Volunteer with <em className="text-emerald-700">us.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Opportunities */}
              <div>
                <p className="text-gray-600 mb-7 leading-relaxed">
                  Whether you have specific skills or just the will to help, there's a place for you. Volunteers are the backbone of our programs.
                </p>
                <div className="space-y-3">
                  {volunteerOpportunities.map((opp, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                      <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all rounded-2xl">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1a1208] mb-1 text-sm sm:text-base">{opp.title}</h4>
                          <p className="text-gray-500 text-sm">{opp.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  className="mt-7 inline-flex items-center gap-2 px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-sm transition-all shadow-lg shadow-emerald-600/20">
                  Register as Volunteer <ArrowRight size={15} />
                </Link>
              </div>

              {/* Benefits — photo card */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img src="https://images.pexels.com/photos/7100371/pexels-photo-7100371.jpeg?auto=compress&cs=tinysrgb&w=700&h=800&fit=crop"
                  alt="Volunteer" className="w-full h-72 sm:h-80 lg:h-full min-h-[300px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/97 via-[#0d2b1a]/60 to-[#0d2b1a]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-5" style={{fontFamily:"'Playfair Display', serif"}}>Benefits of volunteering</h3>
                  <ul className="space-y-3">
                    {[{t:"Personal Growth",d:"New skills and valuable experience in social work"},{t:"Community Connection",d:"Connect with like-minded change-makers"},{t:"Certification",d:"Volunteer certificate and letter of appreciation"},{t:"Real Impact",d:"Directly improve lives in underserved communities"}].map((b,i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={11} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white">{b.t}</span>
                          <span className="text-slate-400 text-sm"> — {b.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PARTNER TAB */}
      {activeTab === "partner" && (
        <section className="py-16 sm:py-20 bg-[#fdf8f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">Collaborate with us</p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1208]" style={{fontFamily:"'Playfair Display', serif"}}>
                Partner for <em className="text-emerald-700">impact.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="text-gray-600 mb-7 leading-relaxed">
                  We welcome partnerships with organizations, corporations, and institutions that share our vision of social change and community development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                  {partnershipTypes.map((p, i) => (
                    <div key={i} className={`rounded-2xl p-5 border ${i===0?"bg-[#0d2b1a] border-[#0d2b1a]":i===1?"bg-emerald-600 border-emerald-600":"bg-white border-gray-200"}`}>
                      <h4 className={`font-bold mb-2 text-sm ${i<2?"text-white":"text-[#1a1208]"}`}>{p.title}</h4>
                      <p className={`text-xs leading-relaxed ${i<2?"text-white/70":"text-gray-500"}`}>{p.text}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-sm transition-all shadow-lg shadow-emerald-600/20">
                  Explore partnerships <ArrowRight size={15} />
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img src="https://images.pexels.com/photos/8844781/pexels-photo-8844781.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop"
                  alt="Partner" className="w-full h-72 sm:h-80 lg:h-full min-h-[300px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1a]/97 via-[#0d2b1a]/60 to-[#0d2b1a]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-5" style={{fontFamily:"'Playfair Display', serif"}}>Why partner with us?</h3>
                  <ul className="space-y-3">
                    {[{t:"Established Credibility",d:"25+ years of proven impact"},{t:"Scalable Impact",d:"Leverage our network to scale social initiatives"},{t:"Transparent Operations",d:"Clear reporting and measurable outcomes"},{t:"Pan-India Reach",d:"Active presence across 120+ communities"}].map((b,i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={11} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white">{b.t}</span>
                          <span className="text-slate-400 text-sm"> — {b.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="bg-[#0d2b1a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{fontFamily:"'Playfair Display', serif"}}>
              Ready to make a difference?
            </h2>
            <p className="text-slate-400 text-sm">Contact us today to learn more about how you can get involved.</p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full text-sm transition-all">
            Get in touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}