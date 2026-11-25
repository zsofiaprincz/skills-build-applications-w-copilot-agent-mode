import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: { type: String, required: true },
  focus: { type: String, required: true },
  minutes: { type: Number, required: true, min: Number.MIN_VALUE },
  difficulty: { type: String, required: true },
});

export const Workout = model('Workout', workoutSchema);
