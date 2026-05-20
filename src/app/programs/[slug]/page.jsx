import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import FormatedText from "@/components/shared/FormatedText";
import { calculateReadTime, dateFormat } from "@/utils/utilityFunctions";
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ShareButton from "@/components/shared/PostShare";

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs/${slug}`);
  if(!res.ok) return <div>Programs not found</div>
  const data = await res.json();
  const program = data.data;
  
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
  <div className="container-custom max-w-5xl mx-auto">

    {/* Breadcrumb */}
    <Link
      href="/programs"
      className="text-sm text-primary-600 hover:underline mb-6 inline-block"
    >
      ← Back to Programs
    </Link>

    {/* Program Image */}
    <div className="relative h-64 md:h-80">
            
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
          
            {/* Category overlay */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-primary-100 text-primary-700">
                {program.category}
              </span>
            </div>
          
          </div>

    {/* Meta */}
    <div className="flex items-center px-4 justify-between space-x-4 my-4">
      <div className='flex flex-row gap-6'>
      <span className="flex items-center text-gray-600">
        <Calendar className="w-4 h-4 mr-1" />
        {dateFormat(program.createdAt)}
      </span>
      <span className="flex items-center text-gray-600">
        <Clock className="w-4 h-4 mr-1" />
        {calculateReadTime(program?.description)}
      </span>
      </div>
      {/* Share button */}
      <ShareButton
        title= {program.title}
        text= {program.shortDescription}
        path= "programs"
        slug= {program.slug}
        className = "bg-gray-100 rounded-full p-2"/>
    </div>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
      {program.title}
    </h1>

    {/* Short Description */}
    <div className="text-lg text-gray-700 mb-10 leading-relaxed">
      <FormatedText text={program.shortDescription}/>
    </div>

    {/* Details Section */}
    {program.description && (
      <div className="bg-white rounded-xl p-6 shadow-md mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          What This Program Includes
        </h2>
        <div className="text-gray-700 leading-relaxed"><FormatedText text={program.description}/></div>
      </div>
    )}

    {/* Call to Action */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/donate"
        className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium text-center hover:bg-primary-700 transition"
      >
        Support This Program
      </Link>
      <Link
        href="/get-involved"
        className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium text-center hover:bg-primary-50 transition"
      >
        Volunteer With Us
      </Link>
    </div>

  </div>
</div>
  )
}