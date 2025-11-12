export function MockBarChart({ data, accent = "#bef264" }) {
  const max = Math.max(...data.map((item) => item.score), 1);

  return (
    <div className="grid gap-3">
      {data.map((item) => (
        <div key={item.sector} className="space-y-1">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>{item.sector}</span>
            <span className="font-mono text-lime-200">{item.score}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max((item.score / max) * 100, 8)}%`,
                backgroundImage: `linear-gradient(90deg, ${accent}, #4ade80)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

