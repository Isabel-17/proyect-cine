import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { SideBar } from './sidebar';
import { ChairComponent } from './chairComponent';


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
