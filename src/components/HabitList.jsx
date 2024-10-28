// src/components/HabitList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Habit from './Habit';
import AddHabit from './AddHabit';

const HabitList = () => {
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div>
      <AddHabit />
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
