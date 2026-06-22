export type Blog = {
  id: number;
  title: string;
  detail: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog title 1",
    detail: "Blog detail 1",
  },
  {
    id: 2,
    title: "Blog title 2",
    detail: "Blog detail 2",
  },
  {
    id: 3,
    title: "Blog title 3",
    detail: "Blog detail 3",
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