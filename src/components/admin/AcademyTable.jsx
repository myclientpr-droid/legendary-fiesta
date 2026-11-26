"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import EditAcademyModal from "./EditAcademyModal";
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const AcademyTable = ({ activities, fetchActivities }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openEdit = (activity) => {
    setSelectedActivity(activity);
    setIsOpen(true);
  };

  const deleteActivity = async (slug, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/academy/${slug}`
      );
      toast.success(res.data.message);
      fetchActivities();
    } catch (e) {
      toast.error(e.response?.data?.message || "Delete failed");
    }
  };

  const handleUpdate = async (data, slug, close) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/academy/${slug}`,
        data
      );
      toast.success(res.data.message);
      fetchActivities();
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
                <th className="px-2 py-3 bg-gray-100">Title</th>
                <th className="px-2 py-3 bg-gray-100">Date</th>
                <th className="px-2 py-3 bg-gray-100">Category</th>
                <th className="px-2 py-3 bg-gray-100">Status</th>
                <th className="px-2 py-3 bg-gray-100">Actions</th>
              </tr>
            </thead>

            <tbody>
              {activities?.map((activity) => (
                <tr key={activity._id}>
                  <td className="px-2 py-2 underline">
                    <Link href={`/academy/${activity.slug}`}>
                      {activity.title}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    {new Date(activity.updatedAt).toDateString()}
                  </td>
                  <td className="px-2 py-2">{activity.category}</td>
                  <td className="px-2 py-2">{activity.status}</td>

                  <td className="px-2 py-2 flex gap-4">
                    <button onClick={() => openEdit(activity)}>
                      <BsPencilSquare size={18} color="purple"/>
                    </button>

                    <button
                      onClick={() => deleteActivity(activity.slug, activity.title)}>
                      <MdDeleteForever size={20} color="red"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!activities?.length && (
            <p className="text-center py-6 text-gray-500">No academy activities yet.</p>
          )}
        </div>
      </section>

      <EditAcademyModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        activity={selectedActivity}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </>
  );
};

export default AcademyTable;
