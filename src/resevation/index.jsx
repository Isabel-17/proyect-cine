
export function Reservation ({day, hour}) {
   
    return (
        <>
            <div className='horarios'>
                <div>
                    <p>Día seleccionado: {selectedDay || day}</p>
                    <p>Hora seleccionada: {selectedHour || hour}</p>
                </div>
                <div >
                    <button  
                        className='boton_confirmacion' 
                        onClick={handleConfirm}
                    >
                        Confirmar reserva
                    </button>
                </div>
                <div>
                    <button className='boton_clean'>Limpiar sala</button>
                </div>
            </div>
        </>
    )
}
