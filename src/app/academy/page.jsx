import Image from 'next/image';
import AcademyCard from '@/components/AcademyCard';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'ASH Online Academy - Aurbina Scholars Hub',
  description: 'Classes, workshops and learning activities from ASH Online Academy.',
};

export default async function AcademyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/academy`, {
    cache: "no-store",
  });
  if(!res.ok) return <div className='section-padding container-custom'>No academy activities found</div>
  const {activities} = await res.json();

  return (
    <>
      <PageHeader
        eyebrow="Learning without borders"
        title="ASH Online Academy"
        description="Explore our online classes, workshops, tutorials and learner stories — learning that reaches refugee children and youth wherever they are."
        logo={
          <Image
            src="/ash-online-academy.jpeg"
            alt="ASH Online Academy logo"
            width={1254}
            height={1254}
            preload
            className="h-24 w-24 rounded-full bg-white object-contain p-2 ring-1 ring-white/70 shadow-glass sm:h-28 sm:w-28"
          />
        }
      />

      <div className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading mb-8">Academy Activities</h2>
          {activities?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {activities.map((activity) => (
                <AcademyCard key={activity._id} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="glass p-10 text-center text-slate-600">
              New academy activities will be published here soon.
            </div>
          )}
        </div>
      </div>
    </>
  )
}
