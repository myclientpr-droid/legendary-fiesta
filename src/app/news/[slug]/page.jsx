import { newsArticles } from '@/data/programs';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { auth } from "@clerk/nextjs/server";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const { userId } = await auth();
  if(!userId) return null;
  const news = newsArticles.find((article) => article.slug === slug);
  
  if (!news) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Article Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-primary-600 font-medium">{news.category}</span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                {news.date}
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {news.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {news.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {news.excerpt}
            </p>

            {/* Full Content */}
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Full article content goes here. You can extend your data structure 
                to include a `content` field with the complete article text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}