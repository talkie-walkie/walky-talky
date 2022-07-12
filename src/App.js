import './App.css';

import './styles/Search.css';
import './styles/PodcastTile.css';
import { useState } from 'react';
import Search from './components/Search';


import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import { Route, Routes } from "react-router-dom";
import SavedPlaylists from "./components/SavedPlaylists";

function App() {
  const [time, setTime] = useState(0);
  const [genreIds, setGenreIds] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="container">
      <div className="wrapper">
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
                  setGenreIds={setGenreIds}
                  setSearchTerm={setSearchTerm}
                  setIsSearching={setIsSearching}
                />
                { searchTerm
                  ? <SearchResults
                  time={time}
                  genreIds={genreIds}
                  searchTerm={searchTerm}
                  isSearching={isSearching}
                  setIsSearching={setIsSearching}
                  setSearchTerm={setSearchTerm}
                />
                : null
                }
              </>
            }
          />
          <Route path="*" element={<p>ERROR</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
