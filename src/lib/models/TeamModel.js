import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  socialLink: {
    type: String,
    trim: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true
});

const Team = mongoose.models.Team || mongoose.model("Team", TeamSchema);

export default Team;
