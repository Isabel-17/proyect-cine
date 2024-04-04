import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { Heabdoard } from './headboard';
// import { ReservadMoviesName } from './reservedMovieName';
// import { ConfirmButton } from './confirmButton'
// import { ReservadSchedule } from './reservedSchedule';

function ReservationPages() {

  return (
    <>
      <Home /> 
      <Header />
      <Heabdoard />
      {/* <ReservadMoviesName /> */}
      {/* <ReservadSchedule/> */}
      {/* <ConfirmButton/> */}
    </>
  );
}


export default ReservationPages;
