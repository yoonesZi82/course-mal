import { columns, Course } from "./components/table/columns";
import { CourseTable } from "./components/table/course-table";

async function getData(): Promise<Course[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 500,
      status: "processing",
      email: "p@example.com",
    },
    {
      id: "728ed52f",
      amount: 1000,
      status: "success",
      email: "k@example.com",
    },
    {
      id: "728ed52f",
      amount: 1000,
      status: "failed",
      email: "s@example.com",
    },
    {
      id: "728ed52f",
      amount: 1000,
      status: "success",
      email: "a@example.com",
    },
    // ...
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="py-10">
      <CourseTable columns={columns} data={data} />
    </div>
  );
}
