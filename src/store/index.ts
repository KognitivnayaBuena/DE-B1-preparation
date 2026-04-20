import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import sessionReducer from './sessionSlice';
import { localStorageMiddleware, loadFromLocalStorage } from './localStorageMiddleware';

const persisted = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    session: sessionReducer,
  },
  ...(persisted ? { preloadedState: persisted as { cards: ReturnType<typeof cardsReducer>; session: ReturnType<typeof sessionReducer> } } : {}),
});

store.subscribe(() => {
  localStorageMiddleware(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
