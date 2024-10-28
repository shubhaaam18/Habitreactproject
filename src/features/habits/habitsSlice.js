// src/features/habits/habitsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getCurrentWeekDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date.toLocaleDateString()); 
  }
  return dates;
};

const initialState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({
        id: Date.now(),
        name: action.payload,
        status: Array(7).fill('None'), // Initial statuses for 7 days
        dates: getCurrentWeekDates(),
      });
    },
    setStatus: (state, action) => {
      const { id, dayIndex, status } = action.payload;
      const habit = state.habits.find((habit) => habit.id === id);
      if (habit) {
        habit.status[dayIndex] = status;
      }
    },
  },
});

export const { addHabit, setStatus } = habitsSlice.actions;

export default habitsSlice.reducer;
