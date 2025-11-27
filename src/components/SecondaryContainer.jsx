import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);
  return (
    <div className="bg-black text-white ">
      <div className = '-mt-40 relative px-10'>
        <MoviesList type="Now Playing Movies" movies={nowPlayingMovies} />
        <MoviesList type="Top Rated Movies" movies={topRatedMovies} />
        <MoviesList type="Popular Movies" movies={popularMovies} />
        <MoviesList type="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
