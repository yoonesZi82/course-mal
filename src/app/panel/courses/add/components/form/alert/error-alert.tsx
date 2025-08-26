import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import React from "react";

function ErrorAlert({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="w-4 h-4" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default ErrorAlert;
