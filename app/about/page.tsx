import PageHero from "../components/PageHero";
import { aboutContent } from "../content/pagesContent";

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
    </>
  );
}
