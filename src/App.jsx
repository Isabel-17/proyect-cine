import { MovieList } from './movieLIst'
import { Header } from './header'
import ReservationPages from './ReservationPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from './provider';

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
    <Provider>
      <Header/>
      <RouterProvider router={router} />
    </Provider>
    
    
  )
}

export default App
