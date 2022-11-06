export default function Filter({ ratings }) {
  // console.log(ratings);
  return (
    <>
      <div className="mx-4 my-2 flex flex-wrap items-center justify-start gap-3 text-sm text-white">
        <form>
          <select className="rounded-sm text-black" name="rating" id="rating">
            <option value="">Rating</option>
            {ratings.map((rating,ind) => {
              <option value={rating} key={ind}>
                {rating}
              </option>;
            })}
          </select>
        </form>
      </div>
    </>
  );
}
