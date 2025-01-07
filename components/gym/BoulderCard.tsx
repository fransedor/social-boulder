import React from "react";
import { BoulderProblem } from "./types";
import Link from "next/link";

interface BoulderProblemCardProps {
  problem: BoulderProblem;
}

export function BoulderProblemCard({ problem }: BoulderProblemCardProps) {
  return (
    <Link href={`/gyms/someGymName/${problem.id}`}>
      <div
        className={`bg-white relative max-w-[400px] aspect-3/4 shadow-md overflow-hidden  ${
          problem.status === "inactive" ? "opacity-90" : ""
        }`}
      >
        <div className="w-full h-full bg-black top-0 left-0 absolute z-10 opacity-70 hover:opacity-40"></div>
        <img
          src={problem.imageUrl}
          alt={`Boulder problem: ${problem.name}`}
          className={`w-full h-full object-cover `}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center flex flex-col gap-4 text-white">
          <h3 className="font-extrabold text-white text-3xl">{problem.name}</h3>
          <span className="font-bold text-xl">{problem.grade}</span>
        </div>
        <div className="absolute z-20 bottom-4 flex gap-2 justify-center left-0 text-white w-full">
            {problem.tags.slice(0, 3).map((tag) => (
              <React.Fragment key={tag}>
                <span className="text-xs">{tag}</span>
              </React.Fragment>
            ))}
          </div>
      </div>
    </Link>
  );
}
