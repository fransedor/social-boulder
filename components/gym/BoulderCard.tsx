import React from "react";
import { BoulderProblem } from "./types";
import { Tag } from "./Tag";
import { GradeLabel } from "./GradeLabel";
import { ProblemImage } from "./BoulderImage";
import { ProblemStatus } from "./BoulderStatus";
import Link from "next/link";

interface BoulderProblemCardProps {
  problem: BoulderProblem;
}

export function BoulderProblemCard({ problem }: BoulderProblemCardProps) {
  return (
    <Link href={`/gyms/someGymName/${problem.id}`}>
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden ${
          problem.status === "inactive" ? "opacity-90" : ""
        }`}
      >
        <ProblemImage
          imageUrl={problem.imageUrl}
          name={problem.name}
          color={problem.color}
          status={problem.status}
        />

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

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>Set by {problem.setter}</span>
          </div>

          <ProblemStatus status={problem.status} dateSet={problem.dateSet} />
        </div>
      </div>
    </Link>
  );
}
