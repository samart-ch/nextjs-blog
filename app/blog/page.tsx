import Link from "next/link";
import { Blog } from "../api/blogs/route";

async function Page() {

  const res = await fetch('http://localhost:3000/api/blogs')

  const jsonData = await res.json();

  return (

   <div>
      <div>Count: {jsonData.count}</div>

      {jsonData.blogs.map((blog: Blog) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </div>
      ))}
    </div>

  )
}



export default Page;
