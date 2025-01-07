import { Hero } from "@/components/home/Hero";
import { GymCard } from "@/components/home/GymCard";
import { Navbar } from "@/components/home/Navbar";
import { Gym } from "@/components/home/types";
import { mockGyms } from "@/mocks/gym";

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
