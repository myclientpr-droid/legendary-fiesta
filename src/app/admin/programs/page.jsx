'use client'
import ProgramsTable from "@/components/admin/ProgramsTable";
import axios from "axios";
import { useState, useEffect } from "react";

const Programs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [programs, setPrograms] = useState([]);
  
  const fetchPrograms = async () => {
    try {
      setLoading(true);
      setError(null)
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs`);
    const {data} = response.data;
    setPrograms(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchPrograms()
  }, [])
  
  return (
  <div className='py-4'>
    <h2 className='py-4 text-center'>Admin Programs Table</h2>
      <ProgramsTable programs={programs} fetchPrograms={fetchPrograms}/>
  </div>
  )
}


export default Programs;