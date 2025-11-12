import { useMemo, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import {
  strategyDemos,
  tigerViewScreens,
  reports,
  articles,
  leadershipDeck,
  sectorMomentum,
  performanceSnap,
  heatmapData,
} from "../lib/content";
import { MockLineChart } from "../components/MockLineChart";
import { MockBarChart } from "../components/MockBarChart";
import { HeatGrid } from "../components/HeatGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workflowSteps = [
  {
    label: "Scan",
    title: "Surface Opportunities",
    description:
      "Kick off each session with Growth Pulse and Stage 2 Leaders to spot institutional quality setups.",
  },
  {
    label: "Validate",
    title: "Stack the Evidence",
    description:
      "Drill into proprietary ratings, volume profile, and relative strength to confirm leadership.",
  },
  {
    label: "Execute",
    title: "Plan the Trade",
    description:
      "Use the TigerView risk suite to position-size with conviction and set alerts for key levels.",
  },
];

export default function TigerView() {
  const [activeStrategy, setActiveStrategy] = useState(strategyDemos[0].key);
  const [riskPercent, setRiskPercent] = useState(0.5);
  const [entryPrice, setEntryPrice] = useState(50);
  const [stopPrice, setStopPrice] = useState(47.5);
  const [capital, setCapital] = useState(25000);

  const positionSizer = useMemo(() => {
    const riskPerShare = Math.max(entryPrice - stopPrice, 0.01);
    const dollarsAtRisk = (capital * riskPercent) / 100;
    const shares = Math.floor(dollarsAtRisk / riskPerShare);
    return {
      riskPerShare,
      dollarsAtRisk,
      shares: shares > 0 ? shares : 0,
    };
  }, [riskPercent, entryPrice, stopPrice, capital]);

  const activeStrategyDetails = useMemo(
    () => strategyDemos.find((demo) => demo.key === activeStrategy),
    [activeStrategy]
  );

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white`}
    >
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="text-sm font-semibold text-lime-200 transition hover:text-lime-100"
          >
            ← Back to Home
          </a>
          <div className="rounded-full border border-lime-300/40 px-4 py-1 text-xs uppercase tracking-[0.35em] text-lime-200/80">
            TigerView Demo
          </div>
        </header>

        <main className="mt-16 flex flex-1 flex-col gap-16">
          <section className="grid gap-10 rounded-3xl border border-white/10 bg-black/40 p-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
                Explore TigerView
              </span>
              <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                Command your trading workflow in one powerful workspace.
              </h1>
              <p className="mt-5 text-lg text-white/70">
                TigerView combines elite playbooks, real-time scanning, and risk
                analytics so you can identify leadership faster and execute with
                confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
                <div className="rounded-full border border-white/20 px-4 py-2">
                  24/5 Market Coverage
                </div>
                <div className="rounded-full border border-white/20 px-4 py-2">
                  Integrated Watchlists & Alerts
                </div>
                <div className="rounded-full border border-white/20 px-4 py-2">
                  Real Trades from Champions
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-lime-300/15 bg-gradient-to-br from-lime-300/10 to-transparent p-8">
              <h2 className="text-xl font-semibold text-white">
                Workflow at a Glance
              </h2>
              <div className="mt-6 space-y-5">
                {workflowSteps.map((step) => (
                  <div
                    key={step.label}
                    className="rounded-2xl border border-white/10 bg-black/50 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-lime-300/70">
                      {step.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-10 rounded-3xl border border-white/10 bg-black/40 p-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                {strategyDemos.map((demo) => (
                  <button
                    key={demo.key}
                    type="button"
                    onClick={() => setActiveStrategy(demo.key)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                      activeStrategy === demo.key
                        ? "border-lime-300 bg-lime-300 text-slate-950 shadow-lg shadow-lime-300/30"
                        : "border-white/20 text-white/70 hover:border-lime-300/50 hover:text-lime-100"
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
              {activeStrategyDetails && (
                <div className="rounded-3xl border border-white/10 bg-black/60 p-8 shadow-xl shadow-lime-300/10">
                  <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                    Playbook Demo
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {activeStrategyDetails.headline}
                  </h3>
                  <ul className="mt-6 space-y-3 text-sm text-white/75">
                    {activeStrategyDetails.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-lime-300/30 bg-lime-300/10 p-4 text-sm text-lime-100">
                    {activeStrategyDetails.tip}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-lime-300/20 bg-gradient-to-br from-lime-300/10 to-transparent p-8">
              <h3 className="text-lg font-semibold text-white">
                Live Screener Signals
              </h3>
              <div className="space-y-4">
                {tigerViewScreens.map((screen) => (
                  <div
                    key={screen.name}
                    className="rounded-2xl border border-white/10 bg-black/50 p-5"
                  >
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{screen.time}</span>
                      <span className="rounded-full border border-lime-300/40 px-3 py-1 text-xs text-lime-200">
                        {screen.signal}
                      </span>
                    </div>
                    <h4 className="mt-3 text-white">{screen.name}</h4>
                    <p className="mt-2 text-sm text-white/70">
                      {screen.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-white/10 bg-black/50 p-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                  Leadership Dashboard
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Momentum leaders firing on all cylinders.
                </h2>
                <p className="mt-3 text-white/70">
                  Track composite performance, sector momentum, and style heat to
                  keep your focus list tight. These visuals update in real time
                  inside TigerView.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-inner shadow-lime-300/5">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>5-Day Composite Performance</span>
                  <span className="rounded-full border border-lime-300/40 px-3 py-1 text-xs font-semibold text-lime-200">
                    +11.5% This Week
                  </span>
                </div>
                <div className="mt-6">
                  <MockLineChart data={performanceSnap} />
                </div>
                <div className="mt-4 flex justify-between text-xs text-white/50">
                  {performanceSnap.map((point) => (
                    <span key={point.label}>{point.label}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Style & Theme Heatmap
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Quickly spot where institutional money is concentrating.
                </p>
                <div className="mt-6">
                  <HeatGrid data={heatmapData} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-lime-300/20 bg-black/60 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Sector Momentum Scores
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Weighted by breadth, volume thrust, and price leadership.
                </p>
                <div className="mt-5">
                  <MockBarChart data={sectorMomentum} />
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Leaderboard Watchlist
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Traders can pin names, track RS, and log trade notes inline.
                </p>
                <div className="mt-5 space-y-4">
                  {leadershipDeck.map((item) => (
                    <div
                      key={item.symbol}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm"
                    >
                      <div>
                        <p className="text-white font-semibold">
                          {item.symbol} <span className="text-white/60">{item.name}</span>
                        </p>
                        <p className="text-xs text-white/50">
                          RS {item.rs} • Volume {item.volume}
                        </p>
                      </div>
                      <span className="font-semibold text-lime-200">{item.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
                Risk Management Demo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Position sizing built for consistency.
              </h2>
              <p className="mt-4 text-white/70">
                Plug in your trade idea to preview how TigerView helps you stay
                within risk parameters before sending any orders.
              </p>
              <form className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Risk % per trade
                  <input
                    type="number"
                    min={0.1}
                    max={5}
                    step={0.1}
                    value={riskPercent}
                    onChange={(event) =>
                      setRiskPercent(Number(event.target.value) || 0)
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-lime-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Account capital
                  <input
                    type="number"
                    min={1000}
                    step={500}
                    value={capital}
                    onChange={(event) =>
                      setCapital(Number(event.target.value) || 0)
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-lime-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Entry price
                  <input
                    type="number"
                    min={0.01}
                    step={0.1}
                    value={entryPrice}
                    onChange={(event) =>
                      setEntryPrice(Number(event.target.value) || 0)
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-lime-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Stop price
                  <input
                    type="number"
                    min={0.01}
                    step={0.1}
                    value={stopPrice}
                    onChange={(event) =>
                      setStopPrice(Number(event.target.value) || 0)
                    }
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-lime-300/60"
                  />
                </label>
              </form>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-lime-300/20 bg-black/40 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                  Output Preview
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Trade Blueprint
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className="text-sm text-white/60">Risk per share</p>
                  <p className="mt-2 text-2xl font-semibold text-lime-200">
                    ${positionSizer.riskPerShare.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className="text-sm text-white/60">Max dollars at risk</p>
                  <p className="mt-2 text-2xl font-semibold text-lime-200">
                    ${positionSizer.dollarsAtRisk.toFixed(0)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className="text-sm text-white/60">Recommended share size</p>
                  <p className="mt-2 text-2xl font-semibold text-lime-200">
                    {positionSizer.shares} shares
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-lime-300/30 bg-lime-300/10 p-4 text-sm text-lime-100">
                Position sizing adapts dynamically in TigerView so you can respond
                to market conditions with discipline.
              </div>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                Stay Synced
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Weekly reports fuel the TigerView process.
              </h2>
              <p className="mt-4 text-white/70">
                Every TigerView module is powered by the same data our US
                Investing Champions rely on. Sync the platform with fresh market
                research each week to stay ready for new cycles.
              </p>
            </div>
            <div className="grid gap-4">
              {reports.slice(0, 3).map((report) => (
                <div
                  key={report.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-lime-300/70">
                    Featured Report
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {report.title}
                  </h3>
                  <p className="text-sm text-lime-100/80">{report.author}</p>
                  <p className="mt-3 text-sm text-white/70">
                    {report.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                  Continue Learning
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  Latest analysis from Trader Tiger.
                </h2>
              </div>
              <a
                href="/"
                className="text-sm font-semibold text-lime-200 transition hover:text-lime-100"
              >
                View all → 
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-lime-300/40 hover:shadow-xl hover:shadow-lime-300/10"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-lime-300/70">
                    {article.tag}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">{article.date}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-lime-200">
                    Read more →
                  </span>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

