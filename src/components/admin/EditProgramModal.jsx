"use client";

import { useEffect, useState } from "react";

export default function EditProgramModal({
  isOpen,
  onOpenChange,
  program,
  onSubmit,
  loading,
}) {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    status: "",
  });

  // Populate form when program changes
  useEffect(() => {
    if (program) {
      setFormData({
        title: program.title || "",
        shortDescription: program.shortDescription || "",
        description: program.description || "",
        category: program.category || "",
        status: program.status || "draft",
      });
    }
  }, [program]);

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

  if (!isOpen || !program) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, program.slug, () => onOpenChange(false));
  };
  console.log("formData:", formData);

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
          <h2 className="text-lg font-semibold text-zinc-50">Edit Article</h2>
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
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                rows={3}
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Description
              </label>
              <textarea
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Category & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-1"
                  required
                >
                  {[
                    'Education',
                    'Health',
                    'Relief',
                    'Awareness',
                    'Community',
                  ].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-1">
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
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