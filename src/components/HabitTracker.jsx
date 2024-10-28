// src/components/HabitTracker.js
import React from 'react';
import HabitList from './HabitList';

const HabitTracker = () => {
  return (
    <div className="container">
      <h1>Habit Tracker App</h1>
      <HabitList />
    </div>
  );
};

export default HabitTracker;
