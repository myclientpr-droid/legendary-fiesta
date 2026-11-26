import mongoose from 'mongoose';

const AcademySchema = new mongoose.Schema({
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
  excerpt: {
    type: String,
    required: true,
    maxLength: 300,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Classes", "Workshops", "Events", "Announcements", "Tutorials", "Stories"],
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  // Only set once the activity actually goes live, so the public feed keeps publish order
  publishedAt: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
  },
}, {
  timestamps: true
});

const Academy = mongoose.models.Academy || mongoose.model("Academy", AcademySchema);

export default Academy;
