import Login from '@pages/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default Router;
