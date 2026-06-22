import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbfaf6_0%,#f3f0e8_48%,#eef4f5_100%)] px-5 py-6 text-slate-950 sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.20),transparent_25%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.38)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] opacity-25"
      />
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[2.75rem] border border-white/75 bg-white/70 px-6 py-10 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -left-20 top-[-5rem] h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="absolute -right-16 bottom-[-6rem] h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute right-12 top-12 hidden h-28 w-28 rounded-full border border-teal-200/60 sm:block" />
          <div className="absolute right-16 top-16 hidden h-16 w-16 rounded-full border border-white/80 bg-white/40 shadow-sm sm:block" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-4 rounded-full border border-white/80 bg-white/85 px-4 py-3 shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)]"
              aria-label="Open Blog"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-bold text-white shadow-[0_10px_24px_rgba(13,148,136,0.28)]">
                B
              </span>
              <span className="pr-2 text-left">
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-teal-700">
                  Studio
                </span>
                <span className="block text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Blog
                </span>
              </span>
              <span className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700 transition group-hover:translate-x-0.5 group-hover:bg-teal-100">
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
            </Link>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              อ่านบทความล่าสุด ไอเดียดี ๆ และเรื่องเล่าที่ช่วยเติมแรงบันดาลใจในทุกวัน
              ผ่านหน้า blog ที่ออกแบบให้ดูสบายตาและน่าอ่าน
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(13,148,136,0.28)] transition hover:-translate-y-0.5 hover:bg-teal-800"
              >
                Open blog
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

              <span className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/80 px-5 py-3 text-sm font-medium text-slate-600 shadow-sm">
                clean UI, soft background, focused content
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
