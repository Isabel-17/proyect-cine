import { Header } from './header';
import { Home } from './routeToHome';
import { Heabdoard } from './headboard';
import { MovieName } from './MovieName';
import { ReservedChairs } from './reservedChair';
import { ChairRender } from './chairRender';

function ReservationPages() {
  return (
    <>
      <Home /> 
      <Header />
      <Heabdoard />
      <ChairRender />
      <MovieName />
      <ReservedChairs/>
    </>
  );
}


export default ReservationPages;
