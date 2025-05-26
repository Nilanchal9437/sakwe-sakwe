import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Deck from '@/models/Deck';
import Card from '@/models/Card';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ deckId: string }> }
) {
  try {
    await connectDB();
    const { deckId } = await params;
    const deck = await Deck.findById(deckId);
    
    if (!deck) {
      return NextResponse.json(
        { error: 'Deck not found' },
        { status: 404 }
      );
    }

    // Get all cards for this deck
    const cards = await Card.find({ deckId: deckId })
      .select('question answer');

    return NextResponse.json({ deck, cards });
  } catch (error) {
    console.error('Failed to fetch deck:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deck' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ deckId: string }> }
) {
  try {
    const body = await request.json();
    await connectDB();

    const { deckId } = await params;
    const deck = await Deck.findByIdAndUpdate(
      deckId,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!deck) {
      return NextResponse.json(
        { error: 'Deck not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(deck);
  } catch (error) {
    console.error('Failed to update deck:', error);
    return NextResponse.json(
      { error: 'Failed to update deck' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ deckId: string }> }
) {
  try {
    await connectDB();

    // Delete all cards in the deck first
    const { deckId } = await params;
    
    await Card.deleteMany({ deckId: deckId });

    // Then delete the deck
    const deck = await Deck.findByIdAndDelete(deckId);

    if (!deck) {
      return NextResponse.json(
        { error: 'Deck not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Deck deleted successfully' });
  } catch (error) {
    console.error('Failed to delete deck:', error);
    return NextResponse.json(
      { error: 'Failed to delete deck' },
      { status: 500 }
    );
  }
} 