import { Person } from "./person";

export type MovieType = {
  id: number;
  title: string;
  trailer: string;
  picture: string;
  rating: number;
  totalRatings: string;
  releaseYear: number;
  popularity: number;
  popularityChange: number;
  description: string;
  tags: string[];
  people: Person[];
};
