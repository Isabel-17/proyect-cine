import React, { useEffect } from 'react';
import { Header } from './header';
import { Home } from './routeToHome';
import { SideBar } from './sidebar';
import { useParams } from 'react-router-dom';
import { getMovieByID } from './getMoviesFromApi';
import { Route, Routes } from 'react-router-dom';

function ReservationPages() {

  const { id } = useParams()

  useEffect(()=> {
    fetchMovie(id)
  }, [id])

  async function fetchMovie(id) {
    let result = await getMovieByID(id)
    console.log("La peli a reservar es ", result.name)
  }

  return (
    <>
      <Home /> 
      <Header />
      <SideBar />
    </>
  );
}

export default ReservationPages;
