import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Programs from "@/lib/models/ProgramsModel";


export const GET = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    const data = await Programs.findOne({ slug });
    if(!data) return NextResponse.json({success: false, message: "Program not found"}, {status: 404});
    return NextResponse.json({success: true, data}, {status: 200});
  } catch (e) {
    console.log("Error:", e)
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
}