import { useContext, useEffect } from "react";
import { DataContext } from "../provider";
import "./reservedChairs.css"

export function ReservedChairs (reservations) {

    const {day, hour, chairSelecting, setChairReserved } = useContext(DataContext)

    useEffect(() => {
        let summary = [];
        if (reservations[day] && reservations[day][hour]) {
            summary = Object.keys(reservations[day][hour]);
        }
        setChairReserved(summary);
    }, [reservations, day, hour, setChairReserved]);

    return(
        <div className='sillas_reservadas'>
            <p > Sillas reservadas: </p>
            <div className='componet_sillas'>
                {chairSelecting.map((summary, index) =>(
                    <p className='p_chair'key={index}> {summary} </p>
                ))}
            </div>
        </div>  
    )
};
