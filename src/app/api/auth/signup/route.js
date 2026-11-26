import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/config/db";
import User from "@/lib/models/UserModel";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    const cleanName = name?.trim();
    const cleanEmail = email?.trim().toLowerCase();

    if (!cleanName || !cleanEmail || !password) {
      return NextResponse.json({success: false, message: "Please fill in all fields"}, {status: 400});
    }
    if (!EMAIL_PATTERN.test(cleanEmail)) {
      return NextResponse.json({success: false, message: "Please enter a valid email address"}, {status: 400});
    }
    if (password.length < 8) {
      return NextResponse.json({success: false, message: "Password must be at least 8 characters"}, {status: 400});
    }

    await connectDB();

    const existingUser = await User.findOne({ email: cleanEmail }).lean();
    if (existingUser) {
      return NextResponse.json({success: false, message: "An account with this email already exists"}, {status: 409});
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ name: cleanName, email: cleanEmail, passwordHash });

    return NextResponse.json({success: true, message: "Account created successfully"}, {status: 201});
  } catch (e) {
    // Two signups for the same email can slip past the check above and hit the unique index
    if (e.code === 11000) {
      return NextResponse.json({success: false, message: "An account with this email already exists"}, {status: 409});
    }
    console.log(e)
    return NextResponse.json({success: false, message: e.message}, {status: 500});
  }
};
