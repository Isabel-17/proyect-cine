import React from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { SideBar } from './sidebar';

import { Route, Routes } from 'react-router-dom';

function ReservationPages() {
  return (
    <>
      <Home /> 
      <Header />
      <SideBar />
    </>
  );
}

export default ReservationPages;
