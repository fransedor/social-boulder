import { BoulderProblem } from "@/components/gym/types";

export const mockProblems: BoulderProblem[] = [
  {
    id: "1",
    name: "TIGHT SLOPER",
    grade: "V4",
    description:
      "Start with small crimps and work your way up through increasingly technical moves. Finish with a dynamic reach to the top hold.",
    tags: ["crimpy", "technical", "dynamic"],
    setter: "Alex Johnson",
    dateSet: "2024-01",
    color: "#FF4444",
    imageUrl: "/pink-kids-01-2025.jpeg",
    status: "active",
    comments: [
      { id: 1, user: "Emma Chen", text: "The heel hook beta is crucial!", date: "2024-03-10" },
      {
        id: 2,
        user: "Mike Ross",
        text: "Found a nice intermediate for the crux move",
        date: "2024-03-09",
      },
    ],
  },
  {
    id: "2",
    name: "POWER PINK",
    grade: "V5",
    description:
      "A delicate slab problem requiring precise footwork and balance. Focus on body positioning and smooth movements.",
    tags: ["slab", "technical", "static"],
    setter: "Sarah Davis",
    dateSet: "2024-01",
    color: "#44FF44",
    imageUrl: "/yellow-standing-12-2024.jpeg",
    status: "inactive",
    comments: [
      { id: 1, user: "Emma Chen", text: "The heel hook beta is crucial!", date: "2024-03-10" },
      {
        id: 2,
        user: "Mike Ross",
        text: "Found a nice intermediate for the crux move",
        date: "2024-03-09",
      },
    ],
  },
];
