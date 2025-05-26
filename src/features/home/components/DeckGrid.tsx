import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { IDeck } from '@/features/home/types';

interface DeckGridProps {
  decks: IDeck[];
}

export default function DeckGrid({ decks }: DeckGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {decks.map((deck, index) => (
        <motion.div
          key={deck._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link href={`/deck/${deck._id}`}>
            <div className="relative h-48">
              <Image
                src={deck.imageUrl || '/default-deck.jpg'}
                alt={deck.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{deck.title}</h3>
              <p className="text-gray-600">{deck.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{deck.category}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Start Learning
                </motion.button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 