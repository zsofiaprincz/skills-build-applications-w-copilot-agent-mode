import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required:true },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required:true },
  type: {type: String, required:true},
  minutes: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  occurredAt: { type: Date, required:true },
});

export const Activity = model('Activity', activitySchema);
