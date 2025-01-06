import React from "react";
import { BoulderProblem } from "./types";
import { Tag } from "./Tag";
import { GradeLabel } from "./GradeLabel";

interface BoulderProblemCardProps {
  problem: BoulderProblem;
}

export function BoulderProblemCard({ problem }: BoulderProblemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Problem Image */}
      <div className="relative h-96">
        <img
          src={problem.imageUrl}
          alt={`Boulder problem: ${problem.name}`}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: problem.color }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">{problem.name}</h3>
          <GradeLabel grade={problem.grade} />
        </div>

        <p className="text-gray-600 mb-4">{problem.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {problem.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Set by {problem.setter}</span>
          <span>{new Date(problem.dateSet).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
