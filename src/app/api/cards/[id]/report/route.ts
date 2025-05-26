import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Card from "@/models/Card";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { reason } = await request.json();
    await connectDB();
    const { id } = await params;

    const card = await Card.findByIdAndUpdate(
      id,
      {
        $inc: { "reports.count": 1 },
        $push: { "reports.reasons": reason },
      },
      { new: true }
    );

    if (!card) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    return NextResponse.json(card);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to report card" },
      { status: 500 }
    );
  }
}
