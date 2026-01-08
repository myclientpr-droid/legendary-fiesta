import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Programs from "@/lib/models/ProgramsModel";


export const GET = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    const data = await Programs.findOne({ slug });
    if(!data) return NextResponse.json({success: false, message: "Programs not found"}, {status: 404});
    return NextResponse.json({success: true, data}, {status: 200});
  } catch (e) {
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
};

export const DELETE = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    await Programs.findOneAndDelete({slug});
    return NextResponse.json({success: true, message: "Program deleted successfully"});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};

export const PUT = async (req, {params}) => {
  try {
    await connectDB();
    const { slug } = await params;
    const body = await req.json()
    const { title, shortDescription, description, category, status } = body;
    if(!title || !shortDescription || !description || !category || !status) {
      return NextResponse.json({success: false, message: "All fields are required"});
    }
    const updatedProgram = await Programs.findOneAndUpdate(
      { slug },
      {
        title, 
        shortDescription,
        description, 
        category,
        status
      },
      {new: true});
    if(!updatedProgram) {
      return NextResponse.json({success: false, message:"Failed to update program"}, {status: 404});
    }
    return NextResponse.json({success: true, message:"Program updated successfully", data: updatedProgram}, {status: 201});
  } catch (e) {
    return NextResponse.json({success: false, message: "Internal server error!"}, {status: 500});
  }
}  