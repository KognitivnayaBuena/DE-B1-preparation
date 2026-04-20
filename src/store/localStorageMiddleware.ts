import type { CardsState, SessionState } from '../types';

const LOCAL_STORAGE_KEY = 'de-b1-flashcards';

interface PersistedState {
  cards: CardsState;
  session: SessionState;
}

export function localStorageMiddleware(state: PersistedState) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable
  }
}

export function loadFromLocalStorage(): PersistedState | undefined {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<PersistedState>;
      if (parsed.cards && parsed.session) {
        return parsed as PersistedState;
      }
    }
  } catch {
    // corrupt data — start fresh
  }
  return undefined;
}
