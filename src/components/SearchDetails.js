const SearchDetails = ({ setGenre, setSearchInput }) => {
  const genreArray = [
    {
      genre: "Personal Finance",
      genreId: 144,
    },
    {
      genre: "Sport",
      genreId: 77,
    },
    {
      genre: "Locally Focused",
      genreId: 151,
    },
    {
      genre: "Business",
      genreId: 93,
    },
    {
      genre: "Health & Fitness",
      genreId: 88,
    },
    {
      genre: "Music",
      genreId: 134,
    },
    {
      genre: "Technology",
      genreId: 127,
    },
    {
      genre: "Fiction",
      genreId: 168,
    },
    {
      genre: "Kids & Family",
      genreId: 132,
    },
    {
      genre: "News",
      genreId: 99,
    },
    {
      genre: "Comedy",
      genreId: 133,
    },
    {
      genre: "Society & Culture",
      genreId: 122,
    },
    {
      genre: "Religion & Spirituality",
      genreId: 69,
    },
    {
      genre: "Government",
      genreId: 117,
    },
    {
      genre: "TV & Film",
      genreId: 68,
    },
    {
      genre: "Leisure",
      genreId: 82,
    },
    {
      genre: "Education",
      genreId: 111,
    },
    {
      genre: "Arts",
      genreId: 100,
    },
    {
      genre: "Science",
      genreId: 107,
    },
    {
      genre: "True Crime",
      genreId: 135,
    },
    {
      genre: "History",
      genreId: 125,
    },
  ];

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  return (
    <>
      <label className="sr-only" htmlFor="searchInput">
        What topic are you interested in?
      </label>
      <input
        className="search-input"
        onChange={handleSearchInputChange}
        type="text"
        name="searchInput"
        id="searchInput"
        placeholder="What topic are you interested in?"
        required
      />
      <div className="genre-inputs">
        {genreArray.map((item) => (
          <div className="genre-input" key={item.genreId}>
            <input
              className="sr-only"
              type="radio"
              name="genreBtn"
              id={item.genre}
              value={item.genreId}
              onChange={handleGenreChange}
              tabIndex="-1"
            ></input>
            <label className="genre-label" htmlFor={item.genre} tabIndex="0">
              {item.genre}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchDetails;
