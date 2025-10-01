import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "Database connected" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ error: "DB connection failed" }, { status: 500 });
  }
}