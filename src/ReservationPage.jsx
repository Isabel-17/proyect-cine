import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { Reservation } from './reservation';
import { ReservationSummary } from './reservationSummary';


function ReservationPages() {

  return (
    <>
      <Home /> 
      <Header />
      <Reservation />
      <ReservationSummary />
    </>
  );
}

export default ReservationPages;
