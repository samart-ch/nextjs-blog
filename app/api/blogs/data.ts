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
    title: "Building Scalable Web Applications with Next.js",
    detail:
      "Learn how to build fast, scalable, and SEO-friendly web applications using Next.js and modern tools.",
    category: "Technology",
    date: "May 12, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Design Principles for Better User Experience",
    detail:
      "Explore the key design principles that help create intuitive and engaging user experiences.",
    category: "Design",
    date: "May 8, 2025",
  },
  {
    id: 3,
    title: "Mindfulness Habits for a Better You",
    detail:
      "Simple daily habits that can improve your focus, reduce stress, and bring more balance to your life.",
    category: "Lifestyle",
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
