import { getBlogs } from "@/app/api/blogs/data";
import type { Metadata } from "next";
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
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-5">
        {blog.title}
      </h1>
      <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
        {blog.detail}
      </p>
    </div>
  );
}

export default Page;