'use client'
import AcademyTable from "@/components/admin/AcademyTable";
import axios from "axios";
import { useState, useEffect } from "react";

const AcademyAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      setError(null)
      const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/academy`);
      setActivities(response.data.activities);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchActivities()
  }, [])

  return (
  <div className='py-4'>
    <h2 className='py-4 text-center'>Admin Academy Table</h2>
    {loading && <p className='text-center text-gray-500'>Loading activities...</p>}
    {error && <p className='text-center text-red-500'>{error}</p>}
    <AcademyTable activities={activities} fetchActivities={fetchActivities}/>
  </div>
  )
}


export default AcademyAdmin;
