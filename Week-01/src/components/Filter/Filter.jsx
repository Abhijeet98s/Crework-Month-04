export default function Filter({ movies, setMovies }) {
  return (
    <>
      <div className="mx-4 my-2 flex flex-wrap items-center justify-start gap-3 text-sm text-white">
        <form>
          <select className="rounded-sm text-black" name="rating" id="rating">
            <option value="rating">Rating</option>
            <option value="9.0">9.0</option>
            <option value="8.5">8.5</option>
            <option value="8.0">8.0</option>
            <option value="7.5">7.5</option>
          </select>
        </form>
      </div>
    </>
  );
}
