import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import News from "@/lib/models/NewsModel";
import cloudinary from "@/lib/cloudinary";


export const GET = async (req) => {
  try {
    await connectDB();
    const data = await News.find({status: "published"});
    return NextResponse.json({success: true, news: data}, {status: 200});
  } catch (e) {
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
};

export const POST = async (req) => {
  await connectDB();
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const category = formData.get("category");
    const status = formData.get("status");
    const imageFile = formData.get("image");
    const slug = formData.get("slug");
    if(!title || !excerpt || !content || !category || !imageFile) {
    return NextResponse.json({success: false, message: "Please fill required missing fields"}, {status: 400});
    }
    
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "ash-news",
          resource_type: "auto",
        },
        (error, result) => {
          if(error) reject(error);
          else resolve(result);
        }
        ).end(buffer)
    });
    
    const imageUrl = uploadResult.secure_url;
    const news = await News.create({
      title,
      excerpt,
      content,
      category,
      status,
      coverImage: imageUrl,
      slug,
    });
    await news.save();
    return NextResponse.json({success: true, message: "News article saved successfully"}, {status: 201})
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
}