import Link from "next/link";
import { source } from "@/utils/common";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background: same style as hero */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_60%),radial-gradient(circle_at_bottom,_#a855f733,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a33_1px,transparent_1px),linear-gradient(to_bottom,#0f172a33_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 -z-10 rounded-full bg-purple-500/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top mini nav / back button */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/90 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:text-cyan-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Back to Home
          </Link>

          <p className="hidden text-xs font-mono text-slate-400 sm:block">
            {`<About />`} · Frontend-Oriented Full Stack Engineer
          </p>
        </div>

        {/* TOP HERO PART for About */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] items-start">
            {/* Left: About heading + intro */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                  About
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                  The engineer behind{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                    modern web experiences
                  </span>
                </h1>
              </div>

              <p className="max-w-2xl text-sm sm:text-base text-slate-300/90 leading-relaxed">
                {source.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Experience
                  </p>
                  <p className="mt-1 text-lg font-semibold text-cyan-300">
                    {source.experience}
                  </p>
                  <p className="mt-1 text-slate-400">
                    Building production-ready apps.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    Frontend-Oriented Full Stack
                  </p>
                  <p className="mt-1 text-slate-400">
                    Next.js · TypeScript · PostgreSQL
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">
                    {source.current}
                  </p>
                  <p className="mt-1 text-slate-400">
                    Open to remote roles & collabs.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Glass profile card */}
            <div className="relative">
              <div className="absolute -inset-[1px] -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/70 via-purple-500/60 to-pink-500/70 opacity-70 blur-md" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-7 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_0)] bg-[length:100%_28px] opacity-80" />

                <div className="relative space-y-6 text-xs sm:text-sm">
                  {/* Name + badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-lg font-bold text-slate-900">
                        M
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                          {source.role}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-50 capitalize">
                          {source.name}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Remote Ready
                    </div>
                  </div>

                  {/* Location + contact */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        Location
                      </p>
                      <p className="mt-1 text-slate-100">
                        {source.contactInfo.distric},{" "}
                        {source.contactInfo.division}
                      </p>
                      <p className="text-slate-400">
                        {source.contactInfo.country}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        Contact
                      </p>
                      <p className="mt-1 text-slate-100">
                        {source.contactInfo.email}
                      </p>
                      <p className="text-slate-400">
                        {source.contactInfo.number}
                      </p>
                    </div>
                  </div>

                  {/* Core stack pills */}
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400 mb-2">
                      Core Stack
                    </p>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {[
                        "Next.js",
                        "TypeScript",
                        "React",
                        "Node.js",
                        "Express",
                        "Prisma",
                        "PostgreSQL",
                        "MongoDB",
                        "Tailwind",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-slate-100/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status row */}
                  <div className="flex items-center justify-between pt-2 text-[11px]">
                    <span className="text-slate-400">
                      Building SaaS, APIs & Dashboards
                    </span>
                    <span className="text-slate-500 uppercase tracking-[0.2em]">
                      4+ yrs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN ABOUT CONTENT SECTION */}
        <section className="pb-16 sm:pb-20 lg:pb-24 space-y-10 sm:space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            {/* Who I am / Story */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                Who I am
              </h2>
              <p>
                I&apos;m a full-stack web developer with a strong focus on{" "}
                <span className="font-semibold text-cyan-300">
                  frontend architecture and developer experience
                </span>
                . I love turning complex ideas into clean, performant and
                maintainable interfaces that feel effortless to use.
              </p>
              <p>
                Over the last few years, I&apos;ve built everything from{" "}
                <span className="font-medium text-slate-100">
                  eCommerce stores
                </span>{" "}
                and{" "}
                <span className="font-medium text-slate-100">
                  payment gateways
                </span>{" "}
                to{" "}
                <span className="font-medium text-slate-100">
                  flight search platforms
                </span>{" "}
                and{" "}
                <span className="font-medium text-slate-100">
                  store management dashboards
                </span>
                .
              </p>
              <p>
                My approach is simple:{" "}
                <span className="font-semibold text-cyan-300">
                  ship fast, but don&apos;t cut corners on quality
                </span>
                . Clean code, proper architecture, and good UX always matter.
              </p>
            </div>

            {/* What I do */}
            <div className="space-y-3 text-sm sm:text-base text-slate-300/90">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                What I do
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Build{" "}
                  <span className="font-medium text-slate-100">
                    production-grade Next.js applications
                  </span>{" "}
                  with TypeScript.
                </li>
                <li>
                  Design and implement{" "}
                  <span className="font-medium text-slate-100">
                    RESTful APIs
                  </span>{" "}
                  using Node.js, Express & Prisma.
                </li>
                <li>
                  Work with{" "}
                  <span className="font-medium text-slate-100">
                    PostgreSQL & MongoDB
                  </span>{" "}
                  for relational and non-relational data.
                </li>
                <li>
                  Craft{" "}
                  <span className="font-medium text-slate-100">
                    modern UI/UX
                  </span>{" "}
                  using Tailwind CSS, component-driven design, and clear layout.
                </li>
              </ul>
            </div>
          </div>

          {/* Quick skills snapshot */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                Tech I&apos;m comfortable with
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                A quick snapshot of my main skills — from frontend frameworks to
                backend tooling and databases.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
              {source.main_skills.slice(0, 9).map((skill) => (
                <div
                  key={skill.id + skill.title}
                  className="rounded-xl border border-white/10 bg-black/40 px-3.5 py-3"
                >
                  <p className="font-semibold text-slate-100">
                    {skill.title}
                  </p>
                  <p className="mt-1 text-[11px] text-cyan-300/90">
                    {skill.exp} experience
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}