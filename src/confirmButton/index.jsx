import { useContext } from "react";
import { DataContext } from "../provider";
import "./confirmButton.css"

export  function ConfirmButton() {
   const { handleConfirm } = useContext(DataContext)
    return (
        <div >
            <button  
                className='boton_confirmacion' 
                onClick={handleConfirm}
            >
                Confirmar reserva
            </button>
        </div>
    );
}
