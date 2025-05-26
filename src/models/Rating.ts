import { Schema, model, models, Document } from 'mongoose';

export interface IRating extends Document {
  cardId: Schema.Types.ObjectId;
  isUpvote: boolean;
  createdAt: Date;
  sessionId: string;
}

const RatingSchema = new Schema<IRating>({
  cardId: { type: Schema.Types.ObjectId, ref: 'Card', required: true },
  isUpvote: { type: Boolean, required: true },
  sessionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create compound index to prevent duplicate ratings from same session
RatingSchema.index({ cardId: 1, sessionId: 1 }, { unique: true });

export default models.Rating || model<IRating>('Rating', RatingSchema); 