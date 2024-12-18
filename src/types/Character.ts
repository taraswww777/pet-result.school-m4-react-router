export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | string;
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | string;
  image: string;
  created: string;
}
