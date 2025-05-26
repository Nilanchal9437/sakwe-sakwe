export interface IDeck {
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  cardCount: number;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  tags: string[];
  imageUrl?: string;
  _id?: string;
}
