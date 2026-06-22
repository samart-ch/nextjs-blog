import { getBlogs } from "@/app/api/blogs/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return { title: "Not found" };

  return {
    title: blog.title,
    description: blog.detail,
  };
}

function StatTile({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-5 text-white sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_26%),linear-gradient(180deg,#050816_0%,#030712_55%,#02040a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-6rem] top-[-6rem] -z-10 h-96 w-96 rounded-full bg-cyan-400/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-[10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/12 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-6 sm:py-6">
          <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),rgba(168,85,247,0.95),transparent)]" />

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-cyan-300/20 hover:text-white"
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
                Back to blog
              </Link>

              <div className="hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 md:inline-flex">
                Article detail
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),transparent)]" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    Article {blog.id}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {blog.category}
                  </span>
                  <span className="text-xs text-slate-400">{blog.date}</span>
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                  {blog.title}
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {blog.detail}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatTile label="Mode" value="Live" />
                  <StatTile label="Read time" value="3 min" />
                  <StatTile label="Status" value="Secure" />
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                        Summary payload
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        A focused explanation of the article in a system-card
                        format.
                      </p>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400/10 text-cyan-200">
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
                          d="M4 6h16M4 12h10M4 18h16"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    <p>
                      This article is optimized for modern web teams who want a
                      fast path from idea to deployment.
                    </p>
                    <p>
                      It highlights practical thinking around architecture,
                      performance, and maintainable UI systems.
                    </p>
                    <p>
                      Built to feel like a control panel, but still easy to read
                      on every screen size.
                    </p>
                  </div>
                </div>
              </section>

              <aside className="grid gap-5">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55">
                  <div className="border-b border-white/10 px-5 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      Navigation
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                      Article controls
                    </h2>
                  </div>
                  <div className="grid gap-3 p-5">
                    <Link
                      href="/blog"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/20 hover:bg-cyan-400/10 hover:text-white"
                    >
                      Back to all articles
                    </Link>
                    <Link
                      href="/"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/20 hover:bg-cyan-400/10 hover:text-white"
                    >
                      Home dashboard
                    </Link>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    Quick signals
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Category
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {blog.category}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Published
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {blog.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,182,212,0.09),rgba(139,92,246,0.06))] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    Status panel
                  </p>
                  <div className="mt-4 space-y-3">
                    {["Indexed", "Responsive", "Interactive", "Optimized"].map(
                      (label) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3"
                        >
                          <span className="text-sm text-slate-200">{label}</span>
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.95)]" />
                        </div>
                      )
                    )}
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

export default Page;
