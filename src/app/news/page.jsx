import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/programs';
import { auth } from "@clerk/nextjs/server";


// Categories for filtering
const categories = ['All', 'Announcements', 'Programs', 'Events', 'Partnerships', 'Success Stories', 'Updates']

export default async function NewsPage() {
  const { userId } = await auth();
  if(!userId) return null;
  
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
            {newsArticles.map((article) => (
              <NewsCard key={article.id} news={article} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              8
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}