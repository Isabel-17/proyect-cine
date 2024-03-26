import './App.css'
import { MovieList } from './movieLIst'
import { Header } from './header'
import ReservationPages from './ReservationPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <MovieList/>,
  },
  {
    path: "/reservation/:id",
    element: <ReservationPages />
  }
]);

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />
    </>
    
  )
}

export default App
