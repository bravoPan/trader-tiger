import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stats = [
  { label: "Active Traders", value: "70,000+" },
  { label: "Countries Reached", value: "25+" },
  { label: "Years of Combined Experience", value: "120+" },
];

const reports = [
  {
    title: "Tiger Lab",
    author: "Richard Moglen",
    description: "Daily market breakdowns, setups, and live trade walk-throughs.",
  },
  {
    title: "The Pounce Report",
    author: "Oliver Kell",
    description: "Championship swing trade ideas with exact entry, stop, and target.",
  },
  {
    title: "The Jungle Brief",
    author: "Ross Haber",
    description: "Weekly macro view, portfolio positioning, and sector rotations.",
  },
  {
    title: "Trend Alert",
    author: "Stan Weinstein",
    description: "Global leadership scans tracking Stage 2 breakouts and breakdowns.",
  },
];

const courses = [
  {
    name: "Swing Trading Masterclass",
    lead: "Oliver Kell • 2020 US Investing Champion",
  },
  {
    name: "Stage Analysis Masterclass",
    lead: "Stan Weinstein • Market Legend",
  },
  {
    name: "Trading Psychology Masterclass",
    lead: "Jared Tendler • Mental Game Coach",
  },
];

const articles = [
  {
    title: "4 Key Types of Stock Gaps Every Trader Should Know",
    tag: "Technical Analysis",
    date: "November 4, 2025",
  },
  {
    title: "Key Reversal Bar: 4 Warnings to Sell Stocks",
    tag: "Technical Analysis",
    date: "September 8, 2025",
  },
  {
    title: "Stan Weinstein’s Secrets for Profiting in Bull and Bear Markets",
    tag: "Trading Books",
    date: "August 28, 2025",
  },
];

const testimonials = [
  {
    quote:
      "If you want to learn and follow the fiercest traders in the jungle, join Trader Tiger. They will sharpen your edge for decades to come.",
    name: "Roy Mattox",
    role: "Portfolio Manager",
  },
  {
    quote:
      "Trader Tiger combines elite coaching with transparent results. It’s the community I wish I had when I first started trading.",
    name: "Leif Soreide",
    role: "2019 US Investing Champion",
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white`}
    >
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <header className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:flex-row">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
              Trader Tiger
            </span>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">
              Where Traders Come to Hunt & Grow
            </h1>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
            <a
              href="#courses"
              className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
            >
              View Courses
            </a>
            <a
              href="#reports"
              className="rounded-full border border-lime-300/70 px-6 py-3 font-semibold text-lime-200 transition hover:-translate-y-0.5 hover:bg-lime-300/10"
            >
              Weekly Reports
            </a>
          </div>
        </header>

        <main className="mt-16 flex flex-1 flex-col gap-20">
          <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-white/5 bg-white/10 p-10 shadow-xl shadow-black/30">
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Learn and trade with confidence from verified champions.
              </h2>
              <p className="mt-6 text-lg text-white/70">
                Trader Tiger delivers battle-tested education, market coverage,
                and a relentless community built by US Investing Champions. Map
                your trades, manage risk, and stay ready for every breakout.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
                >
                  Explore TigerView
                </a>
                <a
                  href="#testimonials"
                  className="text-sm font-semibold text-lime-200 hover:text-lime-100"
                >
                  Hear from Traders →
                </a>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6"
                  >
                    <p className="text-3xl font-semibold text-lime-200">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 rounded-3xl border border-lime-300/10 bg-gradient-to-br from-lime-300/20 via-transparent to-lime-200/10 p-10">
              <div>
                <h3 className="text-xl font-semibold text-lime-200">
                  As Featured In
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
                  Forbes • CNBC • Business Insider • Benzinga • IBD • Seeking
                  Alpha
                </p>
              </div>
              <blockquote className="rounded-2xl border border-white/10 bg-black/50 p-6 text-white/80">
                “I am often asked about the best place to learn about the
                markets. Trader Tiger has the depth, discipline, and coaching to
                keep you ahead of the pack.”
              </blockquote>
              <div className="text-sm text-white/60">
                <p className="font-semibold text-white">Roy Mattox</p>
                <p>Portfolio Manager</p>
              </div>
            </div>
          </section>

          <section id="courses" className="space-y-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Masterclasses</h2>
                <p className="text-white/70">
                  Step-by-step trading playbooks taught by elite performers.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-lime-200 hover:text-lime-100"
              >
                View all courses →
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.name}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:border-lime-300/50 hover:shadow-2xl hover:shadow-lime-300/20"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                    Trader Tiger University
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {course.name}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{course.lead}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime-200">
                    Enroll now →
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="reports"
            className="rounded-3xl border border-white/10 bg-black/40 p-10"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Weekly Reports</h2>
                <p className="text-white/70">
                  Timely market analysis, actionable setups, and curated watchlists.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-lime-200 hover:text-lime-100"
              >
                See subscription plans →
              </a>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {reports.map((report) => (
                <article
                  key={report.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-200/10"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-lime-300/80">
                    Report
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {report.title}
                  </h3>
                  <p className="text-sm text-lime-100/80">{report.author}</p>
                  <p className="text-sm text-white/70">{report.description}</p>
                  <span className="mt-auto text-sm font-semibold text-lime-200">
                    Learn more →
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section
            id="platform"
            className="grid gap-8 rounded-3xl border border-lime-300/10 bg-gradient-to-br from-black via-slate-900 to-black p-10 lg:grid-cols-2"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
                TigerView Platform
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Better Data, Sharper Pounces.
              </h2>
              <p className="mt-4 text-white/70">
                TigerView is our next-gen research platform designed to surface
                leading growth stocks before the crowd. Screen, validate, and execute
                with focus.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                <li>• Advanced screening with custom fundamental and technical filters</li>
                <li>• Momentum, leadership, and theme trackers updated in real time</li>
                <li>• Industry group rankings to spot quiet accumulation early</li>
                <li>• Seamless integration with Trader Tiger reports and playbooks</li>
              </ul>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-lime-300/60 px-6 py-3 text-sm font-semibold text-lime-200 hover:bg-lime-300/10">
                Experience TigerView →
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/5 bg-black/50 p-8">
              <div className="grid grid-cols-2 gap-6 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-lime-200">15+</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                    Proprietary Ratings
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-lime-200">60+</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                    Sector Dashboards
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-lime-200">24/5</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                    Data Coverage
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-semibold text-lime-200">1</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                    Unified Workspace
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 p-6 text-sm text-lime-100">
                “TigerView lets me identify institutional-grade setups in minutes.
                It’s become the backbone of my prep routine.”
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-2"
          >
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-white/5 bg-black/40 p-6 text-white/80"
              >
                <p className="text-lg leading-relaxed">“{testimonial.quote}”</p>
                <div className="mt-auto pt-6 text-sm text-white/60">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </blockquote>
            ))}
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Latest Insights</h2>
                <p className="text-white/70">
                  Technical analysis, trading strategy, and psychology for every
                  market phase.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-lime-200 hover:text-lime-100"
              >
                Explore the blog →
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
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

        <footer className="mt-24 rounded-3xl border border-white/10 bg-black/50 p-10 text-sm text-white/60">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                Trader Tiger
              </p>
              <p className="mt-2 text-white">
                Where traders come to learn, hunt, and grow.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-lime-200">
                Courses
              </a>
              <a href="#" className="hover:text-lime-200">
                Weekly Education
              </a>
              <a href="#" className="hover:text-lime-200">
                TigerView Platform
              </a>
              <a href="#" className="hover:text-lime-200">
                Blog
              </a>
              <a href="#" className="hover:text-lime-200">
                Contact
              </a>
            </div>
            <a
              href="#"
              className="rounded-full bg-lime-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-200"
            >
              Get My Free Trading Guide
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Trader Tiger. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-lime-200">
                Terms
              </a>
              <a href="#" className="hover:text-lime-200">
                Privacy
              </a>
              <a href="#" className="hover:text-lime-200">
                Risk Disclaimer
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
