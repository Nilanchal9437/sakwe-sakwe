import mongoose, { Schema, Document } from 'mongoose';

export interface ICard extends Document {
  deckId: Schema.Types.ObjectId;
  question: string;
  answer: string;
  ratings: {
    upvotes: number;
    downvotes: number;
  };
  reports: {
    count: number;
    reasons: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const CardSchema: Schema = new Schema({
  deckId: { type: Schema.Types.ObjectId, ref: 'Deck', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  ratings: {
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 }
  },
  reports: {
    count: { type: Number, default: 0 },
    reasons: [{ type: String }]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema); 