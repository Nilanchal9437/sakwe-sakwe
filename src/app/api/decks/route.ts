import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Deck from "@/models/Deck";

export async function GET() {
  try {
    await connectDB();
    const decks = await Deck.find({ isPublic: true })
      .select("title description category difficulty cardCount imageUrl tags")
      .sort({ createdAt: -1 });

    return NextResponse.json(
      { decks: decks, status: true, message: "Decks fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch decks:", error);
    return NextResponse.json(
      { decks: [], status: false, message: "Failed to fetch decks" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();

    const deck = await Deck.create({
      title: body.title,
      description: body.description,
      category: body.category,
      difficulty: body.difficulty,
      tags: body.tags,
      imageUrl: body.imageUrl,
      isPublic: true,
    });

    return NextResponse.json(
      { deck: deck, status: true, message: "Deck created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create deck:", error);
    return NextResponse.json(
      { deck: null, status: false, message: "Failed to create deck" },
      { status: 500 }
    );
  }
}
