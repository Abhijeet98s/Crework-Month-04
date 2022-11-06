import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero({ movies }) {

  const generateRatings = () => {
    return [...new Set(movies.map(movie => movie.vote_average))];
  };

  return (
    <>
      <div className="container max-w-full">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie, ind) => (
            <Link key={ind} to={`/movie/${movie.id}`}>
              <div className="container flex flex-col text-white">
                <div className="md:h-[400px] md:w-full lg:h-[600px]">
                  <img
                    className="mx-auto block w-full "
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  />
                </div>
                <div className="bg-image absolute bottom-80 flex h-[70%] w-full flex-col items-start justify-end p-20 opacity-0 lg:bottom-0 lg:opacity-100">
                  <div className="mb-7 text-lg lg:text-6xl">{movie.title}</div>
                  <div className="text-sm lg:text-4xl">
                    {movie.release_date}
                    <div className="mt-1 flex items-center justify-start gap-2">
                      <MdStar color="#FFD700" />
                      <span className="text-sm lg:text-3xl">
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-left text-sm lg:text-xl">
                    {movie.overview}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <Filter ratings={generateRatings()} />
        <div className="container grid grid-cols-1 gap-3 px-8 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-16">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
