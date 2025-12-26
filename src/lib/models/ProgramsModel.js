import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
  title: {
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
  shortDescription: {
    type: String,
    required: true,
    maxLength: 300,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Education", "Health", "Relief", "Community", "Awareness"],
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default : 0,
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
  },
}, {
  timeStamps: true
});

const Programs = mongoose.models.Programs || mongoose.model("Programs", ProgramSchema);

export default Programs;