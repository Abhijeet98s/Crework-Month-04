import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ movies }) {
  return (
    <>
      <div className="container grid grid-cols-1 gap-3 px-8 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="card relative z-0 m-3 text-white">
              <img
                className="max-w-full rounded-lg"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <div className="bg-image absolute bottom-0 flex h-[100%] flex-col items-start justify-end p-5 opacity-0 hover:opacity-100">
                <div className="text-2xl">{movie.original_title}</div>
                <div className="lg:text-md mt-1 flex items-center justify-start gap-2 text-sm">
                  <MdStar color="#FFD700" />
                  <span>{movie.vote_average}</span>
                </div>
                <div className="text-sm">
                  {movie.overview.slice(0, 100) + "..."}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
