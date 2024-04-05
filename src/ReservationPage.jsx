import { Header } from './header';
import { Home } from './routeToHome';
import { Heabdoard } from './headboard';
import { MovieName } from './MovieName';
import { ReservedChairs } from './reservedChair';
import { ChairRender } from './chairRender';
import { DaySelected } from './daySelected';
import { ConfirmButton } from './confirmButton';
import { CleanButton } from './cleanButton';

function ReservationPages() {
  return (
    <>
      <Home /> 
      <Header />
      <Heabdoard />
      <ChairRender />
      <MovieName />
      <DaySelected />
      <ReservedChairs/>
      <ConfirmButton />
      <CleanButton />
    </>
  );
}


export default ReservationPages;
