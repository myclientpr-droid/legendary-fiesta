import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
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
    enum: ["Education", "Health", "Relief", "Community", "Events", "Announcements", "Updates", "Stories"],
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  isLatest: {
    type: Boolean,
    default: false
  },
  priority: {
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

const News = mongoose.models.News || mongoose.model("News", NewsSchema);

export default News;