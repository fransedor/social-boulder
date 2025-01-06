import { Hero } from "@/components/home/Hero";
import { GymCard } from "@/components/home/GymCard";
import { Navbar } from "@/components/home/Navbar";
import { Gym } from "@/components/home/types";

export const mockGyms = [
  {
    id: "1",
    name: "Boulder Zone",
    distance: 1.2,
    address: "123 Climb Street, Boulder, CO",
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1566405382187-1bfaa9dba7ba?auto=format&fit=crop&q=80&w=1000",
    logoUrl: "https://placehold.co/200x200?text=BZ",
    difficulty: "All Levels",
  },
  {
    id: "2",
    name: "Peak Performance",
    distance: 2.5,
    address: "456 Mountain Ave, Boulder, CO",
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1000",
    logoUrl: "https://placehold.co/200x200?text=PP",
    difficulty: "Intermediate",
  },
  {
    id: "3",
    name: "Gravity Lab",
    distance: 3.1,
    address: "789 Summit Road, Boulder, CO",
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80&w=1000",
    logoUrl: "https://placehold.co/200x200?text=GL",
    difficulty: "Advanced",
  },
];
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container mx-auto mt-8">
        <h2 className="font-bold text-4xl">Gyms Nearby</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {mockGyms.map((gym) => (
            <GymCard key={gym.id} gym={gym as Gym} />
          ))}
        </div>
      </div>
    </main>
  );
}
