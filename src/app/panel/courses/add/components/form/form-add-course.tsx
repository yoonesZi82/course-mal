"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { courseSchema } from "./schema/course-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import InputIcon from "@/components/input-icon/InputIcon";
import {
  BadgeDollarSign,
  BadgePercent,
  BookUp2,
  PencilLine,
  Plus,
} from "lucide-react";
import ErrorAlert from "./alert/error-alert";
import FileUpload from "@/components/kokonutui/file-upload";
import customToast from "@/components/ui/custom-toast";

function FormAddCourse() {
  const courseForm = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      price: undefined,
      discount: undefined,
      version: "",
      poster: undefined,
      video: undefined,
      isLock: true,
    },
  });

  function addCourse(data: z.infer<typeof courseSchema>) {
    console.log(data);
  }

  const discountValue = courseForm.watch("discount");

  return (
    <Form {...courseForm}>
      <form
        onSubmit={courseForm.handleSubmit(addCourse)}
        className="gap-5 lg:gap-10 grid grid-cols-1 lg:grid-cols-2 w-full h-full"
      >
        <div className="flex flex-col justify-start items-center gap-5">
          <FormField
            control={courseForm.control}
            name="poster"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUpload
                    title="Poster"
                    onUploadSuccess={(file) => {
                      field.onChange(file);
                      customToast({
                        title: "Upload photo successfully",
                        variant: "success",
                      });
                    }}
                    onUploadError={() => {
                      customToast({
                        title: "Upload photo failed",
                        variant: "destructive",
                      });
                    }}
                    acceptedFileTypes={[
                      "image/jpeg",
                      "image/png",
                      "image/webp",
                    ]}
                    maxFileSize={5 * 1024 * 1024}
                    currentFile={field.value}
                    onFileRemove={() => field.onChange(null)}
                  />
                </FormControl>

                {courseForm.formState.errors.poster?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.poster?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />

          <FormField
            control={courseForm.control}
            name="video"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUpload
                    title="Video"
                    onUploadSuccess={(file) => {
                      field.onChange(file);
                      customToast({
                        title: "Upload video successfully",
                        variant: "success",
                      });
                    }}
                    onUploadError={() => {
                      customToast({
                        title: "Upload video failed",
                        variant: "destructive",
                      });
                    }}
                    acceptedFileTypes={["video/mp4", "video/webm"]}
                    maxFileSize={50 * 1024 * 1024}
                    currentFile={field.value}
                    onFileRemove={() => field.onChange(null)}
                  />
                </FormControl>

                {courseForm.formState.errors.video?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.video?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-10 h-full">
          <FormField
            control={courseForm.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <InputIcon
                    icon={PencilLine}
                    placeholder="Course Title ..."
                    {...field}
                  />
                </FormControl>

                {courseForm.formState.errors.title?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.title?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />

          <FormField
            control={courseForm.control}
            name="version"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <InputIcon
                    icon={BookUp2}
                    placeholder="Version of course ..."
                    {...field}
                  />
                </FormControl>

                {courseForm.formState.errors.version?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.version?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={courseForm.control}
            name="discount"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <InputIcon
                    icon={BadgePercent}
                    type="number"
                    placeholder="Discount of course ..."
                    value={field.value}
                    onChange={(e) => {
                      if (Number(e.target.value) < 0) {
                        e.target.value = "0";
                      }
                      if (Number(e.target.value) > 100) {
                        e.target.value = "100";
                      }
                      field.onChange(Number(e.target.value));
                    }}
                  />
                </FormControl>

                {courseForm.formState.errors.discount?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.discount?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={courseForm.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <InputIcon
                    icon={BadgeDollarSign}
                    placeholder="Price of course ..."
                    priceMode
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>

                {courseForm.formState.errors.price?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.price?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={courseForm.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Description of course ..."
                    className="py-5 min-h-50 resize-none"
                    {...field}
                  />
                </FormControl>

                {courseForm.formState.errors.description?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.description?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={courseForm.control}
            name="isLock"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <Switch
                      checked={discountValue === 100 ? false : field.value}
                      onCheckedChange={field.onChange}
                    />
                    <p className="font-medium text-muted-foreground text-sm">
                      For Unlock Course turn on this
                    </p>
                  </div>
                </FormControl>

                {courseForm.formState.errors.isLock?.message ? (
                  <ErrorAlert
                    message={courseForm.formState.errors.isLock?.message}
                  />
                ) : null}
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size="lg">
            Add Course
            <Plus />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormAddCourse;
