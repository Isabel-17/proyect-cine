const jsonApi = 'src/JsonMovies/movies.json'
const chairJsonApi = '../../src/JsonChair/chair.json'
export async function GetMovies () {
    const response = await fetch(jsonApi)
    const data = await response.json()
    
    return data
}

export async function getMovieByID(id) {
    const response = await fetch(jsonApi)
    const data = await response.json()
    const findIndexById = data.findIndex( movie => movie.id === id)
    return data[findIndexById] 
}


export async function getChairFromJson () {
    let result = await fetch(chairJsonApi);
    return await result.json() 
}

export function existReservation(day, hour, id) {
    let chairReserved = reservations?.[day]?.[hour]?.[id]
    if(chairReserved) return true;
    return false
}
 
export function markChairAsBussy(chairsReservations, day, hour, id) {
    let reservations = Object.assign({}, chairsReservations)
    reservations[day] = reservations[day] || {};
    reservations[day][hour] = reservations[day][hour] || {};
    reservations[day][hour][id] = reservations[day][hour][id] || id;
    return reservations;
}
