import React from "react";
import useSWR from "swr";
import { MovieCard } from "../components/movie/MovieCard";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=dc6c85e0bac948cf596a5a8594683521`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="movie-page py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search ..."
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies &&
          movies.map((item, index) => (
            <MovieCard
              key={`${item.id}${index}`}
              backdrop_path={item.backdrop_path}
              title={item.title}
              release_date={item.release_date}
              vote_average={item.vote_average}
              id={item.id}
            ></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
