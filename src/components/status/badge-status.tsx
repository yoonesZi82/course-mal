import React from "react";
import { Badge } from "../ui/badge";

type CustomStatusType = {
  completed?: string;
  pending?: string;
  ended?: string;
};

function BadgeStatus({
  status,
  customStatus,
}: {
  status: string;
  customStatus?: CustomStatusType;
}) {
  const statusMap = {
    completed: customStatus?.completed || "Completed",
    pending: customStatus?.pending || "Pending",
    ended: customStatus?.ended || "Ended",
  };
  return (
    <>
      {status === "completed" ? (
        <Badge className="bg-emerald-600/10 hover:bg-emerald-600/10 dark:bg-emerald-600/20 shadow-none border-emerald-600/60 rounded-full text-emerald-500">
          <div className="bg-emerald-500 mr-2 rounded-full w-1.5 h-1.5" />{" "}
          {statusMap.completed}
        </Badge>
      ) : status === "pending" ? (
        <Badge className="bg-amber-600/10 hover:bg-amber-600/10 dark:bg-amber-600/20 shadow-none border-amber-600/60 rounded-full text-amber-500">
          <div className="bg-amber-500 mr-2 rounded-full w-1.5 h-1.5" />{" "}
          {statusMap.pending}
        </Badge>
      ) : (
        <Badge className="bg-red-600/10 hover:bg-red-600/10 dark:bg-red-600/20 shadow-none border-red-600/60 rounded-full text-red-500">
          <div className="bg-red-500 mr-2 rounded-full w-1.5 h-1.5" />{" "}
          {statusMap.ended}
        </Badge>
      )}
    </>
  );
}

export default BadgeStatus;
