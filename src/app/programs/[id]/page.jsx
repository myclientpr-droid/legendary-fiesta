import { programs } from "@/data/programs"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ProgramDetailPage({ params }) {
  const program = programs.find(p => p.id === params.id)

  if (!program) return notFound()

  return (
    <div className="section-padding">
      <div className="container-custom max-w-5xl">

        {/* Breadcrumb */}
        <Link
          href="/programs"
          className="text-sm text-primary-600 hover:underline mb-4 inline-block"
        >
          ← Back to Programs
        </Link>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Category */}
        <span className="inline-block mb-3 text-sm font-medium px-4 py-1 rounded-full bg-primary-100 text-primary-700">
          {program.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {program.title}
        </h1>

        {/* Short description */}
        <p className="text-lg text-gray-600 mb-8">
          {program.description}
        </p>

        {/* Details Section */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-3">
            What This Program Includes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {program.details}
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/donate" className="btn-primary">
            Support This Program
          </Link>
          <Link href="/get-involved" className="btn-secondary">
            Volunteer With Us
          </Link>
        </div>

      </div>
    </div>
  )
}