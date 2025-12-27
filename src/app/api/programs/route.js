import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Programs from "@/lib/models/ProgramsModel";
import cloudinary from "@/lib/cloudinary";
import { isAdmin } from "@/lib/config/isAdmin";

export const GET = async (req) => {
  try {
    await connectDB();
    const data = await Programs.find({status: "published"});
    return NextResponse.json({success: true, data}, {status: 200});
  } catch (e) {
  return NextResponse.json({success: false, message: e.message}, {status:500});
  }
};

export const POST = async (req) => {
  try {
    if(!(await isAdmin())) {
      return NextResponse.json({success: false, message:"Unauthorized"}, {status: 403});
    }
    await connectDB();
    const formData = await req.formData();
    const title = formData.get("title");
    const shortDescription = formData.get("shortDescription");
    const description = formData.get("description");
    const status = formData.get("status");
    const category = formData.get("category");
    const imageFile = formData.get("image");
    const slug = formData.get("slug");
    
    if(!title || !description || !shortDescription || !imageFile) {
      return NextResponse.json({success: false, message: "Missing required fields"}, {status: 400});
    }
    
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const uploalResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "ash-programs",
          resource_type: "auto",
        },
        (error, result) => {
          if(error) reject(error);
          else resolve(result);
        }
        ).end(buffer)
    });
    const imgUrl = uploalResult.secure_url;
    
    const program = await Programs.create({
      title,
      shortDescription,
      description,
      category,
      status,
      image: imgUrl,
      slug,
    });
    await program.save();
    return NextResponse.json({success: true, message: "Program saved successfully"}, {status: 201});
  } catch (e) {
    console.log("Error:", e)
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
}