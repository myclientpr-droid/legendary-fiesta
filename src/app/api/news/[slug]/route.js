import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";


export const GET = async (req, {params}) => {
  try {
    await connectDB();
    return NextResponse.json({success: true, message: "News slug API Works"}, {status: 200});
  } catch (e) {
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
}