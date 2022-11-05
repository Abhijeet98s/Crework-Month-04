export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10 p-10">
        <h1 className="text-6xl text-blue-500">About</h1>
        <p className="text-xl text-black">
          Using the TMDB API, I used Reactjs to create the Movie List App, which
          fetches movies from the server.
        </p>
        <img className="h-[400px]" src="/undraw_home_cinema_l7yl.svg" alt="cinema-pic" />
      </div>
    </>
  );
}
