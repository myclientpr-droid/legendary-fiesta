'use client'
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";


const NewsTable = ({news, fetchNews}) => {
  const truncatedText = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
  
  const deleteNews = async (slug, title) => {
    if(!confirm(`Are you sure to delete ${title}? It can't be undone!`)) return;
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`);
      toast.success(res.data.message)
      fetchNews();
    } catch (e) {
      return toast.error(e.data.message);
    }
  }

  return (
<section className="text-gray-600 body-font">
  <div className="lg:w-2/3 w-full mx-auto overflow-auto">
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Actions</th>
        </tr>
      </thead>
      <tbody>
        {news?.map((article, idx)=> {
        return <tr key={idx}>
          <td className="px-2 py-2 underline"><Link className="active:text-purple-500" href={`/news/${article.slug}`}>{truncatedText(article.title)}</Link></td>
          <td className="px-2 py-2">{new Date(article.updatedAt).toDateString()}</td>
          <td className="px-2 py-2">{article.category}</td>
          <td className="px-2 py-2 text-lg text-gray-900">{article.status}</td>
          <td className="w-10 text-center font-semibold text-red-500"><button onClick={()=>deleteNews(article.slug, article.title)}>Delete</button></td>
        </tr>
        })}
      </tbody>
    </table>
  </div>
</section>
  )
}


export default NewsTable;