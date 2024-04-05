import { useEffect, useState } from "react";
import { getMovieByID } from "../getDataFromApi";
import { useParams } from "react-router-dom";
import "./movieName.css"

export function MovieName () {
    const { id } = useParams()
    const [ movie, setMovie ] = useState({})


    const fetchMovieId = async () => {
        const movieData = await getMovieByID(id);
        setMovie(movieData);
    };
    useEffect (() => {
        fetchMovieId()
    },[id])

    return (
        <div className='pelicula'>
            <p>Pelicula: </p>
            <p className="p_movie">{movie?.name}</p>
        </div>
    )
}