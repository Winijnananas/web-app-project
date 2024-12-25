import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InsertPage from './pages/InsertPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="/insert" element={<InsertPage />} />
    </Routes>
  );
};

export default App;
