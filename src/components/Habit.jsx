// src/components/Habit.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatus } from '../features/habits/habitsSlice';

const statuses = ['Done', 'Not done', 'None'];

const Habit = ({ habit }) => {
  const dispatch = useDispatch();
  const handleStatusChange = (dayIndex, status) => {
    dispatch(setStatus({ id: habit.id, dayIndex, status }));
  };

  return (
    <div className="habit">
      <h3>{habit.name}</h3>
      <div>
        {habit.status.map((status, dayIndex) => (
          <div key={dayIndex} className="day-status">
            <span>{habit.dates[dayIndex]}: </span>
            {statuses.map((s) => (
              <button key={s} onClick={() => handleStatusChange(dayIndex, s)}>
                {s}
              </button>
            ))}
            <span>Current Status: {status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habit;
