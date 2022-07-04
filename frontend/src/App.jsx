import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login, SignUp, TasksList } from './pages';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/tasks" element={<TasksList />} />
    </Routes>
  );
}

export default App;
