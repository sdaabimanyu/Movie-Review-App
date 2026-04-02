const API_KEY = "d600e890";

export const fetchMovies = async (search) => {
    const result = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
    const data = await result.json();
    return data.Search || [];
}