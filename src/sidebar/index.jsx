import React, { useState } from 'react';
import './Sidebar.css';
import { ChairComponent } from '../chairComponent';
import { markChairAsBussy } from '../getDataFromApi';

export function Resevation ({day, hour}) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [chairReservations, setReservations] = useState({})


  const schedules = {
    lunes: [
        '11:20 AM',
        '11:40 AM',
        '12:20 AM',
        '1:20 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    martes: [
        '12:20 AM',
        '1:20 AM',
        '3:20 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    miercoles: [
        '10:20 AM',
        '10:40 AM',
        '11:20 AM',
        '3:40 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    jueves: [
        '10:20 AM',
        '1:20 AM',
        '1:40 AM',
        '3:20 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    viernes: [
        '10:40 AM',
        '11:40 AM',
        '12:20 AM',
        '1:40 AM',
        '3:20 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    sabado: [
        '3:20 AM',
        '3:40 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    domingo: [
        '10:20 AM',
        '10:40 AM',
        '11:20 AM',
        '11:40 AM',
        '12:20 AM',
        '1:40 AM',
        '3:20 AM',
        '3:40 AM',
        '5:50 AM',
        '8:00 AM',
    ]
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedTime(null)
  };
  
  const handelTimeClick = async (time) => {
    setSelectedTime(time);
  };

  const handleClick = (id) => {
    let result = markChairAsBussy(chairReservations,day, hour, id)
    console.log(result);
    setReservations(result)
  } 

  const colorByStatus = (day, hour, id) => {
    let isReserved = chairReservations?.[day]?.[hour]?.[id]
    return isReserved ? "#0d4146" : "#FFC4CE"
  }

  
  return (
    <div className="content-sidebar">
      <ul className='sidebar'>
        {Object.keys(schedules).map((day) => (
          <li key={day} 
            onClick={() => handleDayClick(day)} 
            className={selectedDay === day ? 'selected' : ''}
          >
            {day}
          </li>
        ))}
      </ul>
      {selectedDay && (
        <div className="contect-schedule">
          <ul className='schedule' >
            {schedules[selectedDay].map((time, index) => (
              <li 
                key={index}
                onClick={() => handelTimeClick(time)} 
                className={selectedTime === time ? 'selected' : ''} 
              >
                {time}
              </li>            
            ))}
          </ul>
          { selectedTime && 
            <ChairComponent 
                day={selectedDay} 
                hour={selectedTime}
                handleClick={handleClick} 
                colorByStatus={colorByStatus} 
            /> 
          }
        </div>
      )}
    </div>
  );
}

