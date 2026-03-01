export default function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="group bg-[#0d2b1a] rounded-2xl p-6 text-center border border-emerald-900/50 hover:border-emerald-500/50 hover:bg-[#0f3320] transition-all duration-300 hover:-translate-y-1">
      <p className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
        {number}
      </p>
      <div className="w-8 h-0.5 bg-amber-500/60 rounded-full mx-auto mb-2" />
      <p className="text-sm font-medium text-slate-300">{label}</p>
    </div>
  );
}