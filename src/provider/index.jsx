import React, { useEffect, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

function Provider({ children }) {
  const [chairSelecting, setChairSelecting] = useState([]);
  const [chairsReservations, setReservations] = useState({});

  const schedules = {
    lunes: [
      "11:20 AM",
      "11:40 AM",
      "12:20 PM",
      "1:20 PM",
      "8:00 PM",
      "11:30 PM",
    ],
    martes: [
      "12:20 PM",
      "1:20 PM",
      "3:20 PM",
      "5:50 PM",
      "8:00 PM",
      "11:30 PM",
    ],
    miercoles: [
      "10:20 AM",
      "10:40 AM",
      "11:20 AM",
      "3:40 PM",
      "5:50 PM",
      "8:00 PM",
      "11:30 PM",
    ],
    jueves: [
      "10:20 AM",
      "1:20 PM",
      "1:40 PM",
      "3:20 PM",
      "8:00 PM",
      "11:30 PM",
    ],
    viernes: [
      "10:40 AM",
      "11:40 AM",
      "12:20 PM",
      "1:40 PM",
      "3:20 PM",
      "5:50 PM",
      "8:00 PM",
      "11:30 PM",
    ],
    sabado: [
      "3:20 PM",
      "3:40 PM",
      "5:50 PM",
      "8:00 PM",
      "11:30 PM"
    ],
    domingo: [
      "10:20 AM",
      "10:40 AM",
      "11:20 AM",
      "11:40 AM",
      "12:20 PM",
      "1:40 PM",
      "3:20 PM",
      "3:40 PM",
      "5:50 PM",
      "8:00 PM",
    ],
  };

  const initialSelectedDay = Object.keys(schedules)[0];
  const initialSelectedTime = (schedules[initialSelectedDay][0]);

  const [day, setDay] = useState(initialSelectedDay);
  const [hour, setHour] = useState(initialSelectedTime);

  function markChairAsBussy(chairsReservation, day, hour, id) {
    let reservations = Object.assign({}, chairsReservation);
    reservations[day] = reservations[day] || {};
    reservations[day][hour] = reservations[day][hour] || {};
    reservations[day][hour][id] = reservations[day][hour][id] || id;
    return reservations;
  }
  
  const handleClick = async (id, day, hour) => {
    let reservationsCopy = { ...chairsReservations };
  
    if (chairsReservations?.[day]?.[hour]?.[id]) {
      delete reservationsCopy[day][hour][id];
    } else {
      reservationsCopy = markChairAsBussy(reservationsCopy, day, hour, id);
    }
    setReservations(reservationsCopy);

    setChairSelecting((prevStatus) => [...prevStatus, id]);

  };

  const colorByStatus = (day, hour, id) => {
    let isReserved = chairsReservations?.[day]?.[hour]?.[id];
    return isReserved ? "#ffccd5" : "#fc9aab";
  };
  
  // Resumen de sillas reservadas
  useEffect((reservations) => {
    if (reservations && reservations[day][hour]) {
        summary = Object.keys(reservations[day][hour]);
    }
}, [ day, hour]);

const handleConfirm = () => {
  setChairSelecting([])
};

const backToInit = () => {
  const newReservations = { ...chairsReservations };
  delete newReservations[day][hour];
  
  setReservations(newReservations);
  setChairSelecting([]);
};

const handleClickClean = () => {
  backToInit()
}
  return (
    <DataContext.Provider
      value={{
        hour,
        setHour,
        day,
        setDay,
        chairSelecting,
        setChairSelecting,
        schedules,
        handleClick,
        chairsReservations,
        handleConfirm,
        handleClickClean,
        colorByStatus
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { Provider, DataContext };