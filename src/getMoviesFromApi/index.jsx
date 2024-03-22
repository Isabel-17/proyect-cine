const jsonApi = '/src/Json/movies.json'

export async function GetMovies () {
    const response = await fetch(jsonApi)
    const data = await response.json()
    
    console.log(data);

    return data

}

