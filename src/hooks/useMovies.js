import React, { useEffect, useState } from "react";

const API_KEY = "1b66851494b775d1ac10713cf6aae5ee";

export function useMovies(query, page = 1, type = "movie") {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    const endpoint =
      type === "series" ? "tv" : type === "movie" ? "movie" : "multi";

    fetch(
      `https://api.themoviedb.org/3/search/${endpoint}?api_key=${API_KEY}&query=${query}&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalResults(data.total_results || 0);
      })
      .finally(() => setLoading(false));
  }, [query, page, type]);

  return { movies, totalResults, loading };
}
