import React from "react";
import Link from "next/link";
import { Blog, getBlogs } from "../api/blogs/data";

function TechCardVisual({ index }: { index: number }) {
  const palettes = [
    "bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.30),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.28),transparent_22%),linear-gradient(135deg,#03111f_0%,#07192d_48%,#0b2136_100%)]",
    "bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.28),transparent_22%),radial-gradient(circle_at_85%_18%,rgba(34,211,238,0.22),transparent_20%),linear-gradient(135deg,#050816_0%,#101433_48%,#0a1227_100%)]",
    "bg-[radial-gradient(circle_at_18%_22%,rgba(74,222,128,0.24),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(56,189,248,0.28),transparent_24%),linear-gradient(135deg,#020617_0%,#0a1021_48%,#111827_100%)]",
  ];

  return (
    <div
      className={`relative h-52 overflow-hidden ${palettes[index % palettes.length]}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.95))]" />

      <div className="absolute left-5 top-5 rounded-full border border-cyan-300/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
        {index === 0 ? "system" : index === 1 ? "ai" : "security"}
      </div>

      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/8 text-cyan-100 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
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
            d="m9 5 7 7-7 7"
          />
        </svg>
      </div>

      {index === 0 && (
        <>
          <div className="absolute left-8 top-16 h-24 w-24 rounded-3xl border border-cyan-300/20 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.16)]" />
          <div className="absolute left-14 top-22 h-12 w-36 rounded-2xl border border-white/10 bg-white/5" />
          <div className="absolute bottom-7 right-8 h-28 w-36 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-3">
            <div className="h-2 w-16 rounded-full bg-cyan-300/80" />
            <div className="mt-3 h-2 w-24 rounded-full bg-white/20" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/14" />
            <div className="mt-4 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(34,211,238,0.35),rgba(59,130,246,0.08))]" />
          </div>
        </>
      )}

      {index === 1 && (
        <>
          <div className="absolute left-8 top-14 h-28 w-28 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 shadow-[0_0_50px_rgba(168,85,247,0.18)]" />
          <div className="absolute left-12 top-18 h-20 w-20 rounded-full border-4 border-white/20 bg-transparent" />
          <div className="absolute bottom-8 right-8 h-28 w-40 rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-3">
            <div className="h-2 w-20 rounded-full bg-fuchsia-300/80" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-xl bg-white/8" />
              <div className="h-12 rounded-xl bg-white/8" />
              <div className="h-12 rounded-xl bg-white/8" />
            </div>
            <div className="mt-3 h-2 w-28 rounded-full bg-white/20" />
          </div>
        </>
      )}

      {index === 2 && (
        <>
          <div className="absolute left-8 top-14 h-24 w-24 rounded-full border border-emerald-300/20 bg-emerald-400/10 shadow-[0_0_50px_rgba(74,222,128,0.18)]" />
          <div className="absolute left-16 top-22 h-10 w-36 rounded-full border border-white/10 bg-white/6" />
          <div className="absolute bottom-7 right-8 h-28 w-40 rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="h-2 w-24 rounded-full bg-white/20" />
            </div>
            <div className="mt-4 h-2 w-32 rounded-full bg-white/14" />
            <div className="mt-2 h-2 w-20 rounded-full bg-white/14" />
            <div className="mt-4 h-10 rounded-xl border border-emerald-300/15 bg-emerald-400/10" />
          </div>
        </>
      )}
    </div>
  );
}

async function page() {
  const blogs = await getBlogs();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 text-white sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_26%),linear-gradient(180deg,#050816_0%,#030712_55%,#02040a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-6rem] top-[-6rem] -z-10 h-96 w-96 rounded-full bg-cyan-400/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-[12rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/12 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-6 sm:py-6">
          <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),rgba(168,85,247,0.95),transparent)]" />
          <div className="absolute inset-y-10 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.6),transparent)]" />
          <div className="absolute inset-y-10 right-0 w-px bg-[linear-gradient(180deg,transparent,rgba(168,85,247,0.6),transparent)]" />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/80">
                  System feed
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  Latest
                  <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#67e8f9_35%,#c084fc_72%,#ffffff_100%)] bg-clip-text text-transparent">
                    Articles
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  A futuristic collection of posts about architecture, AI UX,
                  security, and the modern tools that power today&apos;s web.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start rounded-[1.1rem] border border-cyan-300/15 bg-white/[0.05] px-4 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.25)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
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
                      strokeWidth={1.7}
                      d="M7 7h10M7 12h10M7 17h7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-semibold leading-none text-cyan-100">
                    {blogs.length}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Articles
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {blogs.map((blog: Blog, index) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/55 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative">
                    {blog.featured && (
                      <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
                        Featured
                      </div>
                    )}
                    <TechCardVisual index={index} />
                  </div>

                  <div className="flex min-h-[250px] flex-col px-5 pb-5 pt-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
                          />
                        </svg>
                        {blog.date}
                      </span>
                    </div>

                    <h2 className="mt-3 text-[1.32rem] font-semibold leading-[1.08] tracking-tight text-white">
                      {blog.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {blog.detail}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#0f766e_0%,#0ea5e9_50%,#4f46e5_100%)] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(14,165,233,0.22)] transition group-hover:translate-x-0.5">
                        Read article
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
                      </span>

                      <span className="text-xs uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-slate-300">
                        /blog
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-200 shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-cyan-300/20 hover:text-white"
              >
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
