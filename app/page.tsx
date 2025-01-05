import { BoulderGrid } from "@/components/home/BoulderGrid";
import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { BoulderProblem } from "@/components/home/types";

const mockProblems: BoulderProblem[] = [
  {
    id: "1",
    name: "Crimpy Traverse",
    grade: "5",
    description: "A challenging traverse with small crimps and technical footwork.",
    setter: "Alex Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800",
    tags: ["crimps", "traverse", "technical"],
  },
  {
    id: "2",
    name: "Roof Runner",
    grade: "6",
    description: "Powerful moves through a steep roof section.",
    setter: "Sarah Davis",
    imageUrl:
      "https://images.unsplash.com/photo-1601224335112-b74158e231c9?auto=format&fit=crop&q=80&w=800",
    tags: ["roof", "power", "overhang"],
  },
  {
    id: "3",
    name: "Slab Master",
    grade: "4",
    description: "Delicate slab climbing requiring perfect balance.",
    setter: "Mike Chen",
    imageUrl:
      "https://images.unsplash.com/photo-1583323607580-747d0e11d057?auto=format&fit=crop&q=80&w=800",
    tags: ["slab", "balance", "technical"],
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BoulderGrid problems={mockProblems} />
    </main>
  );
}
