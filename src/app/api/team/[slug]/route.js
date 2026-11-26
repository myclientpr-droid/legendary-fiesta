import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Team from "@/lib/models/TeamModel";
import { isAdmin } from "@/lib/config/isAdmin";
import { uploadImage } from "@/lib/upload";

export const GET = async (req, {params}) => {
  const { slug } = await params;
  try {
    await connectDB();
    const member = await Team.findOne({ slug });
    if(!member) {
      return NextResponse.json({success: false, message: "Team member not found"}, {status: 404});
    }
    return NextResponse.json({success: true, member}, {status: 200});
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
    await Team.findOneAndDelete({slug});
    return NextResponse.json({success: true, message: "Team member removed successfully"});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};

// Accepts multipart form data so the picture can be replaced in the same request
export const PUT = async (req, {params}) => {
  if(!(await isAdmin())) {
    return NextResponse.json({success: false, message: "Unauthorized request!"}, {status: 403});
  }
  try {
    const { slug } = await params;
    await connectDB();
    const formData = await req.formData();
    const name = formData.get("name");
    const position = formData.get("position");
    const socialLink = formData.get("socialLink");
    const order = formData.get("order");
    const imageFile = formData.get("image");

    if(!name || !position) {
      return NextResponse.json({success: false, message: "Name and position are required"}, {status: 400});
    }

    const updates = {
      name,
      position,
      socialLink: socialLink || "",
      order: Number(order) || 0,
    };

    // Only touch the picture when a new file was picked
    if(imageFile && typeof imageFile === "object" && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const uploadResult = await uploadImage(Buffer.from(bytes), "ash-team");
      updates.image = uploadResult.secure_url;
    }

    const updatedMember = await Team.findOneAndUpdate({slug}, updates, {new: true});
    if(!updatedMember) {
      return NextResponse.json({success: false, message: "Failed to update team member!"}, {status: 404});
    }
    return NextResponse.json({success: true, message: "Team member updated successfully", data: updatedMember}, {status: 200});
  } catch (e) {
    console.log(e);
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};
