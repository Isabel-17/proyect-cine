import React, { useEffect, useState } from 'react';
import { GetMovies } from '../getMoviesFromApi';
import './movieList.css';

export function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        dataMovies();
    }, []);

    const dataMovies = async () => {
        const result = await GetMovies();
        setMovies(result);
    };

    return (
        <div className='movie-list'>
            <h1 className='cartelera'>En cartelera</h1>
            <div className='container-movie-list'>
                <ul className='movies-grid'>
                    {movies.map((movie) => (
                        <li key={movie.id} className='movie-card'>
                            <img src={movie.url} />
                            <h2>{movie.name}</h2>
                            <p>Director: {movie.director}</p>
                            <p>Año: {movie.year}</p>
                            <p>Duración: {movie.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
