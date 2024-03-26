const jsonApi = 'src/JsonMovies/movies.json'
const chairJsonApi = '../../src/JsonChair/chair.json'
// import "../../src/JsonChair/chair.json"

export async function GetMovies () {
    const response = await fetch(jsonApi)
    const data = await response.json()
    
    // console.log(data);

    return data
}


export async function getMovieByID(id) {
    const response = await fetch(jsonApi)
    const data = await response.json()
    const findIndexById = data.findIndex( movie => movie.id === id)
    return data[findIndexById] // la peli con ese index 
}


export async function getChairFromJson () {
    let result = await fetch(chairJsonApi);
    return await result.json() 
}