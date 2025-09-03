// stores/courseStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export enum CourseLock {
  LOCK = "lock",
  UNLOCK = "unlock",
}

interface CourseLockState {
  status: CourseLock;
  toggleCourseLock: () => void;
}

export const useCourseLockStore = create<CourseLockState>()(
  persist(
    (set, get) => ({
      status: CourseLock.UNLOCK,
      toggleCourseLock: () =>
        set({
          status:
            get().status === CourseLock.LOCK
              ? CourseLock.UNLOCK
              : CourseLock.LOCK,
        }),
    }),
    {
      name: "course-lock",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
