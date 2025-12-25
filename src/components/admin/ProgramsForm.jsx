'use client'
import { useState, useEffect } from "react"
import axios from "axios";
import Image from "next/image";

export const ProgramsForm = ()=> {
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
  
  return (
  <div>
      <h1 className='text-ceter pb-8'>Upload Program</h1>
    <form className="container-custom border rounded-md py-6 flex gap-5 flex-col">
      <label htmlFor='image'>
        <Image src={!image?"/upload_area.png":URL.createObjectURL(image)} alt="Upload image" width={140} height={40}/>
      </label>
      <input type='file' id="image" name="image" onChange={(e)=> setImage(e.target.files[0])} hidden required/>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' name='title' value={data.title} onChange={handleChange} placeholder='Program title goes here'/>
      <label htmlFor='shortDescription'>Short Description</label>
      <textarea type="text" id="shortDescription" name='shortDescription' value={data.shortDescription} onChange={handleChange} placeholder="Shortly describe the program" rows={4}></textarea>
      <label htmlFor='title'>Program description</label>
      <textarea type="text" id="description" name="description" value={data.description} onChange={handleChange} placeholder="The program's full description goes here" rows={8}></textarea>
      <label htmlFor='category'>Category</label>
      <select id="category" name="category" onChange={handleChange} value={data.category}>
        <option value="">Select category</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
        <option value="Relife">Relife</option>
        <option value="Community">Community</option>
      </select>
      <label htmlFor="status">Status</label>
      <select id='status' name='status' onChange={handleChange} value={data.status}>
        <option value=''>Select status</option>
        <option value='published'>Published</option>
        <option value='draft'>Draft</option>
      </select>
      <button type='submit'>Submit</button>
    </form>
 </div>
 )
}