import React from "react";
import { toast } from "sonner";
import { Alert, AlertTitle } from "./alert";
import { Info, BadgeCheck, BadgeX, BadgeInfo } from "lucide-react";

type CustomToastProps = {
  title: string;
  variant: "success" | "warning" | "info" | "destructive";
};

function customToast({ title, variant }: CustomToastProps) {
  return (
    <>
      {toast.custom(
        (t) => (
          <Alert
            variant={variant}
            className="flex justify-between items-center gap-4"
          >
            <div>
              {variant === "success" && <BadgeCheck size={16} />}
              {variant === "warning" && <BadgeInfo size={16} />}
              {variant === "info" && <Info size={16} />}
              {variant === "destructive" && <BadgeX size={16} />}
            </div>
            <AlertTitle>{title}</AlertTitle>
          </Alert>
        ),
        {
          duration: 5000,
        }
      )}
    </>
  );
}

export default customToast;
