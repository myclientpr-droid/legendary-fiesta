import ProgramCard from '@/components/ProgramCard'

export default async function ProgramsPage() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs`, {
    cache: "no-store",
  });
  if(!res.ok) return <div className='section-padding container-custom'>No programs found</div>
  const json = await res.json();
  const programs = json.data;
  
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-center mb-4">Our Programs</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We implement comprehensive programs designed to address the most pressing needs in the communities we serve.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="mb-6">Want to Support Our Programs?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donate" className="btn-primary">
              Make a Donation
            </a>
            <a href="/get-involved" className="btn-secondary">
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}