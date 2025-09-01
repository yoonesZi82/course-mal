import { Alert, AlertTitle } from "@/components/ui/alert";
import { BadgeX } from "lucide-react";
import React from "react";

function ErrorAlert({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <BadgeX className="w-4 h-4" />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
}

export default ErrorAlert;
