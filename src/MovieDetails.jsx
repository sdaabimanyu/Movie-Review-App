import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useMovieDetails } from "./hooks/useMoviesDetails";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function MovieDetails() {
  const navigate = useNavigate();

  const [ratings, setRatings] = useLocalStorage("ratings", {});
  const handleRating = (movieId, value) => {
    const updated = { ...ratings, [movieId]: value };
    setRatings(updated);
  };

  const { id } = useParams();

  const { movie, credits } = useMovieDetails(id);

  const director = credits.crew?.find((c) => c.job === "Director")?.name;
  const cast = credits.cast
    ?.slice(0, 5)
    .map((c) => c.name)
    .join(", ");
  const writers = credits.crew
    ?.filter((c) => c.job === "Screenplay" || c.job === "Writer")
    .map((w) => w.name)
    .join(", ");

  const user = ratings[movie.id] || 0;
  const avg = user
    ? ((movie.vote_average / 2 + user) / 2).toFixed(1)
    : (movie.vote_average / 2).toFixed(1);

  return (
    <div className="w-full h-full bg-linear-to-r from-slate-500 to-slate-900 p-10 pt-15 relative">
      <button
        onClick={() => navigate(-1)}
        className="w-20 h-6 bg-purple-500 absolute top-5 rounded text-center text-white font-semibold"
      >
        <i className="fa-solid fa-angle-left"></i>
        Back
      </button>
      <div className="flex flex-col lg:flex-row relative">
        <img
          className="w-full lg:w-[30%] h-119 rounded-xl "
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300"
          }
          alt={movie.title}
        />
        <div className="lg:w-[70%] text-white mt-10 lg:pl-10 ">
          <div className="w-20 mb-10 font-semibold bg-purple-500  flex justify-center items-center  rounded md:mb-5">
            <p>{movie.media_type || "Movie"}</p>
          </div>
          <div className="flex justify-between lg:justify-normal lg:gap-x-5 w-full">
            <h1 className="text-3xl font-bold mb-5 max-w-130">
              {movie.title || movie.name}
            </h1>

            <div className="hidden w-30 h-10 rounded bg-purple-500 md:flex items-center justify-center gap-x-1">
              <i className="fa-solid fa-star text-amber-300 text-[12px] md:text-[20px]"></i>
              <p className="text-[12px] md:text-[15px]  font-bold">Avg</p>
              <p className="text-[12px] md:text-[15px]  font-bold">{avg} / 5</p>
            </div>
            <div className="md:hidden absolute top-128 right-0  w-25 h-7 rounded bg-purple-500 flex items-center justify-center gap-x-1">
              <i className="fa-solid fa-star text-amber-300 text-[12px] md:text-[20px]"></i>
              <p className="text-[12px] md:text-[15px]  font-bold">Avg</p>
              <p className="text-[12px] md:text-[15px]  font-bold">{avg} / 5</p>
            </div>
          </div>

          <div className="flex items-center gap-x-11  mb-5">
            <div className="flex gap-x-5">
              <p>{movie.release_date?.slice(0, 4)}</p>
            <p>{movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
            </div>
            <div className="h-10 md:hidden bg-gray-500 p-2 rounded flex gap-x-2">
              <p className="bg-gray-700 text-sm font-semibold px-2 rounded">
                Your Rating
              </p>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRating(movie.id, star);
                  }}
                  className={`cursor-pointer ${
                    star <= (ratings[movie.id] || 0)
                      ? "text-amber-300"
                      : "text-white"
                  }`}
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-x-5 items-center mb-5">
            <div className="flex gap-x-3 lg:w-[55%]">
              {movie.genres?.map((genre) => (
                <div
                  key={genre.id}
                  className="lg:w-30 h-7  shadow-sm shadow-purple-600 rounded text-center font-semibold"
                >
                  <p>{genre.name}</p>
                </div>
              ))}
            </div>
            <div className="h-10 hidden bg-gray-500 p-2 rounded md:flex gap-x-2">
              <p className="bg-gray-700 text-sm font-semibold px-2 rounded">
                Your Rating
              </p>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRating(movie.id, star);
                  }}
                  className={`cursor-pointer ${
                    star <= (ratings[movie.id] || 0)
                      ? "text-amber-300"
                      : "text-white"
                  }`}
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
          </div>

          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-x-10 gap-y-5 md:gap-y-15 mt-15 md:mt-0  md:p-20 text-white">
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">DIRECTOR</h3>
            <h3 className="text-[14px]">{director}</h3>
          </div>
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">WRITTER</h3>
            <h3 className="text-[14px]">{writers}</h3>
          </div>
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">CAST</h3>
            <h3 className="text-[14px]">{cast}</h3>
          </div>
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">LANGUAGE</h3>
            <h3 className="text-[14px]">
              {movie.spoken_languages?.map((l) => l.english_name).join(", ")}
            </h3>
          </div>
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">COUNTRY</h3>
            <h3 className="text-[14px]">
              {movie.production_countries?.map((c) => c.name).join(", ")}
            </h3>
          </div>
          <div>
            <h3 className="text-gray-300 text-[15px] mb-2">RELEASED</h3>
            <h3 className="text-[14px]">{movie.release_date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
