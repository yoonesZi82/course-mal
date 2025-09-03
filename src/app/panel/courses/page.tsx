import { courses } from "@/data/course";
import { columns } from "./components/table/columns";
import { CourseTable } from "./components/table/course-table";
import { CourseType } from "@/types/course.type";

async function getData(): Promise<CourseType[]> {
  return courses;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="py-10">
      <CourseTable columns={columns} data={data} />
    </div>
  );
}
