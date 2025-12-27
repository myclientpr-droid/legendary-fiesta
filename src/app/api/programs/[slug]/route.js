import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Programs from "@/lib/models/ProgramsModel";
import { isAdmin } from "@/lib/config/isAdmin";


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
    if(!(await isAdmin())) {
      return NextResponse.json({success: false, message:"Unauthorized"}, {status: 403});
    }
    await connectDB();
    await Programs.findOneAndDelete({slug});
    return NextResponse.json({success: true, message: "Program deleted successfully"});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
}