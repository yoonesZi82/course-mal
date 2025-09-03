"use client";

import React, { useEffect, useState } from "react";
import SummaryBox from "./components/summary/summary-box";
import LineChart9 from "@/components/charts/line-chart-9";
import { CourseTable } from "./courses/components/table/course-table";
import { columns as columnsCourses } from "./courses/components/table/columns";
import { columns as columnsBlogs } from "./blogs/components/table/columns";
import { courses } from "@/data/course";
import { blogs } from "@/data/blogs";
import { CourseType } from "@/types/course.type";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogTable } from "./blogs/components/table/blog-table";
import { BlogType } from "@/types/blogs.type";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [dataCourses, setDataCourses] = useState<CourseType[] | null>(null);
  const [dataBlogs, setDataBlogs] = useState<BlogType[] | null>(null);

  useEffect(() => {
    const courseTimer = setTimeout(() => setDataCourses(courses), 2000);
    const blogTimer = setTimeout(() => setDataBlogs(blogs), 2500);

    return () => {
      clearTimeout(courseTimer);
      clearTimeout(blogTimer);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full">
      <SummaryBox />
      <LineChart9 />
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col gap-6 w-full">
          {!dataCourses ? (
            <Skeleton className="rounded-xl w-full min-h-[450px]" />
          ) : (
            <>
              <div className="flex justify-between items-center gap-4">
                <p className="font-bold text-2xl lg:text-4xl">Courses</p>
                <Button variant="outline" asChild>
                  <Link href="/panel/courses">
                    <Search />
                    See Courses
                  </Link>
                </Button>
              </div>
              <CourseTable
                columns={columnsCourses}
                data={dataCourses}
                hideFilter
                hidePagination
              />
            </>
          )}
        </div>

        <div className="flex flex-col gap-6 w-full">
          {!dataBlogs ? (
            <Skeleton className="rounded-xl w-full min-h-[450px]" />
          ) : (
            <>
              <div className="flex justify-between items-center gap-4">
                <p className="font-bold text-2xl lg:text-4xl">Blogs</p>
                <Button variant="outline" asChild>
                  <Link href="/panel/blogs">
                    <Search />
                    See Blogs
                  </Link>
                </Button>
              </div>
              <BlogTable
                columns={columnsBlogs}
                data={dataBlogs}
                hideFilter
                hidePagination
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
