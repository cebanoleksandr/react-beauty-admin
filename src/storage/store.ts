import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertSlice';
import adminSlice from './adminSlice';

export const store = configureStore({
  reducer: {
    alert: alertSlice,
    user: adminSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
