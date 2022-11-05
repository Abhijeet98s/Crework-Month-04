import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [input, setInput] = useState("Black Adam");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=912b25081963b1fc7c1559e0575ff461&language=en-US",
      );
      const data = await res.json();
      // console.log(data.results);
      setMovies(data.results);
    };
    fetchData();
  }, [input]);

  const updateSearch = (e) => {
    setSearchMovie(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    const result = movies.filter((movie) => {
      if (searchMovie === "") return;
      else if (movie.title.includes(searchMovie)) {
        return movie;
      }
    });
    console.log(result);
    setInput(result);
  };

  return (
    <>
      <div className="container relative min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero movies={movies} />}></Route>
          <Route path="/movie/:id" element={<MovieList />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/search"
            element={
              <Search
                movies={movies}
                searchMovie={searchMovie}
                getSearch={getSearch}
                updateSearch={updateSearch}               
              />
            }
          ></Route>
          <Route
            path="*"
            element={
              <h1 className="text-center text-4xl text-black">Not Found</h1>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}
