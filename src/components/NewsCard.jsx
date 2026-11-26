import Link from 'next/link'
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ news }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="group card flex h-full flex-col">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100">
        <Image
          src={news.coverImage}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 text-sm text-slate-500">
          {formatDate(news.publishedAt)}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{news.title}</h3>
        <div className="text-slate-600 mb-4 line-clamp-3">{news.excerpt}</div>
        <Link
          href={`/news/${news.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}

export default NewsCard
