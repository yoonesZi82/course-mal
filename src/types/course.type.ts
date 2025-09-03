interface CourseType {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  version: string;
  poster: string;
  video: string;
  status: "pending" | "completed" | "ended";
  isLock: boolean;
}

export type { CourseType };
