// const API_KEY = "ae5bbee1";

// export const fetchMovies = async (search) => {
//     const result = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
//     const data = await result.json();
//     return data.Search || [];
// }

const API_KEY = "1b66851494b775d1ac10713cf6aae5ee";

export const fetchMovies = async(search) => {
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`);
    const data = await result.json();
    return data.results || [];
}