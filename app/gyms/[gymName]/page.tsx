import { BoulderGrid } from "@/components/gym/BoulderGrid";
import { Hero } from "@/components/gym/Hero";
import { Navbar } from "@/components/home/Navbar";
import { mockProblems } from "@/mocks/boulder";

export default async function Page({ params }: { params: { gymName: string } }) {
  return (
    <main>
      <Navbar />
      <Hero />
      <BoulderGrid problems={mockProblems} gymSlug={params.gymName || ""} />
    </main>
  );
}
