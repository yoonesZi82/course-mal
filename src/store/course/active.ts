// stores/courseStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export enum CourseStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

interface CourseState {
  status: CourseStatus;
  toggleCourse: () => void;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      status: CourseStatus.ACTIVE,
      toggleCourse: () =>
        set({
          status:
            get().status === CourseStatus.ACTIVE
              ? CourseStatus.INACTIVE
              : CourseStatus.ACTIVE,
        }),
    }),
    {
      name: "course-status",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
