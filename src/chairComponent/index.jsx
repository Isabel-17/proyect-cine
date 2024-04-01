import { useEffect, useState } from 'react'
import { ChairSvg } from '../chairSvg'
import { getChairFromJson, markChairAsBussy } from '../getDataFromApi'
import './chairComponent.css'

export function ChairComponent ({day, hour}) {
    const [chairs, setChairs] = useState([]);
    const [chairReservations, setReservations] = useState({})

    useEffect (()  => {
        dataChair()
    },[])

    const dataChair = async () => {
        const result = await getChairFromJson()
        setChairs(result);
    };

    const handleClick = (id) => {
        let result = markChairAsBussy(chairReservations,day, hour, id)
        console.log(result)
        setReservations(result)
    } 

    const colorByStatus = (day, hour, id) => {
        let isReserved = chairReservations?.[day]?.[hour]?.[id]
        return isReserved ? "#0d4146" : "#FFC4CE"
    }

    return (
        <div className='container'>
            <div className='chair'>
                {chairs.map(({id}) => (
                    <div 
                        key={id}
                        onClick={()=> handleClick(id)}> 
                        <ChairSvg color={colorByStatus(day, hour, id)}
                    />
                    </div>
                 ))}
            </div>
            
        </div>
    )
}