import Header from '@components/header/Header';
import Home from '@pages/Home';
import Login from '@pages/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from '@pages/Detail';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:userId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default Router;
