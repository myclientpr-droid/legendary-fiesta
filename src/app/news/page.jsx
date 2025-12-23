import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/programs';
//import { auth } from "@clerk/nextjs/server";

export default async function NewsPage() {
  //const { userId } = await auth();
  //if(!userId) return null;
  
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest announcements, scholarship programs, success stories, and events at Aurbina Scholars Hub.
          </p>
        </div>

        {/* News Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              return <NewsCard key={article.id} news={article} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}