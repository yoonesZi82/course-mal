"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCourseStore } from "@/store/course/active";

function ActiveCourse() {
  const { status, toggleCourse } = useCourseStore();
  return (
    <div className="flex gap-2 mt-2 p-4 border border-border rounded-lg w-full">
      <Switch
        id="active-course"
        checked={status === "active"}
        onCheckedChange={toggleCourse}
      />
      <Label
        htmlFor="active-course"
        className="font-medium text-muted-foreground text-sm"
      >
        You can active or inactive your course here.
      </Label>
    </div>
  );
}

export default ActiveCourse;
