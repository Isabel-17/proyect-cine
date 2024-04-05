import { useContext } from "react"
import { DataContext } from "../provider"
import "./counterChairReserved.css"

export function CounterChairReserved () {
    
    const { chairSelecting } = useContext(DataContext)
    return (
        <div className='sillas_reservadas'>
           <div className='componet-chair'>
                {chairSelecting.map((summary, index) =>(
                    <p key={index}> Sillas reservadas: {summary}</p>
                ))}
            </div>
        </div>   
    )
}