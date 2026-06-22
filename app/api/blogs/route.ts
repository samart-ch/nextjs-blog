import { getBlogs } from "./data";

export async function GET() {
  const blogs = await getBlogs();
  return Response.json({ count: blogs.length, blogs });
}