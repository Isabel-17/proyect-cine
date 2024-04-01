import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { Resevation } from './sidebar';


function ReservationPages() {

  return (
    <>
      <Home /> 
      <Header />
      <Resevation />
    </>
  );
}

export default ReservationPages;
