import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function MovieDetails() {
  const [movies, setMovies] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=d600e890`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [id]);
  return (
    <div className="w-full h-full bg-black p-10 pt-15 relative">
      <button
        onClick={() => navigate(-1)}
        className="w-20 h-6 bg-purple-500 absolute top-5 rounded text-center text-white font-semibold"
      >
        <i class="fa-solid fa-angle-left"></i>
        Back
      </button>
      <div className="flex  border-white relative">
        <img
          className="w-[30%] h-120  "
          src={movies.Poster}
          alt={movies.Title}
        />
        <div className="bg-black w-[70%] text-white mt-10 px-10 ">
          <div className="w-20 font-semibold bg-purple-500  flex justify-center items-center  rounded mb-5">
            <p>{movies.Type}</p>
          </div>
          <h1 className="text-3xl font-bold mb-5">{movies.Title}</h1>
          <div className="flex gap-x-5 mb-5">
            <p>{movies.Year}</p>
            <p>{movies.Runtime}</p>
            <div className="w-15 h-7 rounded shadow-sm shadow-purple-600 text-center text-sm">
              <p>{movies.Rated}</p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-5">
            {movies.Genre?.split(", ").map((genre, index) => (
              <div className="w-20 h-7 shadow-md shadow-purple-600 rounded text-center font-semibold">
                <p>{genre}</p>
              </div>
            ))}
          </div>
          <p>{movies.Plot}</p>
          <div className="w-16 h-13 rounded bg-purple-500 bg-amber-50 absolute top-23 right-40 px-2">
            <div className="flex items-center gap-x-2">
              <i className="fa-solid fa-star text-yellow-300"></i>
              <p className="font-semibold">{movies.imdbRating}</p>
            </div>
            <p className="text-center font-semibold">IMDB</p>
          </div>
        </div>
      </div>
      <div className="w-full h-100 flex justify-center items-center">
        <div className="grid grid-cols-4 gap-x-10 gap-y-15 p-20 text-white">
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">DIRECTOR</h3>
            <h3 className="text-[14px]">{movies.Director}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">WRITTER</h3>
            <h3 className="text-[14px]">{movies.Writer}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">CAST</h3>
            <h3 className="text-[14px]">{movies.Actors}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">LANGUAGE</h3>
            <h3 className="text-[14px]">{movies.Language}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">COUNTRY</h3>
            <h3 className="text-[14px]">{movies.Country}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">RELEASED</h3>
            <h3 className="text-[14px]">{movies.Released}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">BOX OFFICE</h3>
            <h3 className="text-[14px]">{movies.BoxOffice}</h3>
          </div>
          <div>
            <h3 className="text-gray-500 text-[15px] mb-2">AWARDS</h3>
            <h3 className="text-[14px]">{movies.Awards}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
