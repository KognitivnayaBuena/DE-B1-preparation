import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CardsState } from '../types';

const initialState: CardsState = {
  progress: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    markRemembered(state, action: PayloadAction<string>) {
      const cardId = action.payload;
      const existing = state.progress[cardId];
      if (existing) {
        if (existing.rememberedCount < 10) {
          existing.rememberedCount += 1;
        }
      } else {
        state.progress[cardId] = { rememberedCount: 1, lastForgottenAt: null };
      }
    },
    markForgotten(state, action: PayloadAction<string>) {
      const cardId = action.payload;
      state.progress[cardId] = {
        rememberedCount: 0,
        lastForgottenAt: Date.now(),
      };
    },
    resetTopicProgress(state, action: PayloadAction<string>) {
      const topicId = action.payload;
      for (const key of Object.keys(state.progress)) {
        if (key.startsWith(topicId + '_')) {
          delete state.progress[key];
        }
      }
    },
  },
});

export const { markRemembered, markForgotten, resetTopicProgress } = cardsSlice.actions;
export default cardsSlice.reducer;
