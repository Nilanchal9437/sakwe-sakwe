export declare interface GameSubmitType {
  created_at: string;
  game_id: string;
  totalSessionTime: string;
  name: string;
  email: string;
  phone: string;
  answer: {
    question: string;
    answer: string;
    answerSeen: boolean;
    cardSeen: boolean;
    sessionTime: string;
  }[];
  _id?: string;
}
