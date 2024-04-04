import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { Heabdoard } from './headboard';


function ReservationPages() {
  return (
    <>
      <Home /> 
      <Header />
      <Heabdoard />
    </>
  );
}


export default ReservationPages;
