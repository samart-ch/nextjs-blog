import { Blog } from "@/app/api/blogs/route";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch("https://nextjs-blog-psi-two-58.vercel.app/api/blogs");
  const jsonData = await res.json();

  const selected = jsonData.blogs.find(
    (b: Blog) => b.id.toString() === id
  );

  if (!selected) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: selected.title,
    description: selected.detail,
  };
}

async function Page({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch("https://nextjs-blog-psi-two-58.vercel.app/api/blogs");
  const jsonData = await res.json();

  const selected = jsonData.blogs.find(
    (b: Blog) => b.id.toString() === id
  );

  if (!selected) {
    notFound();
  }

  return (
    <div>
      <h1>{selected.title}</h1>
      <p>{selected.detail}</p>

      <Link href="/blog">
        Back
      </Link>
    </div>
  );
}

export default Page;