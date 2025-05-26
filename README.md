# Sakwe-Sakwe Flashcard Game

A web-based flashcard game built with Next.js, TypeScript, and MongoDB. Users can play with various decks of cards containing riddles, trivia, and other educational content.

## Features

- **No Login Required**: Start playing immediately without registration
- **Interactive Flashcards**: Tap to flip, swipe to navigate
- **Multiple Decks**: Choose from various categories
- **Progress Tracking**: Session-based tracking of cards viewed and time spent
- **Card Rating**: Rate cards with thumbs up/down
- **Responsive Design**: Works on all devices

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sakwe-sakwe.git
   cd sakwe-sakwe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Seed the database:
   ```
   Visit http://localhost:3000/api/seed
   ```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── deck/              # Deck pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── DeckGrid.tsx      # Grid of available decks
│   └── FlashcardGame.tsx # Main game component
├── lib/                   # Utility functions
│   └── mongodb.ts        # Database connection
└── models/               # Mongoose models
    ├── Card.ts           # Card schema
    └── Deck.ts           # Deck schema
```

## API Routes

- `GET /api/decks` - Get all decks
- `GET /api/decks/[id]` - Get a specific deck with its cards
- `POST /api/cards/[id]/rate` - Rate a card
- `GET /api/seed` - Populate database with sample data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 