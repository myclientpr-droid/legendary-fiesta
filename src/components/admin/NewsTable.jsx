"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import EditArticleModal from "./EditArticleModal";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const NewsTable = ({ news, fetchNews }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openEdit = (article) => {
    setSelectedArticle(article);
    setIsOpen(true);
  };

  const deleteNews = async (slug, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`
      );
      toast.success(res.data.message);
      fetchNews();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

const handleUpdate = async (data, slug, close) => {
  console.log(data);
  try {
    setLoading(true);
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${slug}`,
      data
    );
    toast.success("Article updated");
    fetchNews();
    close();
  } catch (e) {
    toast.error("Update failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-2 py-3 bg-gray-100">Title</th>
                <th className="px-2 py-3 bg-gray-100">Date</th>
                <th className="px-2 py-3 bg-gray-100">Category</th>
                <th className="px-2 py-3 bg-gray-100">Status</th>
                <th className="px-2 py-3 bg-gray-100">Actions</th>
              </tr>
            </thead>

            <tbody>
              {news?.map((article) => (
                <tr key={article._id}>
                  <td className="px-2 py-2 underline">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    {new Date(article.updatedAt).toDateString()}
                  </td>
                  <td className="px-2 py-2">{article.category}</td>
                  <td className="px-2 py-2">{article.status}</td>

                  <td className="px-2 py-2 flex gap-4">
                      <button
                        onClick={() => openEdit(article)}>
                        <BsPencilSquare size={18} color="purple"/>
                      </button>

                    <button
                      onClick={() => deleteNews(article.slug, article.title)}>
                      <MdDeleteForever size={20} color="red"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <EditArticleModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        article={selectedArticle}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </>
  );
};

export default NewsTable;