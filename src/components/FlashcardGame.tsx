import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import { ICard } from '@/models/Card';
import Link from 'next/link';

interface SessionStats {
  cardsViewed: Set<string>;
  cardsSkipped: Set<string>;
  timePerCard: Record<string, number>;
  totalTime: number;
  lastUpdateTime: number;
}

interface FlashcardGameProps {
  cards: ICard[];
  deckId: string;
}

export default function FlashcardGame({ cards: initialCards, deckId }: FlashcardGameProps) {
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [showStats, setShowStats] = useState(false);

  // Progress tracking state
  const [sessionStats, setSessionStats] = useState<SessionStats>(() => ({
    cardsViewed: new Set<string>(),
    cardsSkipped: new Set<string>(),
    timePerCard: {},
    totalTime: 0,
    lastUpdateTime: Date.now()
  }));

  // Shuffle cards on mount
  useEffect(() => {
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [initialCards]);

  // Load saved session state
  useEffect(() => {
    const savedSession = localStorage.getItem(`flashcardSession_${deckId}`);
    if (savedSession) {
      try {
        const {
          currentIndex: savedIndex,
          stats: savedStats
        } = JSON.parse(savedSession);

        setCurrentIndex(savedIndex);
        setSessionStats(prev => ({
          ...prev,
          cardsViewed: new Set(savedStats.cardsViewed),
          cardsSkipped: new Set(savedStats.cardsSkipped),
          timePerCard: savedStats.timePerCard,
          totalTime: savedStats.totalTime,
          lastUpdateTime: Date.now()
        }));
      } catch (error) {
        console.error('Error loading session:', error);
      }
    }
  }, [deckId]);

  // Update total time and save session periodically
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setSessionStats(prev => {
        const now = Date.now();
        const timeDiff = now - prev.lastUpdateTime;
        return {
          ...prev,
          totalTime: prev.totalTime + timeDiff,
          lastUpdateTime: now
        };
      });
    }, 1000);

    return () => clearInterval(updateInterval);
  }, []);

  // Save session state
  useEffect(() => {
    const sessionData = {
      deckId,
      currentIndex,
      stats: {
        cardsViewed: Array.from(sessionStats.cardsViewed),
        cardsSkipped: Array.from(sessionStats.cardsSkipped),
        timePerCard: sessionStats.timePerCard,
        totalTime: sessionStats.totalTime
      }
    };
    localStorage.setItem(`flashcardSession_${deckId}`, JSON.stringify(sessionData));
  }, [currentIndex, deckId, sessionStats]);

  const updateCardStats = (skipCard: boolean = false) => {
    const currentCard = cards[currentIndex];
    if (!currentCard?._id) return;

    const cardId = currentCard._id.toString();
    const now = Date.now();

    setSessionStats(prev => {
      const newStats = { ...prev };
      
      // Update time spent on current card
      const timeSpent = now - prev.lastUpdateTime;
      newStats.timePerCard = {
        ...prev.timePerCard,
        [cardId]: (prev.timePerCard[cardId] || 0) + timeSpent
      };

      // Track viewed/skipped cards
      if (skipCard) {
        newStats.cardsSkipped.add(cardId);
      } else {
        newStats.cardsViewed.add(cardId);
        newStats.cardsSkipped.delete(cardId); // Remove from skipped if viewed
      }

      newStats.lastUpdateTime = now;
      return newStats;
    });
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      if (!isFlipped) {
        updateCardStats(true); // Mark as skipped if not viewed
      } else {
        updateCardStats(); // Mark as viewed
      }
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      updateCardStats();
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleCardFlip = () => {
    if (!isFlipped) {
      updateCardStats(); // Mark card as viewed when flipped
    }
    setIsFlipped(!isFlipped);
  };

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return hours > 0
      ? `${hours}h ${minutes % 60}m`
      : minutes > 0
      ? `${minutes}m ${seconds % 60}s`
      : `${seconds}s`;
  };

  const handleRate = async (isUpvote: boolean) => {
    try {
      const currentCard = cards[currentIndex];
      if (!currentCard?._id) return;

      const response = await fetch(`/api/cards/${currentCard._id}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isUpvote })
      });
      if (!response.ok) throw new Error('Failed to rate card');
    } catch (error) {
      console.error('Error rating card:', error);
    }
  };

  const handleReport = async () => {
    if (!reportReason.trim()) return;
    try {
      const currentCard = cards[currentIndex];
      if (!currentCard?._id) return;

      const response = await fetch(`/api/cards/${currentCard._id}/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: reportReason })
      });
      if (!response.ok) throw new Error('Failed to report card');
      setShowReport(false);
      setReportReason('');
    } catch (error) {
      console.error('Error reporting card:', error);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData: SwipeEventData) => handleNext(),
    onSwipedRight: (eventData: SwipeEventData) => handlePrevious(),
    trackMouse: true
  });

  if (!cards.length) {
    return <div className="text-center p-8">No cards available in this deck.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <span className="mr-2">←</span> Back to Decks
          </Link>
          <button
            onClick={() => setShowStats(true)}
            className="text-blue-500 hover:text-blue-600"
          >
            View Progress
          </button>
        </div>

        <div className="text-center mb-4">
          <span className="text-gray-500">
            Card {currentIndex + 1} of {cards.length} • 
            Time: {formatTime(sessionStats.totalTime)}
          </span>
        </div>

        <div {...swipeHandlers}>
          <motion.div
            className="relative bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="aspect-[3/2] p-8 flex items-center justify-center cursor-pointer"
              onClick={handleCardFlip}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isFlipped ? 'answer' : 'question'}
                  initial={{ rotateY: 0, opacity: 0 }}
                  animate={{ rotateY: isFlipped ? 180 : 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ perspective: 1000 }}
                  className="text-center text-xl w-full"
                >
                  <div className="transform-style-preserve-3d">
                    {isFlipped ? cards[currentIndex].answer : cards[currentIndex].question}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-gray-200 rounded-full disabled:opacity-50"
                >
                  ← Previous
                </button>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleRate(true)}
                    className="text-green-500 hover:text-green-600 text-2xl"
                  >
                    👍
                  </button>
                  <button
                    onClick={() => handleRate(false)}
                    className="text-red-500 hover:text-red-600 text-2xl"
                  >
                    👎
                  </button>
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === cards.length - 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50"
                >
                  Next →
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowReport(true)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Report this card
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {showReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Report Card</h3>
              <textarea
                value={reportReason}
                onChange={(e) => setReportReason(e.target.value)}
                placeholder="Please describe the issue..."
                className="w-full h-32 p-2 border rounded mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowReport(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReport}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}

        {showStats && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Session Progress</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Cards Viewed</p>
                  <p className="text-2xl font-bold">{sessionStats.cardsViewed.size}</p>
                </div>
                <div>
                  <p className="text-gray-600">Cards Skipped</p>
                  <p className="text-2xl font-bold">{sessionStats.cardsSkipped.size}</p>
                </div>
                <div>
                  <p className="text-gray-600">Average Time per Card</p>
                  <p className="text-2xl font-bold">
                    {formatTime(
                      Object.values(sessionStats.timePerCard).reduce((a, b) => a + b, 0) /
                        Math.max(1, sessionStats.cardsViewed.size)
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Total Time</p>
                  <p className="text-2xl font-bold">{formatTime(sessionStats.totalTime)}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowStats(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 