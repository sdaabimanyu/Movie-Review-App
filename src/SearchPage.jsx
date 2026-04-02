import React, { useEffect, useState } from "react";

export default function SearchPage({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if(!query) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1b66851494b775d1ac10713cf6aae5ee&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [query]);

  return (
    <div className="grid grid-cols-5 gap-1 p-2">
  {movies.map((el) => (
    <div
    key={el.id}
    className="h-[400px] bg-amber-50"
    onClick={(el) => console.log(el.value)}>
      <img className="w-full h-[80%]"  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="" />
      <div className="bg-amber-950 h-[20%] p-2">
        <h1 className="text-white">{el.title}</h1>
        <h1 className="text-white">{el.release_date}</h1>
      </div>
      
    </div>
  ))}
</div>
  );
}
