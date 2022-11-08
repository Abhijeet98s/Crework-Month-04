import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdStar } from "react-icons/md";

export default function MovieList() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
      );
      const data = await res.json();
      console.log(data);
      setMovieDetail(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container relative flex h-[90vh] w-full flex-col items-center text-white">
        <div className="w-[90%]">
          <img
            className="h-[500px] w-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
          />
        </div>
        <div className="relative bottom-[250px] flex w-[80%] items-center">
          <div className="w-[20%]">
            <img
              className="poster rounded-lg"
              src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            />
          </div>
          <div className="ml-10 flex h-[400px] flex-col items-start justify-between">
            <div className="details">
              <div className="text-6xl">{movieDetail.title}</div>
              <div className="">{movieDetail.tagline}</div>
              <div className="item-center flex">
                <div className="lg:text-md mt-1 flex items-center justify-start gap-2 text-sm">
                  <MdStar color="#FFD700" />
                  <span>{movieDetail.vote_average}</span>
                </div>
                <span className="ml-3">
                  {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="">
                {movieDetail ? movieDetail.runtime + " mins" : ""}
              </div>
              <div className="">
                {movieDetail ? "Release date: " + movieDetail.release_date : ""}
              </div>
              <div className="mt-5">
                {movieDetail && movieDetail.genres
                  ? movieDetail.genres.map((genre) => (
                      <>
                        <span
                          className="mr-4 rounded-sm border-2 border-solid border-white p-2"
                          id={genre.id}
                        >
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="my-8 flex-1 text-black">
              <div className="relative mb-5 flex items-center justify-start text-xl font-bold">
                Description
              </div>
              <div>{movieDetail.overview}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-10">
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
