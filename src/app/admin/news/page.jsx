'use client'
import NewsTable from "@/components/admin/NewsTable";
import axios from "axios";
import { useState, useEffect } from "react";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  
  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null)
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news`);
    const data = response.data.news;
    setNews(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchNews()
  }, [])
  
  return (
  <div className='py-4'>
    <h2 className='py-4 text-center'>Admin News Table</h2>
      <NewsTable news={news} fetchNews={fetchNews}/>
  </div>
  )
}


export default News;