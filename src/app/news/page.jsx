import NewsCard from '@/components/NewsCard';
import PageHeader from '@/components/PageHeader';

export default async function NewsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news`, {
    cache: "no-store",
  });
  if(!res.ok) return <div className='section-padding container-custom'>No programs found</div>
  const {news} = await res.json();
  const newsArticles = news;
  
  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="News & Updates"
        description="Stay informed about our latest announcements, scholarship programs, success stories, and events at Aurbina Scholars Hub."
      />

      <div className="section-padding">
        <div className="container-custom">
          <h2 className="section-heading mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsArticles.map((article, idx) => {
              return <NewsCard key={idx} news={article} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
