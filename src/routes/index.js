import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
