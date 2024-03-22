import './App.css'
import { GetMovies } from './getMoviesFromApi'
import { MovieList } from './movieLIst'
import { Header } from './header'
import { Routes, Route } from 'react-router-dom';
import ReservationPages from './reservationPages';


function App() {

  return (
    <>
      <Header/>
    
        <MovieList />
      
    </>
    
  )
}

export default App
