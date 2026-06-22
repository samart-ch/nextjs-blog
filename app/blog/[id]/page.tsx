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

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-stone-50 px-5 py-8 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-8 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-400/40 dark:hover:bg-teal-400/10 dark:hover:text-teal-200"
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
              strokeWidth={1.7}
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to blog
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-slate-800">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:bg-teal-400/10 dark:text-teal-200">
              Article {blog.id}
            </span>
            <span className="text-sm font-medium text-slate-400">
              Blog
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-700 dark:text-slate-300">
            {blog.detail}
          </p>
        </div>
      </article>
    </main>
  );
}

export default Page;
