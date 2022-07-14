import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Route, Routes } from "react-router-dom";
import SavedPlaylists from "./components/SavedPlaylists";
import PodcastPlayer from "./components/PodcastPlayer";
import Footer from "./components/Footer";

function App() {
  const [time, setTime] = useState(0);
  const [genreIds, setGenreIds] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [activePodcast, setActivePodcast] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <Routes>
          <Route
            path="SavedPlaylist"
            element={
              <>
                <Header home={false} />
                <SavedPlaylists setActivePodcast={setActivePodcast} />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header time={time} home={true} />
                <Search
                  time={time}
                  setTime={setTime}
                  setGenreIds={setGenreIds}
                  setSearchTerm={setSearchTerm}
                  setIsSearching={setIsSearching}
                />
                {searchTerm ? (
                  <SearchResults
                    time={time}
                    genreIds={genreIds}
                    searchTerm={searchTerm}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                    setSearchTerm={setSearchTerm}
                    setActivePodcast={setActivePodcast}
                  />
                ) : null}
              </>
            }
          />
          <Route path="*" element={<p>ERROR</p>} />
        </Routes>
      </div>
      {activePodcast ? <PodcastPlayer activePodcast={activePodcast} setActivePodcast={setActivePodcast} /> : null}
      <Footer />
    </div>
  );
}

export default App;
