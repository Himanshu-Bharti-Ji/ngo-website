"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { ngo } from "../content/siteConfig";
import { contactContent } from "../content/pagesContent";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const { hero, address, officeHours, formSubjects } = contactContent;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Thank you! We will get back to you soon.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <>
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* CONTACT INFO + FORM */}
      <section className="py-14 sm:py-20 bg-[#fdf8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT: info with photo background cards */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
                Reach us
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a1208] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in <em className="text-emerald-700">touch.</em>
              </h2>

              {/* Contact cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin size={20} className="text-white" />,
                    color: "bg-[#0d2b1a]",
                    label: "Address",
                    content: `${ngo.name}\n${address.line1}\n${address.city}`,
                  },
                  {
                    icon: <Phone size={20} className="text-white" />,
                    color: "bg-emerald-600",
                    label: "Phone",
                    content: ngo.contact.phone,
                    href: `tel:${ngo.contact.phone}`,
                  },
                  {
                    icon: <Mail size={20} className="text-white" />,
                    color: "bg-amber-500",
                    label: "Email",
                    content: ngo.contact.email,
                    href: `mailto:${ngo.contact.email}`,
                  },
                  {
                    icon: <Clock size={20} className="text-white" />,
                    color: "bg-[#1a5c3a]",
                    label: "Hours",
                    content: `${officeHours.weekdays}\n${officeHours.saturday}\n${officeHours.sunday}`,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm sm:text-base text-[#1a1208] hover:text-emerald-700 font-medium transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-[#1a1208] font-medium whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form */}
            <div>
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-7 sm:p-9">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#1a1208] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send us a message
                </h2>
                <p className="text-gray-500 text-sm mb-7">
                  We'll respond within 24 hours on working days.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                    >
                      <option value="">Select a subject</option>
                      {formSubjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="How can we help?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-base transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={16} />
                  </button>

                  {formStatus && (
                    <div className="py-3 px-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-semibold text-center">
                      {formStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
