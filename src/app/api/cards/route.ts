import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Card from '@/models/Card';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const card = await Card.create(body);
    return NextResponse.json(card);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create card' }, { status: 500 });
  }
} 