export interface Gym {
  id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  imageUrl: string;
  logoUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}