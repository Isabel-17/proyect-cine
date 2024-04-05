import { useContext, useEffect } from "react";
import { DataContext } from "../provider";
import "./reservedChairs.css"

export function ReservedChairs () {

    const { chairSelecting } = useContext(DataContext)

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
