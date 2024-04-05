import { useContext } from "react"
import { DataContext } from "../provider"
import "./daySelected.css"

export function DaySelected () {

    const {selectedDay, day, hour, selectedHour } =useContext(DataContext)

    return (
        <div className='horarios'>
            <div>
                <div className="day_container">
                    <p className="p_daySelect">Dia selecionado: </p>
                    <p className="p_day">{selectedDay || day}</p>
                </div>
                <div className="hour_container">
                    <p className="p_hourSelected">Hora seleccionada: </p>
                    <p className="p_hour">{selectedHour || hour}</p>
                </div>
            </div>
        </div>   
    )
}