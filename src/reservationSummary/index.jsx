import { getMovieByID } from "../getDataFromApi"

export function ReservationSummary () {
    const movie = getMovieByID()
    return (
        <div>
            <p>Pelicula: {movie.name}</p>
            <p>Silla reservada:</p>
            <p>Horario</p>
        </div>

    )
}