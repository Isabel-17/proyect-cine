const jsonApi = '/src/Json/movies.json'

export async function GetMovies () {
    const response = await fetch(jsonApi)
    const data = await response.json()
    
    console.log(data);

    return data

}

export async function getMovieByID(id) {
    const response = await fetch(jsonApi)
    const data = await response.json()
    const findIndexById = data.findIndex( movie => movie.id == id)
    return data[findIndexById] // la peli con ese index 
}
