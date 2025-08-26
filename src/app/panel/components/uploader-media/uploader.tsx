"use client";
import "react-photo-view/dist/react-photo-view.css";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import Image from "next/image";
import { useState } from "react";
import { Accept, DropzoneOptions } from "react-dropzone";
import { CloudUpload, LoaderCircle, Paperclip, SquarePlay } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  accept: Accept;
  multiple: boolean;
  maxFiles: number;
  maxSize: number;
  titleDrop: string;
  content?: "row" | "col";
  onChange: (files: File[]) => void;
}

const FileDraw = ({
  accept,
  titleDrop,
}: {
  accept: Accept;
  titleDrop: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-primary">
      <CloudUpload size={40} />
      <p className="mb-1 text-primary text-sm">
        <span className="font-semibold">Click to upload {titleDrop} </span>
        or drag and drop
      </p>
      <p className="text-primary text-xs">
        {accept["image/*"]?.join(", ")}
        {accept["video/*"]?.join(", ")}
      </p>
    </div>
  );
};

const RenderFile = ({
  file,
  i,
  content,
}: {
  file: File;
  i: number;
  content: "row" | "col";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FileUploaderItem
      key={i}
      index={i}
      className={cn(
        "p-0 border rounded-md size-20 overflow-hidden flex flex-wrap",
        content === "col" && "size-full"
      )}
      aria-roledescription={`file ${i + 1} containing ${file.name}`}
    >
      {file.type.includes("image") ? (
        <PhotoView src={URL.createObjectURL(file)}>
          {content === "col" ? (
            <div className="flex gap-2 hover:!bg-primary/50 p-2 w-full transition-all duration-300">
              <Paperclip className="flex-shrink-0 stroke-current w-4 h-4" />
              <p className="inline-block w-full overflow-hidden text-xs text-ellipsis">
                {file.name}
              </p>
            </div>
          ) : (
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              height={80}
              width={80}
              className="bg-primary rounded-md size-20 object-cover"
            />
          )}
        </PhotoView>
      ) : (
        <div
          className="flex justify-center items-center hover:!bg-primary/50 w-full h-full transition-all duration-300"
          onClick={() => setIsOpen(true)}
        >
          <SquarePlay size={24} />
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            plugins={[Video]}
            className="hover:!bg-primary/20 transition-all duration-300"
            slides={[
              {
                type: "video",
                width: 1280,
                height: 720,
                poster: URL.createObjectURL(file),
                sources: [
                  {
                    src: URL.createObjectURL(file),
                    type: file.type,
                  },
                ],
              },
            ]}
          />
        </div>
      )}
    </FileUploaderItem>
  );
};

const Uploader = ({
  accept,
  multiple,
  maxFiles,
  maxSize,
  titleDrop,
  content = "row",
  onChange,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[] | null>([]);

  const dropzone = {
    accept,
    multiple,
    maxFiles,
    maxSize,
  } satisfies DropzoneOptions;

  return (
    <FileUploader
      value={files}
      orientation="vertical"
      onValueChange={(newFiles) => {
        setFiles(newFiles);
        onChange(newFiles || []);
      }}
      dropzoneOptions={dropzone}
      className="relative mx-auto p-2 rounded-lg min-w-96 min-h-70"
    >
      <FileInput className="bg-background outline-2 outline-dashed outline-primary/40">
        <div className="flex flex-col justify-center items-center pt-3 pb-4 w-full">
          <FileDraw accept={accept} titleDrop={titleDrop} />
        </div>
      </FileInput>
      {!files ? null : (
        <FileUploaderContent
          className={cn(
            "flex gap-2",
            content === "row" ? "flex-row" : "flex-col"
          )}
        >
          {files?.some((file) => file.type.includes("image")) ? (
            <PhotoProvider>
              {files?.map((file, i) => (
                <RenderFile key={i} file={file} i={i} content={content} />
              ))}
            </PhotoProvider>
          ) : (
            <>
              {files?.map((file, i) => (
                <RenderFile key={i} file={file} i={i} content={content} />
              ))}
            </>
          )}
        </FileUploaderContent>
      )}
    </FileUploader>
  );
};

export default Uploader;
