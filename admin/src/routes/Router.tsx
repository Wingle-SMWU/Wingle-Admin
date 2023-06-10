import Header from '@components/header/Header';
import Login from '@pages/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default Router;
