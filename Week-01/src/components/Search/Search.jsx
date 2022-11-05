import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";

export default function Search({
  movies,
  getSearch,
  updateSearch,
  searchMovie,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center gap-10 py-3 px-5 md:px-10">
        <h1 className="text-5xl font-bold text-blue-500 md:text-6xl xl:text-7xl">
          Search
        </h1>
        <form onSubmit={getSearch} className="w-[70%] text-center">
          <input
            type="text"
            name="search"
            value={searchMovie}
            placeholder="Search any movie here..."
            onChange={updateSearch}
            className="w-full rounded-md p-3 font-semibold text-blue-500 placeholder-black shadow-md ring-blue-500 hover:shadow-lg focus:placeholder-gray-400 focus:shadow-sm focus:outline-none focus:ring-2 md:w-3/5"
          />
        </form>
        <Card movies={movies} />
        <button
          onClick={() => navigate("/")}
          className="rounded border border-blue-500 bg-transparent py-1 px-3 text-black hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Home Page
        </button>
      </div>
    </>
  );
}
