import { BoulderGrid } from "@/components/gym/BoulderGrid";
import { Hero } from "@/components/gym/Hero";
import { Navbar } from "@/components/home/Navbar";
import { BoulderProblem } from "@/components/gym/types";


export const mockProblems: BoulderProblem[] = [
  {
    id: '1',
    name: 'Crimpy Craze',
    grade: 'V4',
    description: 'Start with small crimps and work your way up through increasingly technical moves. Finish with a dynamic reach to the top hold.',
    tags: ['crimpy', 'technical', 'dynamic'],
    setter: 'Alex Johnson',
    dateSet: '2024-01-05',
    color: '#FF4444',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1672281090607-a815894bcc69?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: "active",
  },
  {
    id: '2',
    name: 'Slab Master',
    grade: 'V2',
    description: 'A delicate slab problem requiring precise footwork and balance. Focus on body positioning and smooth movements.',
    tags: ['slab', 'technical', 'static'],
    setter: 'Sarah Davis',
    dateSet: '2024-01-03',
    color: '#44FF44',
    imageUrl: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80&w=1000',
    status: "inactive",
  }
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
