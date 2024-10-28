// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import HabitTracker from './components/HabitTracker';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HabitTracker />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
