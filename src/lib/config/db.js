import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || {conn: null, promise: null};

global.mongoose = cached;

export const connectDB = async () => {
  if(cached.conn) return cached.conn;
  
  if(!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
    console.log("✨ DB connect successfully");
    return cached.conn;
  } catch (e) {
    console.log("Error:", e.message);
  }
}