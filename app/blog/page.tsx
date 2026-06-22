import React from "react";
import { Blog, getBlogs } from "../api/blogs/data";

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">
          Our Blog
        </p>
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-2">
          Latest Articles
        </h1>
        <p className="text-sm text-gray-500">อ่านบทความล่าสุดจากทีมของเรา</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <a
            key={blog.id}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 cursor-pointer hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            href={`/blog/${blog.id}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-3 py-0.5 rounded-full">
                Article
              </span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </div>

            <h2 className="text-base font-medium text-gray-900 dark:text-white leading-snug">
              {blog.title}
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
              {blog.detail}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default page;