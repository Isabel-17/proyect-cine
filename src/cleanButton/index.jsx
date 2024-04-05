import { useContext } from "react"
import { DataContext } from "../provider"
import "./cleanButton.css"
export function  CleanButton () {
    const { handleClickClean } = useContext(DataContext)
    return (
        <div>
            <button 
                className='boton_clean'
                onClick={handleClickClean}
            
            >Limpiar sala</button>
        </div>
    )
}