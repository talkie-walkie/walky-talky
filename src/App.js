import "./App.css";

import "./styles/Search.css";
import "./styles/PodcastTile.css";
import { useState } from "react";
import Search from "./components/Search";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Route, Routes } from "react-router-dom";
import SavedPlaylists from "./components/SavedPlaylists";

function App() {
  const [time, setTime] = useState(0);
  const [genreId, setGenreId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <Routes>
        <Route path="SavedPlaylist" element={
          <>
            <Header home={false} />
            <SavedPlaylists />
          </>
        } />
        <Route
          path="/"
          element={
            <>
              <Header time={time} home={true} />
              <Search
                time={time}
                setTime={setTime}
                setGenreId={setGenreId}
                setSearchTerm={setSearchTerm}
              />
              <SearchResults
                time={time}
                genreId={genreId}
                searchTerm={searchTerm}
              />
            </>
          }
        />
        <Route path="*" element={<p>ERROR</p>} />
      </Routes>
    </div>
  );
}

export default App;
