import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Card from "@/models/Card";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { isUpvote } = await request.json();
    await connectDB();
    const { id } = await params;

    const updateField = isUpvote ? "ratings.upvotes" : "ratings.downvotes";
    const card = await Card.findByIdAndUpdate(
      id,
      { $inc: { [updateField]: 1 } },
      { new: true }
    );

    if (!card) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 });
    }

    return NextResponse.json(card);
  } catch (error) {
    return NextResponse.json({ error: "Failed to rate card" }, { status: 500 });
  }
}
