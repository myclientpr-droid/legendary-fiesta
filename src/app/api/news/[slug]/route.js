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
}