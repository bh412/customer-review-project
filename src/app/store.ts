import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reviewReducer from '../features/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
