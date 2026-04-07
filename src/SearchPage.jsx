import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMovies } from "./hooks/useMovies";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const genres = ["Action", "Adventure", "Thriller", "Comedy"];
  const ratings = [5, 6, 7, 8, 9];
  const years = [1980, 2000, 2010, 2020];

  const { movies, totalResults, loading } = useMovies(query, page, type);

  const totalPages = Math.ceil(totalResults / 10);

  const genreMap = {
    Action: 28,
    Adventure: 12,
    Thriller: 53,
    Comedy: 35,
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesRating = rating ? movie.vote_average >= rating : true;

    const matchesGenre = genre
      ? movie.genre_ids?.includes(genreMap[genre])
      : true;

    const matchesYear = year
      ? movie.release_date && new Date(movie.release_date).getFullYear() >= year
      : true;

    return matchesRating && matchesGenre && matchesYear;
  });

  const getPageNumbers = () => {
    let pages = [];

    for (let i = page - 2; i <= page + 2; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <div className="p-2 bg-slate-900">
      {/* HEADER */}
      <div className="flex  lg:flex-row items-center gap-6 pt-4 mb-6  md:justify-between md:px-4 ">
        <button
          onClick={() => navigate(-1)}
          className="h-8 w-20 px-3 py-1 bg-purple-500 rounded text-white"
        >
          Back
        </button>

        <input
          type="search"
          placeholder="Search for Movies"
          className="w-full h-8  bg-slate-600 rounded p-2 text-white outline-none shadow-xs shadow-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex h-8 gap-x-5 mb-4 w-ful px-4">
        {/* Genre */}
        <div className="bg-slate-600 p-1 rounded flex justify-center items-center">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className=" text-white rounded outline-none bg-slate-600"
          >
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div className="bg-slate-600 p-1 rounded flex justify-center items-center">
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className=" text-white rounded outline-none bg-slate-600"
          >
            <option value="">All Ratings</option>
            {ratings.map((r) => (
              <option key={r} value={r}>
                ⭐ {r}+
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div className="bg-slate-600 p-1 rounded flex justify-center items-center">
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="text-white rounded outline-none bg-slate-600"
          >
            <option value="">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}+
              </option>
            ))}
          </select>
        </div>
        <select
          className="bg-slate-600 text-white p-1 rounded flex justify-center items-center"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Type</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      {/* 🎬 MOVIES */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full min-h-screen mb-8">
        {loading ? (
          <div className="col-span-full h-90 flex items-center justify-center">
            <p className="text-white text-lg">Loading...</p>
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="col-span-full h-90 flex items-center justify-center">
            <p className="text-white text-lg">No movies found</p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <Link to={`/moviedetails/${movie.id}`} key={movie.id}>
              <div className="h-110 rounded-2xl border border-slate-600">
                <img
                  className="w-full h-[80%] rounded-t-2xl"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="h-[20%] p-2">
                  <h1 className="text-gray-400 text-[14px] mb-2">
                    {movie.title || movie.name}
                  </h1>
                  <p className="text-gray-400 text-[14px]">
                    {(movie.release_date || movie.first_air_date)?.slice(0, 4)}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mb-5 ">
          <button
            className=" bg-gray-500 text-white font-semibold rounded px-2"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>

          {getPageNumbers().map((p) => (
            <button
              key={p}
              className={`w-10 h-6  rounded  ${page === p ? "bg-purple-500 text-white" : "bg-gray-500 text-white hover:bg-gray-400"}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}

          <button
            className="bg-gray-500 text-white font-semibold rounded px-2"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
