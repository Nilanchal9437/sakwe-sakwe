import { Schema, model, models, Document } from 'mongoose';

export interface IReport extends Document {
  cardId: Schema.Types.ObjectId;
  reason: string;
  status: 'pending' | 'reviewed' | 'resolved';
  sessionId: string;
  createdAt: Date;
  reviewedAt?: Date;
  adminNotes?: string;
}

const ReportSchema = new Schema<IReport>({
  cardId: { type: Schema.Types.ObjectId, ref: 'Card', required: true },
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'reviewed', 'resolved'],
    default: 'pending'
  },
  sessionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reviewedAt: { type: Date },
  adminNotes: { type: String }
});

// Create compound index to prevent duplicate reports from same session
ReportSchema.index({ cardId: 1, sessionId: 1 }, { unique: true });

export default models.Report || model<IReport>('Report', ReportSchema); 