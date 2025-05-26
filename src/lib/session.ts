import { v4 as uuidv4 } from 'uuid';

const SESSION_KEY = 'sakwe_session_id';

export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return uuidv4(); // Fallback for SSR
  }

  const sessionId = window.localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    const newSessionId = uuidv4();
    window.localStorage.setItem(SESSION_KEY, newSessionId);
    return newSessionId;
  }
  
  return sessionId;
}

export function clearSession(): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(SESSION_KEY);
  }
}

interface SessionStats {
  currentIndex: number;
  stats: {
    cardsViewed: string[];
    cardsSkipped: string[];
    timePerCard: Record<string, number>;
    totalTime: number;
  };
}

export function getSessionStats(deckId: string): SessionStats | null {
  if (typeof window === 'undefined') return null;

  const key = `flashcardSession_${deckId}`;
  const data = window.localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function saveSessionStats(deckId: string, stats: SessionStats): void {
  if (typeof window !== 'undefined') {
    const key = `flashcardSession_${deckId}`;
    window.localStorage.setItem(key, JSON.stringify(stats));
  }
}

export function clearSessionStats(deckId: string): void {
  if (typeof window !== 'undefined') {
    const key = `flashcardSession_${deckId}`;
    window.localStorage.removeItem(key);
  }
} 