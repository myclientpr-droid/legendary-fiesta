import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Academy from "@/lib/models/AcademyModel";
import { isAdmin } from "@/lib/config/isAdmin";

export const GET = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    const activity = await Academy.findOne({ slug });
    if(!activity) {
      return NextResponse.json({success: false, message: "Academy activity not found"}, {status: 404});
    }
    // Drafts are only visible to administrators
    if(activity.status !== "published" && !(await isAdmin())) {
      return NextResponse.json({success: false, message: "Academy activity not found"}, {status: 404});
    }
    return NextResponse.json({success: true, activity}, {status: 200});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};

export const DELETE = async (req, {params}) => {
  const { slug } = await params;
  try {
    if(!(await isAdmin())) {
      return NextResponse.json({success: false, message: "Unauthorized request!"}, {status: 403});
    }
    await connectDB();
    await Academy.findOneAndDelete({slug});
    return NextResponse.json({success: true, message: "Academy activity deleted successfully"});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};

export const PUT = async (req, {params}) => {
  if(!(await isAdmin())) {
    return NextResponse.json({success: false, message: "Unauthorized request!"}, {status: 403});
  }
  try {
    const { slug } = await params;
    await connectDB();
    const body = await req.json();
    const { title, excerpt, content, category, status } = body;

    if(!title || !excerpt || !content || !category || !status) {
      return NextResponse.json({success: false, message: "All fields are required"}, {status: 400});
    }

    const existing = await Academy.findOne({ slug }).lean();
    if(!existing) {
      return NextResponse.json({success: false, message: "Failed to update academy activity!"}, {status: 404});
    }

    const updatedActivity = await Academy.findOneAndUpdate(
      {slug},
      {
        title,
        excerpt,
        content,
        category,
        status,
        // Stamp the publish date the first time the activity goes live
        publishedAt: existing.publishedAt || (status === "published" ? new Date() : undefined),
      }, {new: true});
    if(!updatedActivity) {
      return NextResponse.json({success: false, message: "Failed to update academy activity!"}, {status: 404});
    }
    return NextResponse.json({success: true, message: "Academy activity updated successfully", data: updatedActivity}, {status: 200});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};
