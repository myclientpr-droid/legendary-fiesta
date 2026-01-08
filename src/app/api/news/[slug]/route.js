import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import News from "@/lib/models/NewsModel";

export const GET = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    const data = await News.findOne({ slug });
    if(!data) return NextResponse.json({success: false, message: "New article not found"}, {status: 404});
    return NextResponse.json({success: true, news: data}, {status: 200});
  } catch (e) {
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
};

export const DELETE = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    await News.findOneAndDelete({slug});
    return NextResponse.json({success: true, message: "News deleted successfully"});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
}


export const PUT = async (req, {params}) => {
  try {
    const { slug } = await params; 
    await connectDB();
    const body = await req.json();
    const { title, excerpt, content, category, status } = body;
    
    if(!title || !excerpt || !content || !category || !status) {
      return NextResponse.json({success: false, message: "All fields are rquired"});
    }
    const updatedNews = await News.findOneAndUpdate(
      {slug},
      {
      title,
      excerpt,
      content,
      category,
      status
    }, {new: true});
    if(!updatedNews) {
      return NextResponse.json({success: false, message: "Failed to update article!"}, {status: 404});
    }
    return NextResponse.json({success: true, message: "Article updated successfully!", data:updatedNews}, {status: 201});
  } catch (e) {
    return NextResponse.json({success: false, message:e.message}, {status: 500});
  }
} 