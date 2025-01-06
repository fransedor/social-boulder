import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tag as TagIcon } from "lucide-react";

const BoulderProblemDetail = () => {
  // Sample data - in real usage, this would be passed as props
  const problem = {
    id: "1",
    name: "Crimpy Craze",
    grade: "V4",
    description:
      "Start with small crimps and work your way up through increasingly technical moves. Finish with a dynamic reach to the top hold.",
    tags: ["crimpy", "technical", "dynamic"],
    setter: "Alex Johnson",
    dateSet: "2024-01-05",
    color: "#FF4444",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1672281090607-a815894bcc69?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "active",
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden">
        {/* Problem Image */}
        <div className="relative w-full h-96">
          <img src={problem.imageUrl} alt={problem.name} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4">
            <Badge
              variant={problem.status === "active" ? "default" : "secondary"}
              className="text-sm font-medium"
            >
              {problem.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold">{problem.name}</CardTitle>
              <Badge variant="secondary" className="mt-2 text-lg">
                {problem.grade}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">{problem.description}</p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <TagIcon className="w-4 h-4" />
              <h3 className="text-lg font-semibold">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {problem.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Setter Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Set by {problem.setter}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{new Date(problem.dateSet).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoulderProblemDetail;
