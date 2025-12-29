"use client"
import Link  from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import EditProgramModal from "./EditProgramModal";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const ProgramsTable = ({programs, fetchPrograms}) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openEdit = (program) => {
    setSelectedProgram(program);
    setIsOpen(true);
  };
  
  
  const truncatedText = (text, limit = 60) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  } 
  const deleteProgram = async (slug, title) => {
    if(!confirm(`Are you sure to delete ${title}? It can't be undone!`)) return;
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs/${slug}`);
      toast.success(res.data.message);
      await fetchPrograms();
    } catch (e) {
      return toast.error(e.data.message);
    }
  }
  
  
  const handleUpdate = async (data, slug, close) => {
  console.log("form data:", data);
  try {
    setLoading(true);
    await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/programs/${slug}`,
      data
    );
    toast.success("Program updated");
    fetchPrograms();
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
        {programs.map((pro, idx)=> {
        return <tr key={idx}>
          <td className="px-2 py-2 underline"><Link href={`/programs/${pro.slug}`}>{truncatedText(pro.title)}</Link></td>
          <td className="px-2 py-2">{new Date(pro.updatedAt).toDateString()}</td>
          <td className="px-2 py-2">{pro.category}</td>
          <td className="px-2 py-2 text-lg text-gray-900">{pro.status}</td>
          
          <td className="px-2 py-2 flex gap-4">
          <button onClick={() => openEdit(pro)}>
            <BsPencilSquare size={18} color="purple"/>
          </button>

          <button onClick={()=>deleteProgram(pro.slug, pro.title)}>
            <MdDeleteForever size={20} color="red"/>
          </button>
          </td>
        </tr>
        })}
      </tbody>
    </table>
  </div>
</section>
        <EditProgramModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        program={selectedProgram}
        onSubmit={handleUpdate}
        loading={loading}/>
      </>
  )
}


export default ProgramsTable;