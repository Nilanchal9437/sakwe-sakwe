import { Schema, model, models, Document } from "mongoose";

export interface IDeck extends Document {
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
}

const DeckSchema = new Schema<IDeck>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  cardCount: { type: Number, default: 0 },
  isPublic: { type: Boolean, default: true },
  tags: [{ type: String }],
  imageUrl: { type: String },
});

export default models.Deck || model<IDeck>("Deck", DeckSchema);
