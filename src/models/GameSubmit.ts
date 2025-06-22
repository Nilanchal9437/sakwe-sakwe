import mongoose, { Schema, Document } from "mongoose";

interface IGameSubmit extends Document {
  created_at: Date;
  game_id: string;
  totalSessionTime: string;
  answer: {
    question: string;
    answer: string;
    answerSeen: boolean;
    cardSeen: boolean;
    sessionTime: string;
  }[];
  name: string;
  email: string;
  phone: string;
}

const GameSubmitSchema: Schema = new Schema({
  game_id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  totalSessionTime: { type: String, required: true },
  answer: { type: Array, required: true },
  created_at: { type: Date, required: true },
});

const GameSubmit =
  mongoose.models.GameSubmit ||
  mongoose.model<IGameSubmit>("GameSubmit", GameSubmitSchema);

export default GameSubmit;
