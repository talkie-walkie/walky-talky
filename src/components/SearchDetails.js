import { useState } from 'react';
import genreArray from '../data/genreArray';

const SearchDetails = ({ setGenres, setSearchInput }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(genreArray.length).fill(false)
  );

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleGenreChange = (position) => {
    const genres = [];

    const newCheckedStates = checkedState.map((checked, index) => {
      return index === position ? !checked : checked;
    });

    newCheckedStates.forEach((checked, index) => {
      if (checked) {
        genres.push(genreArray[index].genreId);
      }
    });

    setCheckedState(newCheckedStates);
    setGenres(genres);
  };

  return (
    <>
      <label className="search-input-label" htmlFor="searchInput">
        What topic are you interested in?
      </label>
      <input
        className="search-input"
        onChange={handleSearchInputChange}
        type="text"
        name="searchInput"
        id="searchInput"
        required
      />
      <div className="genre-inputs">
        <p className="genre-inputs-title" >Choose one or more genres:</p>
        {genreArray.map((item, index) => (
          <div className="genre-input" key={item.genreId}>
            <input
              className="sr-only"
              type="checkbox"
              name="genreBtn"
              id={`checkbox-${index}`}
              value={item.genreId}
              onChange={() => handleGenreChange(index)}
              checked={checkedState[index]}
              tabIndex="-1"
            ></input>
            <label
              className="genre-label"
              htmlFor={`checkbox-${index}`}
              tabIndex="0"
            >
              {item.genre}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchDetails;
