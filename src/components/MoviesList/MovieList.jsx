import React from "react";
import { Link } from "react-router";

export default function MovieList({ title, movies }) {
  return (
    <div className="w-full py-6 px-4 group">
      {/* Header Section */}
      <div className="flex items-center  mb-6">
        <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-3">
          {title}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[240px] md:min-w-[280px] md:h-60 bg-gray-700 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-purple-500 snap-start border border-transparent hover:border-gray-700"
          >
            <Link to={`/moviedetails/${movie.id}`}>
              {/* Image Container */}
              <div className="relative aspect-video">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info Section */}
              <div className="p-3">
                <h3 className="text-white font-medium truncate text-sm">
                  {movie.title || movie.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-200 text-xs">
                    {(movie.release_date || movie.first_air_date)?.slice(0, 4)}
                  </span>
                  
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}