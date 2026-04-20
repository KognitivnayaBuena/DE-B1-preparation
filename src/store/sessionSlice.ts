import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SessionState } from '../types';

const initialState: SessionState = {
  currentView: 'topicSelection',
  activeTopic: null,
  reviewOrder: [],
  currentIndex: 0,
  sessionRemembered: 0,
  sessionForgotten: 0,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    startSession(state, action: PayloadAction<{ topicId: string; reviewOrder: string[] }>) {
      state.currentView = 'review';
      state.activeTopic = action.payload.topicId;
      state.reviewOrder = action.payload.reviewOrder;
      state.currentIndex = 0;
      state.sessionRemembered = 0;
      state.sessionForgotten = 0;
    },
    recordRemembered(state) {
      state.sessionRemembered += 1;
    },
    recordForgotten(state) {
      state.sessionForgotten += 1;
    },
    advanceCard(state) {
      state.currentIndex += 1;
      if (state.currentIndex >= state.reviewOrder.length) {
        state.currentView = 'sessionSummary';
      }
    },
    endSession(state) {
      state.currentView = 'topicSelection';
      state.activeTopic = null;
      state.reviewOrder = [];
      state.currentIndex = 0;
      state.sessionRemembered = 0;
      state.sessionForgotten = 0;
    },
  },
});

export const { startSession, recordRemembered, recordForgotten, advanceCard, endSession } =
  sessionSlice.actions;
export default sessionSlice.reducer;
