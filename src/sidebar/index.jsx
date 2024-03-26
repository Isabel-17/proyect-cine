import React, { useState } from 'react';
import './Sidebar.css';
import { ChairComponent } from '../chairComponent';
import { getChairFromJson } from '../getDataFromApi';

export function SideBar () {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [chairs, setChairs] = useState([]);


  const schedules = {
    Lunes: [
        '11:20 AM',
        '11:40 AM',
        '12:20 AM',
        '1:20 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Martes: [
        '12:20 AM',
        '1:20 AM',
        '3:20 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Miércoles: [
        '10:20 AM',
        '10:40 AM',
        '11:20 AM',
        '3:40 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Jueves: [
        '10:20 AM',
        '1:20 AM',
        '1:40 AM',
        '3:20 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Viernes: [
        '10:40 AM',
        '11:40 AM',
        '12:20 AM',
        '1:40 AM',
        '3:20 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Sábado: [
        '3:20 AM',
        '3:40 AM',
        '5:50 AM',
        '8:00 AM',
        '11:30 PM'
    ],
    Domingo: [
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
    const chairsForTime = await getChairFromJson(time); 
    setChairs(chairsForTime);
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
          { selectedTime && <ChairComponent chairs={chairs}/> }
        </div>
      )}
    </div>
  );
}

