import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Team from "@/lib/models/TeamModel";
import { isAdmin } from "@/lib/config/isAdmin";
import { uploadImage } from "@/lib/upload";

const toSlug = (text) => {
  return text.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// Two members can share a name, so keep appending a counter until the slug is free
const uniqueSlug = async (base) => {
  let slug = base;
  let counter = 2;
  while(await Team.exists({ slug })) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  return slug;
};

export const GET = async (req) => {
  try {
    await connectDB();
    const members = await Team.find().sort({order: 1, createdAt: 1});
    return NextResponse.json({success: true, members}, {status: 200});
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
    const name = formData.get("name");
    const position = formData.get("position");
    const socialLink = formData.get("socialLink");
    const order = formData.get("order");
    const imageFile = formData.get("image");

    if(!name || !position || !imageFile) {
      return NextResponse.json({success: false, message: "Name, position and picture are required"}, {status: 400});
    }

    const bytes = await imageFile.arrayBuffer();
    const uploadResult = await uploadImage(Buffer.from(bytes), "ash-team");

    const member = await Team.create({
      name,
      slug: await uniqueSlug(toSlug(name)),
      position,
      socialLink,
      order: Number(order) || 0,
      image: uploadResult.secure_url,
    });
    await member.save();

    return NextResponse.json({success: true, message: "Team member added successfully"}, {status: 201});
  } catch (e) {
    console.log(e);
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};
