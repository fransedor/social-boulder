import React from "react";
import { User, Tag } from "lucide-react";
import { BoulderProblem } from "./types";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface BoulderCardProps {
  problem: BoulderProblem;
}

export function BoulderCard({ problem }: BoulderCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={problem.imageUrl}
          alt={problem.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <CardTitle>{problem.name}</CardTitle>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded">
            V{problem.grade}
          </span>
        </div>
        <div className="flex items-center text-neutral-500 text-sm">
          <User size={16} className="mr-1" />
          <span>{problem.setter}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-600 text-sm">{problem.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              size="sm"
              className={cn("h-7 text-xs", "bg-neutral-50 hover:bg-neutral-100")}
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
