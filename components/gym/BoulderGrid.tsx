import React from "react";
import { BoulderProblemCard } from "./BoulderCard";
import { BoulderProblem } from "./types";

interface BoulderGridProps {
  problems: BoulderProblem[];
}

export function BoulderGrid({ problems }: BoulderGridProps) {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold py-4">Problems available</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <BoulderProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}
