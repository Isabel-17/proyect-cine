import { useEffect, useState } from 'react'
import { ChairSvg } from '../chairSvg'
import { getChairFromJson, markChairAsBussy, getMovieByID } from '../getDataFromApi'
import './Reservation.css'
import { useParams } from 'react-router-dom'

export function Reservation ({day, hour, backToInit }) {
    const { id } = useParams()
    const [chairs, setChairs] = useState([]);
    const [chairsReservations, setReservations] = useState({});
    const [chairReserved, setChairReserved] = useState([])
    const [ movie, setMovie ] = useState({})
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [chairSelecting, setChairSelecting] = useState([])

    
    useEffect (()  => {
        dataChair()
    },[day, hour])
    
    const dataChair = async () => {
        const result = await getChairFromJson()
        setChairs(result);
    };
    const handleClick = async (id, day, hour) => {
       
        let reservationsCopy = { ...chairsReservations };
        
        if (chairsReservations?.[day]?.[hour]?.[id]) {
            delete reservationsCopy[day][hour][id];
        } else {
            reservationsCopy = markChairAsBussy(reservationsCopy, day, hour, id);
        }
        setReservations(reservationsCopy);
        reservedChairs(reservationsCopy)

        setSelectedDay(day);
        setSelectedHour(hour);
        setChairSelecting(prevStatus => [...prevStatus, id])
    } 
    
    const colorByStatus = (day, hour, id) => {
        let isReserved = chairsReservations?.[day]?.[hour]?.[id]
        return isReserved ? "#ffccd5" : "#fc9aab"
    }

    // Numero de sillas reservadas 
    const chairCounter = chairs.filter(({ id }) => !chairsReservations?.[day]?.[hour]?.[id]).length;
    
    // Logica para que muestre la pelicula seleccionada
    const fetchMovieId = async () => {
        const movieData = await getMovieByID(id);
        setMovie(movieData);
    };
    useEffect (() => {
        fetchMovieId()
    },[id])


    // Logica para mostrar las sillas reservada
    const reservedChairs = (reservations) => {
        let summary = [];
        if (reservations[day] && reservations[day][hour]) {
            summary = Object.keys(reservations[day][hour]);
        }
        setChairReserved(summary);
    };
    
    useEffect(() => {
        setChairReserved([]);
    },[hour, day]);

    // Logica para boton de confimacion
    const handleConfirm = () => {
        setChairReserved([]);
        setSelectedDay("lunes");
        setSelectedHour("");
        setChairSelecting([])
        backToInit()
    };
        
    return (
        <>
            <div className='container'>
                <h2 className='counterChair'>{chairCounter} sillas disponibles</h2>
                <div className='chair'>
                    {chairs.map(({id}) => (
                        <div 
                            key={id}
                            onClick={()=> handleClick(id, day, hour)}
                        > 
                            <ChairSvg color={colorByStatus(day, hour, id)}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container_reservation'>
                <div className='pelicula'>
                    <p>Pelicula: {movie?.name}</p>
                </div>

                <div className='sillas_reservadas'>
                    <p>Sillas Reservadas:</p>
                    <div className='componet_sillas'>
                    </div>
                    {chairSelecting.map((summary, index) =>(
                        <p key={index} >{summary}</p>
                    ))}
                </div>
                <div className='horarios'>
                    <p>Día seleccionado: {selectedDay || day}</p>
                    <p>Hora seleccionada: {selectedHour || hour}</p>
                </div>
                <div className='boton_confirmacion'>
                    <button onClick={handleConfirm}>Confirmar reserva</button>
                </div>
            </div>
        </>
    )
}
