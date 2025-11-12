const getIntensity = (value) => {
  if (value >= 70) return "bg-lime-400/90 text-slate-900";
  if (value >= 60) return "bg-lime-300/80 text-slate-900";
  if (value >= 50) return "bg-lime-300/50 text-slate-900";
  return "bg-white/10 text-white/80";
};

export function HeatGrid({ data }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border border-white/10 p-4 text-center text-sm font-semibold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-300/20 ${getIntensity(
            item.value
          )}`}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            {item.label}
          </p>
          <p className="mt-3 text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

