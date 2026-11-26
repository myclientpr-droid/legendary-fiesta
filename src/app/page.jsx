import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Hero from '@/components/Hero'
import CallToAction from '@/components/CallToAction'
import ProgramCard from '@/components/ProgramCard'
import NewsCard from '@/components/NewsCard'
//import { newsArticles } from "@/data/programs"


//const latestNews = newsArticles.filter(item => item.latest);
export default async function HomePage() {
// programs
const resPrograms = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs`, {
  cache: "no-store",
});
if(!resPrograms.ok) return <div className='section-padding container-custom'>No programs found</div>
const {data} = await resPrograms.json();
const programs = data;

// latestNews 
const resNews = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news`, {
  cache: "no-store",
});
if(!resNews.ok) return <div className='section-padding container-custom'>No news found</div>
const {news} = await resNews.json();
const latestNews = news;

  return (
    <>
      <Hero />
      
      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="badge">Our work</span>
            <h2 className="mt-4 mb-4 text-slate-900">Our Programs</h2>
            <p className="text-lg text-slate-600">
              We run various programs aimed at making a tangible difference in people&apos;s lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, idx) => (
              <ProgramCard key={idx} program={program} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/programs" className="btn-secondary">
              View All Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="badge">Newsroom</span>
            <h2 className="mt-4 mb-4 text-slate-900">Latest News &amp; Updates</h2>
            <p className="text-lg text-slate-600">
              Stay updated with our latest activities and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestNews.map((news, idx) => (
              <NewsCard key={idx} news={news} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news" className="btn-primary">
              Read All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="pb-6">
        <div className="container-custom">
          <div className="glass relative overflow-hidden p-8 text-center sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-400/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
            />

            <div className="relative">
              <span className="badge">Free resources</span>
              <h2 className="mt-4 mb-4 text-slate-900">Learning Resources</h2>

              <p className="mx-auto mb-8 max-w-3xl text-slate-600">
                Through our collaboration with{' '}
                <span className="font-semibold text-slate-900">Myanmar Books Space (MBS)</span>,
                Aurbina Scholars Hub provides free and accessible textbooks, learning materials,
                and reading resources for students, teachers, and lifelong learners.
              </p>

              <a
                href="https://mbsi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore Learning Resources
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}