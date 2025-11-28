const MovieCard = ({ movieInfo }) => {
  return (
    <div className="relative w-40 shrink-0 md:w-52 cursor-pointer transform hover:scale-110 hover:shadow-2xl hover:z-10 transition-all duration-300">
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={movieInfo.title}
      />

      <div className="absolute inset-0 rounded-lg bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <p className="text-xs font-semibold text-white line-clamp-2">
          {movieInfo.title}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;