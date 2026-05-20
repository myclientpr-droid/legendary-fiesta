"use client";

import Link from "next/link";
import Image from "next/image";
import FormatedText from "@/components/shared/FormatedText";
import { dateFormat } from "@/utils/utilityFunctions";
import ShareButton from "@/components/shared/PostShare";

const NewsCard = ({ news }) => {

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
        <Image
          src={news.coverImage}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {news.category && (
          <span className="absolute top-3 left-3 z-10 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            {news.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Date and Share */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500">
            {dateFormat(news.publishedAt)}
          </div>
          
          <ShareButton
          title = {news.title}
          text = {news.excerpt}
          path = "news"
          slug = {news.slug}
          className = "bg-gray-100 rounded-full p-2"/>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2">
          {news.title}
        </h3>

        {/* Excerpt */}
        <div className="text-gray-600 mb-4 line-clamp-3">
          <FormatedText text={news.excerpt} />
        </div>

        {/* CTA */}
        <Link
          href={`/news/${news.slug}`}
          className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center gap-1 mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;