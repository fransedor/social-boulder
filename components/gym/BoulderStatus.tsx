import React from "react";
import { Status } from "./types";

interface ProblemStatusProps {
  status: Status;
  dateSet: string;
}

export function ProblemStatus({ status, dateSet }: ProblemStatusProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${status === "active" ? "bg-green-500" : "bg-red-500"}`}
        />
        <span className={status === "active" ? "text-gray-500" : "text-red-600"}>
          {status === "active" ? "Active" : "Removed"}
        </span>
      </div>
      <span className="text-gray-500">{`Set on ${new Date(dateSet).toLocaleDateString()}`}</span>
    </div>
  );
}
