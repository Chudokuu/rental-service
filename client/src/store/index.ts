import { configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './reducer';

export const store = configureStore({
  reducer: offersReducer,
});

