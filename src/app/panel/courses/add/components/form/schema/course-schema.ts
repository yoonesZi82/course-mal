import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(1, { message: "Title is required" }),

  description: z
    .string({ message: "Description is required" })
    .min(1, { message: "Description is required" }),

  price: z
    .number({ message: "Price is required" })
    .min(1, { message: "Price must be greater than 0" }),

  discount: z.number().min(0).max(100).optional(),

  version: z
    .string({ message: "Version is required" })
    .min(1, { message: "Version is required" }),

  poster: z
    .instanceof(File, { message: "Poster file is required" })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "Poster must be JPEG, PNG, or WEBP",
      },
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Poster must be less than 5MB",
    }),

  video: z
    .instanceof(File, { message: "Video file is required" })
    .refine(
      (file) =>
        ["video/mp4", "video/webm", "video/mov", "video/avi"].includes(
          file.type,
        ),
      {
        message: "Video must be MP4, WEBM, MOV, or AVI",
      },
    )
    .refine((file) => file.size <= 50 * 1024 * 1024, {
      message: "Video must be less than 50MB",
    }),

  isLock: z.boolean(),
});
