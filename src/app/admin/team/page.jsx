'use client'
import TeamTable from "@/components/admin/TeamTable";
import axios from "axios";
import { useState, useEffect } from "react";

const TeamAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      setError(null)
      const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/team`);
      setMembers(response.data.members);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchMembers()
  }, [])

  return (
  <div className='py-4'>
    <h2 className='py-4 text-center'>Admin Team Table</h2>
    {loading && <p className='text-center text-gray-500'>Loading team members...</p>}
    {error && <p className='text-center text-red-500'>{error}</p>}
    <TeamTable members={members} fetchMembers={fetchMembers}/>
  </div>
  )
}


export default TeamAdmin;
