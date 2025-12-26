'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { toast } from 'react-toastify';

export const NewsForm = ()=> {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    status: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]:value}));
  };
  
  const toSlug = (text) => {
    return text.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/[\s+]/g, "-")
    .replace(/[-+]/g, "-")
    .replace(/^-|-$/g, "");
  }
  const slug = toSlug(data.title);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("excerpt", data.excerpt);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("status", data.status);
    formData.append("image", image);
    formData.append("slug", slug);
    
    try{
      setLoading(true);
      if(!image) return toast.error("Please add image");
      const res = await axios.post('/api/news', formData);
      if(res.data.success) {
        setData({
          title: "",
          excerpt: "",
          content: "",
          category: "",
          status: "",
        });
        setImage(false);
        return toast.success(res.data.message);
      }
    } catch (e) {
      return toast.error(e.message || res.data.message);
    } finally {
      setLoading(false);
    }
  }
  
  return (
  <div>
      <h1 className='text-ceter'>Upload News</h1>
    <form
    onSubmit={handleSubmit}
    className='section-padding container-custom flex flex-col gap-5'>
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
    </div>
        <input type='file' id='image' hidden required
        onChange={(e)=> setImage(e.target.files[0])}/>
      <label htmlFor='title' className="text-sm font-medium text-gray-700">Article title</label>
      <input
      type="text"
      name="title"
      id="title"
      placeholder="News title goes here"
      onChange={handleChange}
      className="input-field"
      value={data.title}/>
      <label htmlFor="excerpt" className="text-sm font-medium text-gray-700">Article Summary</label>
      <textarea 
      type="text"
      name="excerpt"
      id='excerpt'
      placeholder="Article summary goes here"
      value={data.excerpt}
      onChange={handleChange}
      className="input-field"
      rows={3}></textarea>
      <label htmlFor='content' className="text-sm font-medium text-gray-700">Full article body</label>
      <textarea
      type='text'
      name='content'
      id='content'
      placeholder='Article body goes here'
      rows={6}
      onChange={handleChange}
      className="input-field"
      value={data.content}></textarea>
      
      {/*category and status*/}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-8'>
      <div className='flex flex-col gap-2'>
      <label htmlFor='category' className="text-sm font-medium text-gray-700">Category</label>
      <select
      name='category'
      id='category'
      value={data.category}
      onChange={handleChange}
      className="input-field"
      required>
      <option value="">select category</option>
      <option value="Education">Education</option>
      <option value="Health">Health</option>
      <option value="Relief">Relief</option>
      <option value="Community">Community</option>
      <option value="Events">Events</option>
      <option value="Announcements">Announcements</option>
      <option value="Updates">Updates</option>
      <option value="Stories">Stories</option>
      <option value="Emergency">Emergency</option>
      </select>
      </div>
        
      <div className='flex flex-col gap-2'>
      <label htmlFor='status' className="text-sm font-medium text-gray-700">Status</label>
      <select
      name='status'
      id='status'
      value={data.status}
      onChange={handleChange}
      className="input-field"
      required>
      <option value="">select status</option>
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
      {loading ? "Saving article..." : "Save article" }
    </button>
  </div>
    </form>
  </div>
  )
}