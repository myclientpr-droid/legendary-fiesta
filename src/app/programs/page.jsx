import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import ProgramCard from '@/components/ProgramCard'

export default async function ProgramsPage() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs`, {
    cache: "no-store",
  });
  if(!res.ok) return <div className='section-padding container-custom'>No programs found</div>
  const json = await res.json();
  const programs = json.data;
  
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Our Programs"
        description="We implement comprehensive programs designed to address the most pressing needs in the communities we serve."
      />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, idx) => (
              <ProgramCard key={idx} program={program} />
            ))}
          </div>

          <div className="glass mt-14 p-8 text-center sm:p-12">
            <h2 className="mb-4 text-slate-900">Want to Support Our Programs?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600">
              Fund a classroom, sponsor learning materials, or volunteer your time — every
              contribution keeps a learner in class.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/donate" className="btn-donate">
                Make a Donation
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
