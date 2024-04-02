import { useEffect, useState } from 'react'
import { ChairSvg } from '../chairSvg'
import { getChairFromJson, markChairAsBussy } from '../getDataFromApi'
import './chairComponent.css'


export function ChairComponent ({day, hour}) {
    const [chairs, setChairs] = useState([]);
    const [chairsReservations, setReservations] = useState({});
    
    useEffect (()  => {
        dataChair()
    },[])
    
    const dataChair = async () => {
        const result = await getChairFromJson()
        setChairs(result);
    };
    console.log(chairs.length);
    const handleClick = (id, day, hour) => {
        let reservationsCopy = { ...chairsReservations };
        
        if (chairsReservations?.[day]?.[hour]?.[id]) {
            delete reservationsCopy[day][hour][id];
        } else {
            reservationsCopy = markChairAsBussy(reservationsCopy, day, hour, id);
        }
        setReservations(reservationsCopy);
        
    } 
    
    const colorByStatus = (day, hour, id) => {
        let isReserved = chairsReservations?.[day]?.[hour]?.[id]
        // console.log("silla reservada:", isReserved);
        return isReserved ? "#ffccd5" : "#fc9aab"
    }
    
    const chairCounter = chairs.filter(({ id }) => !chairsReservations?.[day]?.[hour]?.[id]).length;
   
    return (
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
    )
}