const jsonApi = '../../src/JsonMovies/movies.json'
const chairJsonApi = '../../src/JsonChair/chair.json'

export async function GetMovies () {
    const response = await fetch(jsonApi)
    const data = await response.json()
    return data
}

export async function getMovieByID(idParam) {
    const response = await fetch(jsonApi)
    const data = await response.json()
    const findIndexById = data.findIndex( ({id}) => id === idParam)
    return data[findIndexById] 
}

export async function getChairFromJson () {
    let result = await fetch(chairJsonApi);
    return await result.json() 
} 

