"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import EditTeamModal from "./EditTeamModal";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const TeamTable = ({ members, fetchMembers }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openEdit = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const deleteMember = async (slug, name) => {
    if (!confirm(`Remove "${name}" from the team? This cannot be undone.`)) return;
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/team/${slug}`
      );
      toast.success(res.data.message);
      fetchMembers();
    } catch (e) {
      toast.error(e.response?.data?.message || "Delete failed");
    }
  };

  const handleUpdate = async (formData, slug, close) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/team/${slug}`,
        formData
      );
      toast.success(res.data.message);
      fetchMembers();
      close();
    } catch (e) {
      toast.error(e.response?.data?.message || "Update failed");
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
                <th className="px-2 py-3 bg-gray-100">Picture</th>
                <th className="px-2 py-3 bg-gray-100">Name</th>
                <th className="px-2 py-3 bg-gray-100">Position</th>
                <th className="px-2 py-3 bg-gray-100">Order</th>
                <th className="px-2 py-3 bg-gray-100">Social</th>
                <th className="px-2 py-3 bg-gray-100">Actions</th>
              </tr>
            </thead>

            <tbody>
              {members?.map((member) => (
                <tr key={member._id}>
                  <td className="px-2 py-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-2 py-2">{member.name}</td>
                  <td className="px-2 py-2">{member.position}</td>
                  <td className="px-2 py-2">{member.order}</td>
                  <td className="px-2 py-2 truncate max-w-[160px]">
                    {member.socialLink ? (
                      <a
                        href={member.socialLink}
                        target="_blank"
                        className="underline text-blue-600">
                        {member.socialLink}
                      </a>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>

                  <td className="px-2 py-2 flex gap-4">
                    <button onClick={() => openEdit(member)}>
                      <BsPencilSquare size={18} color="purple"/>
                    </button>

                    <button onClick={() => deleteMember(member.slug, member.name)}>
                      <MdDeleteForever size={20} color="red"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!members?.length && (
            <p className="text-center py-6 text-gray-500">No team members yet.</p>
          )}
        </div>
      </section>

      <EditTeamModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        member={selectedMember}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </>
  );
};

export default TeamTable;
