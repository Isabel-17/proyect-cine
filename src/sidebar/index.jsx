// import React, { useState } from 'react';
// import './Sidebar.css';

// export function Sidebar () {
//   const [selectedDay, setSelectedDay] = useState(null);

//   const schedules = {
//     Lunes: [
//         '11:20 AM',
//         '11:40 AM',
//         '12:20 AM',
//         '1:20 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Martes: [
//         '12:20 AM',
//         '1:20 AM',
//         '3:20 AM',
//         '5:50 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Miércoles: [
//         '10:20 AM',
//         '10:40 AM',
//         '11:20 AM',
//         '3:40 AM',
//         '5:50 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Jueves: [
//         '10:20 AM',
//         '1:20 AM',
//         '1:40 AM',
//         '3:20 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Viernes: [
//         '10:20 AM',
//         '10:40 AM',
//         '11:20 AM',
//         '11:40 AM',
//         '12:20 AM',
//         '12:40 AM', 
//         '1:20 AM',
//         '1:40 AM',
//         '3:20 AM',
//         '3:40 AM',
//         '5:50 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Sábado: [
//         '3:20 AM',
//         '3:40 AM',
//         '5:50 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ],
//     Domingo: [
//         '10:20 AM',
//         '10:40 AM',
//         '11:20 AM',
//         '11:40 AM',
//         '12:20 AM',
//         '12:40 AM', 
//         '1:20 AM',
//         '1:40 AM',
//         '3:20 AM',
//         '3:40 AM',
//         '5:50 AM',
//         '8:00 AM',
//         '11:30 PM'
//     ]
//   };

//   const handleDayClick = (day) => {
//     setSelectedDay(day);
//   };

//   return (
//     <div className="sidebar">
//       <h2>Horario</h2>
//       <ul>
//         {list.keys(schedules).map((day) => (
//           <li key={day} onClick={() => handleDayClick(day)} className={selectedDay === day ? 'selected' : ''}>
//             {day}
//           </li>
//         ))}
//       </ul>
//       {selectedDay && (
//         <div className="schedule">
//           <h3>Horarios para {selectedDay}</h3>
//           <ul>
//             {schedules[selectedDay].map((time, index) => (
//               <li key={index}>{time}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

