import { blogs } from "@/data/blogs";
import { columns } from "./components/table/columns";
import { BlogTable } from "./components/table/blog-table";
import { BlogType } from "@/types/blogs.type";

async function getData(): Promise<BlogType[]> {
  return blogs;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="py-10">
      <BlogTable columns={columns} data={data} />
    </div>
  );
}
