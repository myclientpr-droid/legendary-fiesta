"use client"
import Link from "next/link";
import Image from "next/image";
import FormatedText from "@/components/shared/FormatedText";
import { dateFormat } from "@/utils/utilityFunctions";
import ShareButton from "@/components/shared/PostShare";

const ProgramCard = ({ program }) => {
  const truncated = (text, limit = 100) => {
    return text?.length > limit ? text?.slice(0, limit) + "..." : text;
  }

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 z-10 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date and Share Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{dateFormat(program.createdAt)}</span>
          </div>
          
          {/* Share Button */}
          <ShareButton 
          title={program.title}
          text={program.shortDescription}
          path= "programs"
          slug={program.slug}
          className="bg-gray-100 rounded-full p-2"/>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {program.title}
        </h3>
        
        {/* Short description */}
        <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          <FormatedText text={truncated(program.shortDescription)}/>
        </div>
        
        {/* CTA */}
        <Link
          href={`/programs/${program.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200"
        >
          Learn more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;