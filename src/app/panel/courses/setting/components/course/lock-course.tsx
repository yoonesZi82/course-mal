"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCourseLockStore } from "@/store/course/lock";

function LockCourse() {
  const { status, toggleCourseLock } = useCourseLockStore();

  return (
    <div className="flex gap-2 mt-2 p-4 border border-border rounded-lg w-full">
      <Switch
        id="lock-course"
        checked={status === "lock"}
        onCheckedChange={toggleCourseLock}
      />
      <Label
        htmlFor="lock-course"
        className="font-medium text-muted-foreground text-sm"
      >
        You can lock or unlock your course here.
      </Label>
    </div>
  );
}

export default LockCourse;
