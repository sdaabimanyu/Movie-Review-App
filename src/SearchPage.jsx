import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&type=${type}&apikey=d600e890`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search || []);
      });
  }, [query, type]);

  return (
    <div className="p-2 bg-black">
      <div className="h-full w-full  border-white flex items-center gap-x-80 pt-4 mb-10">
        <button onClick={() => navigate(-1)} className="w-18 h-6 bg-purple-500 rounded text-white font-semibold">
          <i className="fa-solid fa-angle-left"></i>
          Back
        </button>
        <div>
          <input
            type="search"
            placeholder="Search for Movies"
            className="w-100 h-8 bg-gray-800 rounded p-2 text-white shadow-sm shadow-purple-500 "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          name=""
          id=""
          className="bg-purple-500 text-white font-semibold p-1 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      <div className="grid grid-cols-5 justify-center gap-2  w-full min-h-screen">
        {movies.map((movie) => (
          <Link to={`/moviedetails/${movie.imdbID}`} key={movie.imdbID}>
            <div
              className="h-100 rounded-2xl border border-slate-600"
            >
              <img
                className="w-full h-[80%] rounded-2xl"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className=" h-[20%] p-2 rounded-b-2xl">
                <h1 className="text-white">{movie.Title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
