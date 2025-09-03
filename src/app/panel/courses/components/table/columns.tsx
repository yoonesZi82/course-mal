"use client";
import "react-photo-view/dist/react-photo-view.css";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  Ellipsis,
  Image,
  Lock,
  Pencil,
  Trash2,
  TvMinimalPlay,
  Unlock,
  Video as VideoIcon,
} from "lucide-react";
import { CourseType } from "@/types/course.type";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BadgeStatus from "@/components/status/badge-status";
import { formatDiscount, formatPrice, formatVersion } from "@/lib/utils";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

let isOpen = false;

export const columns: ColumnDef<CourseType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <BadgeStatus
          status={row.original.status}
          customStatus={{
            ended: "Ended for sale",
          }}
        />
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p className="text-sm">{formatPrice(row.original.price)}</p>;
    },
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => {
      return <p className="text-sm">{formatDiscount(row.original.discount)}</p>;
    },
  },
  {
    accessorKey: "version",
    header: "Version",
    cell: ({ row }) => {
      return <p className="text-sm">{formatVersion(row.original.version)}</p>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              Show Description
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-[300px]">
            <p className="text-sm">{row.original.description}</p>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: "poster",
    header: "Poster",
    cell: ({ row }) => {
      return (
        <PhotoProvider>
          <PhotoView src={`/images/${row.original.poster}`}>
            <Button variant="outline" size="icon">
              <Image />
            </Button>
          </PhotoView>
        </PhotoProvider>
      );
    },
  },
  {
    accessorKey: "video",
    header: "Video",
    cell: ({ row }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <TvMinimalPlay size={16} />
          </Button>

          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            plugins={[Video]}
            slides={[
              {
                type: "video",
                width: 1280,
                height: 720,
                poster: `/video/${row.original.poster}`,
                sources: [
                  {
                    src: `/video/${row.original.video}`,
                    type: "video/mp4",
                  },
                ],
              },
            ]}
          />
        </>
      );
    },
  },
  {
    accessorKey: "isLock",
    header: "Lock",
    cell: ({ row }) => {
      return (
        <p className="text-sm">
          {row.original.isLock ? <Lock size={16} /> : <Unlock size={16} />}
        </p>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",

    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/panel/courses/edit/${row.original.id}`}>
                <Pencil /> Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/panel/courses/add-video/${row.original.id}`}>
                <VideoIcon /> Add video
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem variant="destructive">
              {" "}
              <Trash2 /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
