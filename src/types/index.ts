export interface CardData {
  id: string;
  topicId: string;
  german: string;
  russian: string;
}

export interface Topic {
  id: string;
  name: string;
}

export interface CardProgress {
  rememberedCount: number;
  lastForgottenAt: number | null;
}

export interface CardsState {
  progress: Record<string, CardProgress>;
}

export type ViewName = 'topicSelection' | 'review' | 'sessionSummary';

export interface SessionState {
  currentView: ViewName;
  activeTopic: string | null;
  reviewOrder: string[];
  currentIndex: number;
  sessionRemembered: number;
  sessionForgotten: number;
}
