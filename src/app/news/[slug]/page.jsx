import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import RichText from "@/components/shared/RichText";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`)
  const {news} = await res.json()
  if (!news) return null;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Article Card */}
        <div className="glass overflow-hidden">
          {/* Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={news.coverImage}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-primary-600 font-medium">{news.category}</span>
              <span className="text-slate-400">•</span>
              <span className="flex items-center text-slate-500">
                <Calendar className="w-4 h-4 mr-1" />
                {news.date}
              </span>
              <span className="flex items-center text-slate-500">
                <Clock className="w-4 h-4 mr-1" />
                {news?.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl text-slate-900 md:text-4xl">
              {news.title}
            </h1>

            {/* Excerpt */}
            {news.excerpt && (
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {news.excerpt}
              </p>
            )}

            {/* Full Content */}
            <RichText html={news.content} />
          </div>
        </div>
      </div>
    </div>
  );
}