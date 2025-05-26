import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Deck from '@/models/Deck';
import Card from '@/models/Card';

const sampleDecks = [
  {
    title: 'Fun Riddles',
    description: 'A collection of entertaining riddles to test your wit',
    category: 'Riddles',
    difficulty: 'beginner',
    tags: ['fun', 'riddles', 'brain teasers'],
    imageUrl: '/images/riddles.jpg',
    cards: [
      {
        question: 'What has keys, but no locks; space, but no room; and you can enter, but not go in?',
        answer: 'A keyboard'
      },
      {
        question: 'What gets wetter and wetter the more it dries?',
        answer: 'A towel'
      },
      {
        question: 'I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by everyone. What am I?',
        answer: 'A pencil lead'
      }
    ]
  },
  {
    title: 'General Knowledge Trivia',
    description: 'Test your knowledge with these general trivia questions',
    category: 'Trivia',
    difficulty: 'intermediate',
    tags: ['trivia', 'knowledge', 'facts'],
    imageUrl: '/images/trivia.jpg',
    cards: [
      {
        question: 'Which planet is known as the Red Planet?',
        answer: 'Mars'
      },
      {
        question: 'What is the largest organ in the human body?',
        answer: 'The skin'
      },
      {
        question: 'Who painted the Mona Lisa?',
        answer: 'Leonardo da Vinci'
      }
    ]
  },
  {
    title: 'Math Puzzles',
    description: 'Challenge yourself with these mathematical brain teasers',
    category: 'Mathematics',
    difficulty: 'advanced',
    tags: ['math', 'puzzles', 'logic'],
    imageUrl: '/images/math.jpg',
    cards: [
      {
        question: 'If 2x + 3 = 11, what is x?',
        answer: '4'
      },
      {
        question: 'What is the next number in the sequence: 2, 4, 8, 16, ...',
        answer: '32 (each number is doubled)'
      },
      {
        question: 'If a triangle has angles of 90° and 45°, what is the third angle?',
        answer: '45° (angles in a triangle sum to 180°)'
      }
    ]
  }
];

export async function POST() {
  try {
    await connectDB();

    // Clear existing data
    await Deck.deleteMany({});
    await Card.deleteMany({});

    // Create decks and their cards
    for (const deckData of sampleDecks) {
      const { cards: cardData, ...deckFields } = deckData;
      
      const deck = await Deck.create({
        ...deckFields,
        cardCount: cardData.length,
        isPublic: true
      });

      // Create cards for this deck
      const cards = cardData.map(card => ({
        ...card,
        deckId: deck._id,
        ratings: { upvotes: 0, downvotes: 0 },
        reports: { count: 0, reasons: [] }
      }));

      await Card.insertMany(cards);
    }

    return NextResponse.json({ 
      message: 'Seed data created successfully',
      decks: sampleDecks.length
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to seed data:', error);
    return NextResponse.json(
      { error: 'Failed to seed data' },
      { status: 500 }
    );
  }
} 