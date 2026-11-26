import TeamCard from '@/components/TeamCard';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Our Team - Aurbina Scholars Hub',
  description: 'Meet the people behind Aurbina Scholars Hub.',
};

export default async function TeamPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/team`, {
    cache: "no-store",
  });
  if(!res.ok) return <div className='section-padding container-custom'>No team members found</div>
  const {members} = await res.json();

  return (
    <>
      <PageHeader
        eyebrow="Meet the team"
        title="Our Team"
        description="Aurbina Scholars Hub is run by a youth-led team of educators, volunteers and community organisers who believe every learner deserves a safe place to grow."
      />

      <div className="section-padding">
        <div className="container-custom">
          {members?.length ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {members.map((member, idx) => (
                <TeamCard key={member._id} member={member} index={idx} />
              ))}
            </div>
          ) : (
            <div className="glass p-10 text-center text-slate-600">
              Team profiles will be published here soon.
            </div>
          )}
        </div>
      </div>
    </>
  )
}
