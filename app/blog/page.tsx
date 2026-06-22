import React from "react";
import Link from "next/link";
import { Blog, getBlogs } from "../api/blogs/data";

function CardArtwork({ index }: { index: number }) {
  const scenes = [
    "bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.35),transparent_24%),linear-gradient(135deg,#edf8f7_0%,#f7fbfb_52%,#d9ece8_100%)]",
    "bg-[radial-gradient(circle_at_25%_20%,rgba(196,181,253,0.45),transparent_18%),linear-gradient(135deg,#f6f1ff_0%,#fbf8ff_55%,#efeaf9_100%)]",
    "bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.3),transparent_24%),linear-gradient(135deg,#eef6fb_0%,#f7fbfe_50%,#e4eef6_100%)]",
  ];

  const labels = [
    <div
      key="plant"
      className="absolute bottom-5 left-4 h-24 w-16 rounded-full border border-emerald-200/50 bg-gradient-to-b from-emerald-300/70 via-emerald-200/40 to-emerald-700/40 shadow-[0_14px_30px_rgba(16,185,129,0.18)] [clip-path:polygon(50%_0,63%_8%,72%_19%,78%_31%,82%_46%,80%_60%,73%_74%,61%_86%,50%_100%,39%_86%,27%_74%,20%_60%,18%_46%,22%_31%,28%_19%,37%_8%)]"
    />,
    <div
      key="vase"
      className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-stone-100/90 bg-transparent shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
    />,
    <div
      key="mountains"
      className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(135deg,transparent_0%,transparent_42%,rgba(15,23,42,0.14)_43%,rgba(15,23,42,0.14)_52%,transparent_53%),linear-gradient(145deg,transparent_0%,transparent_54%,rgba(15,23,42,0.2)_55%,rgba(15,23,42,0.2)_66%,transparent_67%),linear-gradient(135deg,transparent_0%,transparent_60%,rgba(15,23,42,0.18)_61%,rgba(15,23,42,0.18)_75%,transparent_76%)] opacity-50"
    />,
  ];

  return (
    <div
      className={`relative h-48 overflow-hidden ${scenes[index % scenes.length]} ${
        index === 0
          ? "shadow-[inset_0_-70px_90px_rgba(255,255,255,0.55)]"
          : index === 1
            ? "shadow-[inset_0_-70px_90px_rgba(255,255,255,0.55)]"
            : "shadow-[inset_0_-70px_90px_rgba(255,255,255,0.42)]"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/85 to-transparent" />
      <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-sm">
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
      {labels[index % labels.length]}
      {index === 0 && (
        <>
          <div className="absolute left-8 top-10 h-16 w-16 rounded-full bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.1)]" />
          <div className="absolute left-24 top-12 h-3 w-28 rounded-full bg-slate-800/35 blur-[1px]" />
          <div className="absolute right-10 bottom-8 h-24 w-28 rounded-[28px] bg-slate-800/45 shadow-lg" />
          <div className="absolute right-[4.5rem] bottom-5 h-2 w-28 rounded-full bg-slate-900/20 blur-[2px]" />
        </>
      )}
      {index === 1 && (
        <>
          <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-stone-200/70 bg-white/75 shadow-[0_12px_40px_rgba(15,23,42,0.08)]" />
          <div className="absolute left-10 top-12 h-12 w-12 rounded-full border-4 border-stone-100 bg-transparent" />
          <div className="absolute left-5 bottom-6 h-20 w-28 rounded-[28px] bg-stone-100/90 shadow-[0_16px_28px_rgba(15,23,42,0.08)]" />
          <div className="absolute right-8 bottom-5 h-16 w-4 rounded-full bg-stone-200/90" />
        </>
      )}
      {index === 2 && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_12%_100%,rgba(15,23,42,0.62),transparent_22%),radial-gradient(circle_at_28%_100%,rgba(15,23,42,0.52),transparent_20%),radial-gradient(circle_at_44%_100%,rgba(15,23,42,0.42),transparent_20%),radial-gradient(circle_at_60%_100%,rgba(15,23,42,0.54),transparent_21%),radial-gradient(circle_at_76%_100%,rgba(15,23,42,0.48),transparent_20%),radial-gradient(circle_at_90%_100%,rgba(15,23,42,0.4),transparent_18%)] opacity-70" />
          <div className="absolute left-8 top-10 h-16 w-16 rounded-full bg-white/50 blur-[2px]" />
        </>
      )}
    </div>
  );
}

async function page() {
  const blogs = await getBlogs();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#fbfaf6_0%,#f4f2ec_52%,#eef2f3_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.42)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] opacity-25"
      />

      <div className="mx-auto w-full max-w-6xl rounded-[2.75rem] border border-white/70 bg-white/78 px-4 py-4 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-6 sm:py-6">
        <div className="rounded-[2.25rem] border border-emerald-100/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(237,251,249,0.96)_45%,rgba(250,249,243,0.92)_100%)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-8 sm:py-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal-700/90">
                Our Blog
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Latest Articles
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Discover our latest stories, ideas, and insights to inspire your
                everyday.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-[1.1rem] border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_30px_rgba(15,23,42,0.08)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
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
                <div className="text-xl font-semibold leading-none text-teal-700">
                  {blogs.length}
                </div>
                <div className="text-xs text-slate-500">Articles</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {blogs.map((blog: Blog, index) => (
              <a
                key={blog.id}
                className={`group overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
                href={`/blog/${blog.id}`}
              >
                <div className="relative">
                  {blog.featured && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700 shadow-sm">
                      Featured
                    </div>
                  )}
                  <CardArtwork index={index} />
                </div>

                <div className="flex min-h-[240px] flex-col px-5 pb-5 pt-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700/85">
                    {blog.category}
                  </div>

                  <h2 className="mt-2 text-[1.35rem] font-semibold leading-[1.08] tracking-tight text-slate-950">
                    {blog.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {blog.detail}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-teal-800">
                      Read article
                      <svg
                        className="h-4 w-4 transition group-hover:translate-x-0.5"
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

                    <span className="flex items-center gap-1 text-xs text-slate-500">
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
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-semibold text-teal-800 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)]"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-50 text-teal-700">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              View all articles
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
