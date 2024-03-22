import './App.css'
import { GetMovies } from './getMoviesFromApi'
import { Header } from './header'
import { MovieList } from './movieLIst'
// import{ Sidebar } from './sidebar'


function App() {

  return (
    <>
      <Header />
      <MovieList />
      {/* <Sidebar /> */}
    </>
    
  )
}

export default App
