import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import RichText from "@/components/shared/RichText";


export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs/${slug}`);
  if(!res.ok) return <div>Programs not found</div>
  const data = await res.json();
  const program = data.data;
  
  return (
    <div className="section-padding min-h-screen">
  <div className="container-custom max-w-5xl mx-auto">

    {/* Breadcrumb */}
    <Link
      href="/programs"
      className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition hover:text-primary-700"
    >
      ← Back to Programs
    </Link>

    {/* Program Image */}
    <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-glass ring-1 ring-white/60 md:h-96">
      <Image
        src={program.image}
        alt={program.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
      />
    </div>

    {/* Category */}
    <span className="badge mb-4">
      {program.category}
    </span>

    {/* Title */}
    <h1 className="mb-6 text-3xl text-slate-900 md:text-4xl lg:text-5xl">
      {program.title}
    </h1>

    {/* Short Description */}
    {program.shortDescription && (
      <p className="mb-10 text-lg leading-relaxed text-slate-600">
        {program.shortDescription}
      </p>
    )}

    {/* Details Section */}
    {program.description && (
      <div className="glass mb-12 p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          What This Program Includes
        </h2>
        <RichText html={program.description} />
      </div>
    )}

    {/* Call to Action */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/donate"
        className="btn-donate px-6 py-3 text-base"
      >
        Support This Program
      </Link>
      <Link
        href="/get-involved"
        className="btn-secondary px-6 py-3 text-base"
      >
        Volunteer With Us
      </Link>
    </div>

  </div>
</div>
  )
}