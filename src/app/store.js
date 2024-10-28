import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../features/habits/habitsSlice';

const store = configureStore({ //configuring store
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
