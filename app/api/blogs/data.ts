export type Blog = {
  id: number;
  title: string;
  detail: string;
  category: string;
  date: string;
  featured?: boolean;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Building Scalable Systems with Next.js",
    detail:
      "Learn how to architect fast, scalable, and SEO-friendly web platforms using Next.js and modern tooling.",
    category: "Architecture",
    date: "May 12, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Designing AI-Powered Product Experiences",
    detail:
      "Explore how AI features, prompts, and interface patterns can work together in modern products.",
    category: "AI UX",
    date: "May 8, 2025",
  },
  {
    id: 3,
    title: "Security Practices for Modern Web Apps",
    detail:
      "Simple but effective security habits that help protect APIs, auth flows, and production deployments.",
    category: "Security",
    date: "May 5, 2025",
  },
];

// จำลอง latency ของ DB/network
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getBlogs = async (): Promise<Blog[]> => {
  await delay(1000);
  return blogs;
};
