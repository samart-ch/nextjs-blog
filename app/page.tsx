import Link from "next/link";

const chips = ["AI", "Cloud", "DevOps", "API", "Security"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-5 py-6 text-white sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_24%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#07111f_0%,#050816_56%,#02040a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-[-6rem] -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8rem] right-[-6rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-cyan-300/15 bg-white/[0.04] px-5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-8 sm:py-8 lg:px-10">
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),rgba(168,85,247,0.9),transparent)]" />
          <div className="absolute inset-y-8 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.55),transparent)]" />
          <div className="absolute inset-y-8 right-0 w-px bg-[linear-gradient(180deg,transparent,rgba(168,85,247,0.55),transparent)]" />

          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
                System online
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 sm:inline-flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
                Secure connection
              </div>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="relative">
                <div className="absolute -left-2 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                  Digital Knowledge Hub
                </p>
                <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                  Future-ready
                  <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#7dd3fc_35%,#c084fc_70%,#ffffff_100%)] bg-clip-text text-transparent">
                    Blog
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Explore articles about modern web stacks, AI workflows, cloud
                  architecture, product design, and practical engineering
                  patterns.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-slate-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#06b6d4_0%,#2563eb_50%,#8b5cf6_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(37,99,235,0.45)]"
                    aria-label="Open Blog"
                  >
                    Launch Blog
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>

                  <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300">
                    /blog content starts here
                  </span>
                </div>
              </section>

              <aside className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_34%)] blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.42)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                        Wordmark
                      </p>
                      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                        Blog
                      </h2>
                    </div>
                    <Link
                      href="/blog"
                      className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 transition hover:bg-cyan-400/20"
                      aria-label="Go to Blog"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      { label: "Latency", value: "12ms" },
                      { label: "Uptime", value: "99.98%" },
                      { label: "Deploys", value: "42/day" },
                      { label: "Scale", value: "∞" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          {stat.label}
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(6,182,212,0.08),rgba(139,92,246,0.05))] p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400/10 text-cyan-200">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Command center UI
                        </p>
                        <p className="text-xs text-slate-400">
                          fast, clean, and developer-focused
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
