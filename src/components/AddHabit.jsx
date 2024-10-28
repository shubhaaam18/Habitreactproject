// src/components/AddHabit.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../features/habits/habitsSlice';

const AddHabit = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (habitName.trim()) {
      dispatch(addHabit(habitName));
      setHabitName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Add a new habit"
      />
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>
  );
};

export default AddHabit;
