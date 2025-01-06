export type Grade = 'V0' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'V10';
export type Tag = 'crimpy' | 'slopey' | 'dynamic' | 'static' | 'overhang' | 'slab' | 'technical';

export interface BoulderProblem {
  id: string;
  name: string;
  grade: Grade;
  description: string;
  tags: Tag[];
  setter: string;
  dateSet: string;
  color: string;
  imageUrl: string;
}