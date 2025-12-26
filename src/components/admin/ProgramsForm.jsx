'use client'
import { useState, useEffect } from "react"
import axios from "axios";
import Image from "next/image";
import { toast } from 'react-toastify';

export const ProgramsForm = ()=> {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    status: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data=> ({...data, [name]:value})));
  };
  
  const toSlug = (text) => {
    return text.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/[\s+]/g, "-")
    .replace(/[-+]/g, "-")
    .replace(/^-|-$/g, "");
  };
  const slug = toSlug(data.title);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("description", data.description);
    formData.append("status", data.status);
    formData.append("category", data.category);
    formData.append("image", image);
    formData.append("slug", slug);
    
    try{
      setLoading(true);
      if(!image) return toast.error("Please add image");
      const response = await axios.post("/api/programs", formData);
      if(response.data.success) {
        setData({
          title: "",
          shortDescription: "",
          description: "",
          category: "",
          status: "",
        });
        setImage(false);
        return toast.success("Program added successfully");
      } else {
        return toast.error("Failed to add program");
      }
    } catch (e) {
      return toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }
  
  return (
  <div>
      <h1 className='text-ceter pb-8'>Upload Program</h1>
<form
  onSubmit={handleSubmit}
  className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-sm"
>
  {/* Header */}
  <div className="space-y-1">
    <h2 className="text-2xl font-semibold text-gray-800">
      Upload Program
    </h2>
    <p className="text-sm text-gray-500">
      Add a new program with details and visibility status
    </p>
  </div>

  {/* Image Upload */}
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-700">
      Program Image
    </label>

    <label
      htmlFor="image"
      className="group relative flex items-center justify-center w-full h-40 border-2 border-dotted rounded-lg cursor-pointer transition hover:border-blue-500">
      <Image
        src={!image ? "/upload_area.png" : URL.createObjectURL(image)}
        alt="Upload image"
        fill
        className="object-contain p-4"
      />

      <span className="absolute bottom-3 text-xs text-gray-500 group-hover:text-blue-500">
        Click to upload image
      </span>
    </label>

    <input
      type="file"
      id="image"
      name="image"
      onChange={(e) => setImage(e.target.files[0])}
      hidden
      required
    />
  </div>

  {/* Title */}
  <div className="flex flex-col gap-2">
    <label htmlFor="title" className="text-sm font-medium text-gray-700">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={data.title}
      onChange={handleChange}
      placeholder="Program title goes here"
      required
      className="input-field"
    />
  </div>

  {/* Short Description */}
  <div className="flex flex-col gap-2">
    <label htmlFor="shortDescription" className="text-sm font-medium text-gray-700">
      Short Description
    </label>
    <textarea
      id="shortDescription"
      name="shortDescription"
      value={data.shortDescription}
      onChange={handleChange}
      placeholder="Briefly describe the program"
      rows={4}
      required
      className="input-field resize-none"
    />
  </div>

  {/* Full Description */}
  <div className="flex flex-col gap-2">
    <label htmlFor="description" className="text-sm font-medium text-gray-700">
      Program Description
    </label>
    <textarea
      id="description"
      name="description"
      value={data.description}
      onChange={handleChange}
      placeholder="Full program details go here"
      rows={8}
      required
      className="input-field resize-none"
    />
  </div>

  {/* Category & Status */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col gap-2">
      <label htmlFor="category" className="text-sm font-medium text-gray-700">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={data.category}
        onChange={handleChange}
        required
        className="input-field"
      >
        <option value="">Select category</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
        <option value="Relief">Relief</option>
        <option value="Awareness">Awareness</option>
        <option value="Community">Community</option>
      </select>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="status" className="text-sm font-medium text-gray-700">
        Status
      </label>
      <select
        id="status"
        name="status"
        value={data.status}
        onChange={handleChange}
        required
        className="input-field"
      >
        <option value="">Select status</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  </div>

  {/* Submit */}
  <div className="w-full flex justify-center pt-4">
    <button
      type="submit"
      className="w-full px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
      {loading ? "Saving Program..." : "Save Program" }
    </button>
  </div>
</form>
 </div>
 )
}