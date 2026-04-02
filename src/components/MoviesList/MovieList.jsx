import React from "react";
import { Link } from "react-router";

export default function MovieList({ title, movies }) {
  return (
    <div className="w-full p-2">
      <div className="w-40 h-7 bg-purple-500 mb-4 rounded flex justify-center items-center">
        <h2 className="font-semibold text-md text-white ">{title}</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <Link to={`/moviedetails/${movie.imdbID}`} key={movie.imdbID}>
            <div
              className="min-w-48 border border-gray-600 rounded-2xl"
              onClick={() => console.log(movie)}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-[77%] rounded-2xl"
              />
              <div className="text-gray-400  text-[13px] h-[23%] p-2">
                <h className="mb-1">{movie.Title}</h>
                <p>({movie.Year})</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
