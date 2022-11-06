import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";

export default function Search({
  movies,
  updateSearch,
  searchMovie,  
}) {
  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center gap-10 py-3 px-5 md:px-10">
        <h1 className="text-5xl font-bold text-blue-500 md:text-6xl xl:text-7xl">
          Search
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[70%] text-center"
        >
          <input
            type="text"
            name="search"
            value={searchMovie}
            placeholder="Search any movie here..."
            onChange={updateSearch}
            className="w-full rounded-md p-3 font-semibold text-blue-500 placeholder-black shadow-md ring-blue-500 hover:shadow-lg focus:placeholder-gray-400 focus:shadow-sm focus:outline-none focus:ring-2 md:w-3/5"
          />
        </form>
        <div className="container grid grid-cols-1 gap-3 px-8 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
          {movies
            .filter((movie) => {
              return searchMovie.toLowerCase() === ""
                ? movie
                : movie.title.toLowerCase().includes(searchMovie);
            })
            .map((movie) => (
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
      </div>
    </>
  );
}
