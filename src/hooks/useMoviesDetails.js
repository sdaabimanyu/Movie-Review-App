import { useEffect, useState } from "react";

const API_KEY = "1b66851494b775d1ac10713cf6aae5ee";

export function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(setMovie);

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(setCredits);
  }, [id]);

  return { movie, credits };
}
