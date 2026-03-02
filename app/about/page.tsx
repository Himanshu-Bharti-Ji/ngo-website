import IndiaOperationsMap from "../components/IndiaOperationsMap";
import PageHero from "../components/PageHero";
import { aboutContent } from "../content/pagesContent";
import { Landmark, Users, BookOpen } from "lucide-react";

export default function About() {
  const { hero, mission, vision, values, story, achievements } = aboutContent; 
  return (
    <>
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* At a glance */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/70 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-2">
                Years of work
              </p>
              <p className="text-3xl font-extrabold text-emerald-300 mb-1">
                25+
              </p>
              <p className="text-sm text-slate-200">
                years walking alongside communities across India.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-2">
                Lives touched
              </p>
              <p className="text-3xl font-extrabold text-emerald-300 mb-1">
                50,000+
              </p>
              <p className="text-sm text-slate-200">
                children, youth and families supported through our programs.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 px-6 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 mb-2">
                Communities
              </p>
              <p className="text-3xl font-extrabold text-emerald-300 mb-1">
                120+
              </p>
              <p className="text-sm text-slate-200">
                partner communities building a better future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                {mission.title}
              </h3>
              <p className="text-gray-700">{mission.text}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                {vision.title}
              </h3>
              <p className="text-gray-700">{vision.text}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                {values.title}
              </h3>
              <p className="text-gray-700">{values.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Status & Registrations */}
      <section className="bg-[#0d2b1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/70 mb-3">
              Legal status
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-4" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Registered, compliant<br />
              <em className="text-emerald-300">and accountable.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-100">
            <ul className="space-y-2">
              <li>• Registration under Society Registration Act XXI of 1860</li>
              <li>• Registration No. 255/91-92</li>
              <li>• Registration under FCRA Act 1976</li>
              <li>• FCRA Registration No. 031270022/98-99</li>
            </ul>
            <ul className="space-y-2">
              <li>• Registration under Section 12(A) of Income Tax Act 1961 (1998–99)</li>
              <li>• 12(A) Registration renewed and valid up to AY 2036–37</li>
              <li>• PAN No. AAAA2009D</li>
              <li>• Renewed FCRA certificate valid from 01/04/2023 to 31/12/2028</li>
            </ul>
          </div>
        </div>
      </section>
e

      {/* History & Background */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">{story.title}</h2>
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            {story.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-gray-700 text-lg leading-relaxed ${
                  i < story.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stakeholders & Focus Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
              Who we work with
            </p>
            <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-4" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Key stakeholders &amp;<br />
              <em className="text-emerald-700">focus groups.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Youth &amp; children (0–18 years)</h3>
              <p className="text-sm text-gray-700">
                Protecting and educating children through Bridge Course Camps, learning centres and CHILDLINE services.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Women &amp; girls</h3>
              <p className="text-sm text-gray-700">
                Minority girls, Mahila Mandals and women&apos;s Self Help Groups building voice, health and livelihoods.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Marginalised communities</h3>
              <p className="text-sm text-gray-700">
                Dalit communities and leprosy‑affected families facing exclusion, stigma and multiple deprivations.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Landmark size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Farmers</h3>
              <p className="text-sm text-gray-700">
                Small and marginal farmers adopting sustainable agriculture and low‑cost Packages of Practices (PoPs).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic span & infrastructure with India map */}
      <section className="bg-[#fdf8f0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
                Geographic span &amp; infrastructure
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-5" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a1208] mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Rooted in West Champaran,<br />
                connected to the border region.
              </h2>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>
                  <strong>West Champaran district:</strong> approx. 5,225 sq. km, with about 3,000 sq. km plains area.
                </li>
                <li>
                  <strong>Established as a district:</strong> 1972.
                </li>
                <li>
                  <strong>Surrounded by:</strong> Nepal (North), Gopalganj (South), East Champaran (East), Uttar Pradesh (West).
                </li>
                <li>
                  <strong>Main areas of operation:</strong> West Champaran, East Champaran and Sitamarhi districts of Bihar;
                  Nepal‑bordering districts of Eastern Uttar Pradesh.
                </li>
                <li>
                  <strong>Infrastructure:</strong> Jan Vikas owns 0.35 acres of land in Pathkhauli village with a well‑furnished building
                  used for innovative schooling and agricultural projects.
                </li>
              </ul>
            </div>
            <IndiaOperationsMap />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Key Achievements
          </h2>
          <ul className="max-w-2xl mx-auto space-y-4 text-gray-700">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership profile */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-emerald-500/40 bg-gradient-to-b from-emerald-500/20 to-slate-900 shadow-xl">
                <div className="h-72 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                    alt="President of Jan Vikas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-2">
                    Leadership profile
                  </p>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mr. Abdul&nbsp;Majeed
                  </h3>
                  <p className="text-sm font-semibold text-emerald-200 mb-2">
                    President, Jan Vikas
                  </p>
                  <p className="text-xs text-slate-400">
                    Around 34 years of experience in social service and development.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 mb-3">
                About the president
              </p>
              <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full mb-5" />
              <p className="text-slate-100 text-sm leading-relaxed mb-4">
                The president of Jan Vikas, Mr. A. Majeed, is a qualified, popular and experienced personality in the
                field of social work. He has around 34 years of experience in different development sectors such as
                education, economic planning, social organisation, integrated development and livelihood development.
              </p>
              <p className="text-slate-100 text-sm leading-relaxed mb-4">
                He has worked as Programme Officer, Coordinator, Resource Person and Consultant in several prestigious
                organisations including IGSSS, NEG, D.K. Austria, Development Alternatives, PACS and SDTT. These
                engagements have strengthened his understanding of grassroots realities as well as programme management.
              </p>
              <p className="text-slate-100 text-sm leading-relaxed">
                Mr. Majeed is known for his ability to work with teams in a spirit of commitment and shared leadership.
                His approach is result‑oriented while being rooted in values of justice and dignity — qualities that
                continue to guide the work of Jan Vikas today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
