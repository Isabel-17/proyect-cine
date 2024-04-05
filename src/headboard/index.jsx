import React, { useContext, useEffect } from 'react';
import './Headboard.css';
import { DataContext } from '../provider';

export function Heabdoard () {
  const { day, setDay, setHour, hour, schedules} = useContext(DataContext)
   

  useEffect(() => {
    if (!day) {
      const initialSelectedDay = Object.keys(schedules)[0];
      setDay(initialSelectedDay);
    }
    if (!hour && day) {
      const initialSelectedTime = schedules[day][0];
      setHour(initialSelectedTime);
    }
  }, [day, hour, schedules, setDay, setHour]);

  const handleDayClick = (day) => {
      setDay(day);
    // setSelectedTime(null)
  };
  
  const handelTimeClick = async (time) => {
    setHour(time);
  };

  return (
    <div className="content-sidebar">
      <ul className='sidebar'>
        {Object.keys(schedules).map((day) => (
          <li key={day} 
            onClick={() => handleDayClick(day)} 
            className={day === day ? 'selected' : ''}
          >
            {day}
          </li>
        ))}
      </ul>
      {day && (
        <div className="contect-schedule">
          <ul className='schedule' >
            {schedules[day].map((time, index) => (
              <li 
                key={index}
                onClick={() => handelTimeClick(time)} 
                className={hour === time ? 'selected' : ''} 
              >
                {time}
              </li>            
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

