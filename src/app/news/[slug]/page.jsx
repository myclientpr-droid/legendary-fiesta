//app/news/[slug]/page.jsx 
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import FormatedText from "@/components/shared/FormatedText";
//import { auth } from "@clerk/nextjs/server";
import { calculateReadTime, dateFormat } from "@/utils/utilityFunctions";
import ShareButton from "@/components/shared/PostShare";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`
  );

  const { news } = await res.json();

  if (!news) return {};

  return {
    title: news.title,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      url: `https://ashedui.vercel.app/news/${slug}`,
      type: "article",
      images: [
        {
          url: news.coverImage, // ✅ THIS fixes your problem
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  /*const { userId } = await auth();
  if(!userId) return null;*/
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`)
  const {news} = await res.json()
  if (!news) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center text-blue-500 underline hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Article Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-64 md:h-80">
            
            <Image
              src={news.coverImage}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          
            {/* Category overlay */}
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-[#221569]/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full backdrop-blur-md">
                {news.category}
              </span>
            </div>
          
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta */}
            <div className="flex flex-row sm:items-center justify-between gap-2 px-4 mb-4">
          
              {/* Left section */}
              <div className="flex items-center gap-x-4 gap-y-2">
                <span className="flex items-center text-gray-600 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  {dateFormat(news.createdAt)}
                </span>
            
                <span className="hidden sm:inline text-gray-500">•</span>
            
                <span className="flex items-center text-gray-600 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  {calculateReadTime(news?.content)}
                </span>
              </div>
              {/* Share button */}
              <ShareButton
                title= {news.title}
                text= {news.excerpt}
                path= "news"
                slug= {news.slug}
                className = "bg-gray-100 rounded-full p-2"/>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {news.title}
            </h1>

            {/* Excerpt */}
            <div className="text-lg text-gray-600 mb-6 leading-relaxed">
              {/<[a-z][\s\S]*>/i.test(news.excerpt) ? (
                <div dangerouslySetInnerHTML={{ __html: news.excerpt }} />
              ) : (
                <FormatedText text={news.excerpt}/>
              )}
            </div>

            {/* Full Content */}
            <div className="prose max-w-none text-gray-700">
              {/<[a-z][\s\S]*>/i.test(news.content) ? (
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              ) : (
                <FormatedText text={news.content}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}