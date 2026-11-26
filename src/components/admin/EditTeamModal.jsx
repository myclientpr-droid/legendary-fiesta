"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function EditTeamModal({
  isOpen,
  onOpenChange,
  member,
  onSubmit,
  loading,
}) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    socialLink: "",
    order: "",
  });
  const [image, setImage] = useState(null);

  // Populate form when member changes
  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || "",
        position: member.position || "",
        socialLink: member.socialLink || "",
        order: member.order ?? "",
      });
      setImage(null);
    }
  }, [member]);

  // ESC + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onOpenChange]);

  if (!isOpen || !member) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("position", formData.position);
    data.append("socialLink", formData.socialLink);
    data.append("order", formData.order || 0);
    // Only sent when the admin picks a replacement picture
    if (image) data.append("image", image);

    onSubmit(data, member.slug, () => onOpenChange(false));
  };

  return (
    <div className="fixed top-[4rem] left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl sm:max-h-[70vh] rounded-xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-2 bg-zinc-700 border-b rounded-t-md border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-50">Edit Team Member</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-zinc-50 font-semibold hover:text-zinc-900 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="bg-zinc-500 flex-1 overflow-y-auto px-6 py-2">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Picture */}
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-full overflow-hidden bg-zinc-300 shrink-0">
                <Image
                  src={image ? URL.createObjectURL(image) : member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <label
                  htmlFor="memberImage"
                  className="inline-block cursor-pointer rounded-md border bg-white px-3 py-1 text-sm font-medium hover:bg-zinc-100">
                  Change picture
                </label>
                <input
                  type="file"
                  id="memberImage"
                  accept="image/*"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <p className="text-xs mt-1">Leave empty to keep the current picture.</p>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Social + order */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Social link
                </label>
                <input
                  type="url"
                  name="socialLink"
                  value={formData.socialLink}
                  onChange={handleChange}
                  placeholder="https://www.linkedin.com/in/username"
                  className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Display order
                </label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-4 py-1 rounded-md border"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
