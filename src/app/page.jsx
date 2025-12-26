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
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We run various programs aimed at making a tangible difference in people's lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <ProgramCard key={idx} program={program} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/programs" className="btn-secondary">
              View All Programs
            </a>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest activities and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, idx) => (
              <NewsCard key={idx} news={news} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/news" className="btn-primary">
              Read All News
            </a>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      {/*<section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5K+', label: 'Lives Impacted' },
              { number: '50+', label: 'Volunteers' },
              { number: '20+', label: 'Communities Served' },
              { number: '3+', label: 'Years of Service' },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <CallToAction />
    </>
  )
}