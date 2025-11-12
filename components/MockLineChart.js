const buildPath = (values) => {
  if (!values.length) {
    return "";
  }
  const width = 240;
  const height = 120;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  return values
    .map((point, index) => {
      const x = (index / (values.length - 1 || 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
};

export function MockLineChart({ data, accent = "#bef264" }) {
  const path = buildPath(data.map((item) => item.value));

  return (
    <svg
      className="w-full"
      viewBox="0 0 240 120"
      role="img"
      aria-label="Mock performance line chart"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.34" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d={`${path} L240,120 L0,120 Z`}
        fill="url(#lineGradient)"
        opacity="0.6"
      />
      {data.map((point, index) => {
        const width = 240;
        const height = 120;
        const max = Math.max(...data.map((item) => item.value));
        const min = Math.min(...data.map((item) => item.value));
        const range = max - min || 1;
        const x = (index / (data.length - 1 || 1)) * width;
        const y = height - ((point.value - min) / range) * height;
        return (
          <g key={point.label}>
            <circle cx={x} cy={y} r="4" fill="#fff" stroke={accent} />
          </g>
        );
      })}
    </svg>
  );
}

