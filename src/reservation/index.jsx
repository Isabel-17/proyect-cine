import React, { useState } from 'react';
import './Sidebar.css';
import { ChairComponent } from '../chairComponent';

export function Reservation () {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const schedules = {
    lunes: [
        '11:20 AM',
        '11:40 AM',
        '12:20 PM',
        '1:20 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    martes: [
        '12:20 PM',
        '1:20 PM',
        '3:20 PM',
        '5:50 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    miercoles: [
        '10:20 AM',
        '10:40 AM',
        '11:20 AM',
        '3:40 PM',
        '5:50 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    jueves: [
        '10:20 AM',
        '1:20 PM',
        '1:40 PM',
        '3:20 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    viernes: [
        '10:40 AM',
        '11:40 AM',
        '12:20 PM',
        '1:40 PM',
        '3:20 PM',
        '5:50 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    sabado: [
        '3:20 PM',
        '3:40 PM',
        '5:50 PM',
        '8:00 PM',
        '11:30 PM'
    ],
    domingo: [
        '10:20 AM',
        '10:40 AM',
        '11:20 AM',
        '11:40 AM',
        '12:20 PM',
        '1:40 PM',
        '3:20 PM',
        '3:40 PM',
        '5:50 PM',
        '8:00 PM',
    ]
  };

  const handleDayClick = (day) => {
      setSelectedDay(day);
    // setSelectedTime(null)
  };
  
  const handelTimeClick = async (time) => {
    setSelectedTime(time);
  };

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
            /> 
          }
        </div>
      )}
    </div>
  );
}

