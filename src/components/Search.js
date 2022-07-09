import { useState } from "react";
import SearchDetails from "./SearchDetails";

const Search = ({ time, setTime, setGenreId, setSearchTerm }) => {
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [genre, setGenre] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time) {
      console.log("hello");
      let hours = timeHours * 60 * 60;
      let minutes = timeMinutes * 60;
      setTime(hours + minutes);
    } else {
      let hours = timeHours * 60 * 60;
      let minutes = timeMinutes * 60;
      setTime(hours + minutes);
      setGenreId(genre);
      setSearchTerm(searchInput);
    }
  };
  return (
    <div className="search-form">
      <p>How long would you like to listen?</p>
      <form onSubmit={handleSubmit}>
        <div className="number-inputs">
          <div className="number-input">
						<input
							name="hours"
							type="number"
							id="hours"
							onChange={(e) => setTimeHours(e.target.value)}
						></input>
						<label htmlFor="hours">
							hours
						</label>
					</div>
          <div className="number-input">
						<input
							name="minutes"
							type="number"
							id="minutes"
							onChange={(e) => setTimeMinutes(e.target.value)}
						></input>
						<label htmlFor="minutes">
							minutes
						</label>
					</div>
        </div>
        {time ? (
          <SearchDetails setGenre={setGenre} setSearchInput={setSearchInput} />
        ) : null}
        <button className="time-submit-button">Submit</button>
      </form>
    </div>
  );
};
export default Search;