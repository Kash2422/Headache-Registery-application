import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();
    const entry = await Enrollment.create(body);

    return NextResponse.json(
      { success: true, data: entry },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}