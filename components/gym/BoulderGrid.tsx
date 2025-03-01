import React from "react";
import { BoulderProblemCard } from "./BoulderCard";
import { BoulderProblem } from "./types";

interface BoulderGridProps {
  problems: BoulderProblem[];
  gymSlug: string;
}

export function BoulderGrid({ problems, gymSlug }: BoulderGridProps) {
  return (
    <div className="container mx-auto mb-16">
      <h2 className="text-4xl font-semibold py-4">Problems available</h2>
      <div className="flex flex-wrap gap-5">
        {problems.map((problem) => (
          <BoulderProblemCard key={problem.id} problem={problem} gymSlug={gymSlug} />
        ))}
      </div>
    </div>
  );
}
