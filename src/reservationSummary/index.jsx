import { getMovieByID } from "../getDataFromApi"
import { useParams } from "react-router-dom"

export function ReservationSummary () {
    const { id } = useParams()

    const movie = getMovieByID(id)
    return (
        <div>
            <p>Pelicula: {movie.name}</p>
            <p>Silla reservada:</p>
            <p>Horario</p>
        </div>

    )
}