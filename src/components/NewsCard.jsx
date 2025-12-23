import Link from 'next/link'

const NewsCard = ({ news }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="card h-full">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        {/* Placeholder image - replace with actual image */}
        <div className="text-gray-500">
          <div className="h-10 w-10 mx-auto bg-gray-400 rounded-full mb-2"></div>
          News Image
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {formatDate(news.date)}
        </div>
        <h3 className="text-xl font-bold mb-3">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.excerpt}</p>
        <Link
          href={`/news/${news.slug}`}
          className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}

export default NewsCard