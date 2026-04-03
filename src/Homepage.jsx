import React, { useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import BannerSlide from "./components/BannerSlide/BannerSlide";
import { fetchMovies } from "./api";
import MovieList from "./components/MoviesList/MovieList";
import { Link } from "react-router";

export default function Homepage() {
  const [fast, setFast] = useState([]);
  const [avengers, setAvengers] = useState([]);
  const [mission, setMission] = useState([]);
  const [dc, setDc] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setFast(await fetchMovies("fast"));
    setAvengers(await fetchMovies("spider"));
    setMission(await fetchMovies("mission impossible"));
    setDc(await fetchMovies("batman"));
  };

  return (
    <section className="bg-black w-full min-h-screen p-2 ">
      <header className="text-white  shadow-sm shadow-purple-500  h-15 w-full rounded flex justify-between items-center p-3 mb-3">
        <h1 className="text-lg  font-bold ">
          <span className="text-purple-500">Le</span> Cinema
        </h1>
        <div className="flex gap-x-3 text-sm">
          <a href="">Home</a>
          <a href="">movies</a>
          <a href="">Top Ratings</a>
          <a href="">Favourites</a>
        </div>
        <div>
          <Link to="/searchpage">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-100 border border-gray-700  bg-slate-900 rounded-md  p-1"
              placeholder="Search For Movies"
            />
          </Link>
        </div>
      </header>
      <BannerSlide />,
      <div className="flex flex-col gap-y-10 box-border">
        <MovieList title="Fast & Furious" movies={fast} />
        <MovieList title="Mission Impossible" movies={mission} />
        <MovieList title="Spider-Man" movies={avengers} />
      </div>
    </section>
  );
}
