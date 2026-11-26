'use client'
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from 'react-toastify';

export const TeamForm = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    position: "",
    socialLink: "",
    order: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("position", data.position);
    formData.append("socialLink", data.socialLink);
    formData.append("order", data.order || 0);
    formData.append("image", image);

    try {
      setLoading(true);
      if(!image) return toast.error("Please add a picture");
      const res = await axios.post('/api/team', formData);
      if(res.data.success) {
        setData({
          name: "",
          position: "",
          socialLink: "",
          order: "",
        });
        setImage(false);
        return toast.success(res.data.message);
      }
    } catch (e) {
      return toast.error(e.response?.data?.message || e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div>
      <h1 className='text-center'>Add Team Member</h1>
    <form
    onSubmit={handleSubmit}
    className='section-padding container-custom flex flex-col gap-5'>
      {/* Picture Upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Member Picture
        </label>

        <label
          htmlFor="image"
          className="group relative flex items-center justify-center w-full h-40 border-2 border-dotted rounded-lg cursor-pointer transition hover:border-blue-500">
          <Image
            src={!image ? "/upload_area.png" : URL.createObjectURL(image)}
            alt="Upload member picture"
            fill
            className="object-contain p-4"
          />

          <span className="absolute bottom-3 text-xs text-gray-500 group-hover:text-blue-500">
            Click to upload picture
          </span>
        </label>
      </div>
      <input type='file' id='image' hidden accept="image/*" required
      onChange={(e)=> setImage(e.target.files[0])}/>

      <label htmlFor='name' className="text-sm font-medium text-gray-700">Full name</label>
      <input
      type="text"
      name="name"
      id="name"
      placeholder="Member full name"
      onChange={handleChange}
      className="input-field"
      value={data.name}/>

      <label htmlFor='position' className="text-sm font-medium text-gray-700">Position</label>
      <input
      type="text"
      name="position"
      id="position"
      placeholder="e.g. Program Director"
      onChange={handleChange}
      className="input-field"
      value={data.position}/>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='socialLink' className="text-sm font-medium text-gray-700">Social link</label>
          <input
          type="url"
          name="socialLink"
          id="socialLink"
          placeholder="https://www.linkedin.com/in/username"
          onChange={handleChange}
          className="input-field"
          value={data.socialLink}/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='order' className="text-sm font-medium text-gray-700">Display order</label>
          <input
          type="number"
          name="order"
          id="order"
          placeholder="Lower numbers appear first"
          onChange={handleChange}
          className="input-field"
          value={data.order}/>
        </div>
      </div>

      {/* Submit */}
      <div className="w-full flex justify-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60">
          {loading ? "Saving member..." : "Save member"}
        </button>
      </div>
    </form>
  </div>
  )
}
