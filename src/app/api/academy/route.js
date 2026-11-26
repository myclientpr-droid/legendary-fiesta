import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Academy from "@/lib/models/AcademyModel";
import { isAdmin } from "@/lib/config/isAdmin";
import { uploadImage } from "@/lib/upload";

export const GET = async (req) => {
  try {
    await connectDB();

    let activities;

    if(await isAdmin()) {
      activities = await Academy.find().sort({updatedAt: -1});
    } else {
      activities = await Academy.find({status: "published"}).sort({publishedAt: -1, createdAt: -1});
    }
    return NextResponse.json({success: true, activities}, {status: 200});
  } catch (e) {
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};

export const POST = async (req) => {
  try {
    if(!(await isAdmin())) {
      return NextResponse.json({success: false, message: "Unauthorized request!"}, {status: 403});
    }
    await connectDB();
    const formData = await req.formData();
    const title = formData.get("title");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const category = formData.get("category");
    const status = formData.get("status");
    const imageFile = formData.get("image");
    const slug = formData.get("slug");

    if(!title || !excerpt || !content || !category || !status || !slug || !imageFile) {
      return NextResponse.json({success: false, message: "Please fill required missing fields"}, {status: 400});
    }

    const existing = await Academy.findOne({ slug }).lean();
    if(existing) {
      return NextResponse.json({success: false, message: "An activity with this title already exists"}, {status: 409});
    }

    const bytes = await imageFile.arrayBuffer();
    const uploadResult = await uploadImage(Buffer.from(bytes), "ash-academy");

    const activity = await Academy.create({
      title,
      excerpt,
      content,
      category,
      status,
      coverImage: uploadResult.secure_url,
      slug,
      publishedAt: status === "published" ? new Date() : undefined,
    });
    await activity.save();

    return NextResponse.json({success: true, message: "Academy activity saved successfully"}, {status: 201});
  } catch (e) {
    console.log(e);
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};
