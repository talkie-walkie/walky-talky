import { useState, useEffect, useRef, useCallback } from "react";
import firebase from "../firebase";
import { ref, getDatabase, push } from "firebase/database";
import axios from "axios";
import useSubsets from "../helperFunctions/useSubsets";
import getBestPodcast from "../helperFunctions/getBestPodcast";
import calculateTime from "../helperFunctions/calculateTime";
import Playlist from "./Playlist";
import WarningModal from "./WarningModal";

const SearchResults = ({
  time,
  genreIds,
  searchTerm,
  isSearching,
  setIsSearching,
  setSearchTerm,
  setActivePodcast,
}) => {
  //states
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSubset, setSelectedSubset] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  // ref of search results so that they can be scrolled into view when ready
  const searchResultsSection = useRef();

  //custom hook
  const [subsets, getSubsets] = useSubsets([]);

  const getRandomSubset = useCallback(() => {
    if (subsets.length > 0) {
      const index = Math.floor(Math.random() * subsets.length);
      const indexedSubset = subsets[index].map((podcast, index) => {
        return { ...podcast, order: index };
      });
      setSelectedSubset(indexedSubset);
    } else {
      //If no subset matches user's indicated 'time', get single podcast that most closely matches 'time'
      setSelectedSubset([getBestPodcast(time, podcasts)]);
    }
  }, [podcasts, subsets, time]);

  const savePlaylist = (name) => {
    if (name && selectedSubset) {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      const [hours, minutes, seconds] = calculateTime(time);

      push(dbRef, {
        name: name,
        genreIds: genreIds,
        podcasts: selectedSubset,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      setPlaylistName("");
    }
  };

  //function for if user wants a different subset of podcasts
  const handleShuffleClick = () => {
    if (subsets.length < 5) {
      axios({
        url: "https://listen-api.listennotes.com/api/v2/search",
        headers: {
          "X-ListenAPI-Key": "c17f9dde6c0743f195a962da663f6626",
        },
        params: {
          q: searchTerm,
          genre_ids: genreIds,
          offset: podcasts.length,
        },
      }).then((response) => {
        setPodcasts([...podcasts, ...response.data.results]);
        getSubsets([...podcasts, ...response.data.results], time);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      getRandomSubset();
    }
  };

  useEffect(() => {
    if (isSearching) {
      axios({
        url: "https://listen-api.listennotes.com/api/v2/search",
        headers: {
          "X-ListenAPI-Key": "c17f9dde6c0743f195a962da663f6626",
        },
        params: {
          q: searchTerm,
          genre_ids: genreIds,
        },
      }).then((response) => {
          setPodcasts(response.data.results);
          getSubsets(response.data.results, time);
          setIsSearching(false);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [time, genreIds, searchTerm, getSubsets, isSearching, setIsSearching]);

  useEffect(() => {
    if (podcasts.length > 0) {
      getRandomSubset();
      searchResultsSection.current.scrollIntoView();
    }
  }, [getRandomSubset, podcasts.length, subsets]);

  const handleClickOk = () => {
    setSearchTerm("");
  };

  return podcasts.length === 0 && !isSearching ? (
    <WarningModal
      message={`No results. Please try entering a different search term or including
    more genres`}
      handleClickOk={handleClickOk}
      buttonText={`OK`}
    />
  ) : (
    <section className="search-results-container" ref={searchResultsSection}>
      <div className="search-results-title-container">
        <h3>For your listening pleasure</h3>
        <button title="Refresh Results" onClick={handleShuffleClick} className="button-pushable">
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text refresh-results" ><i className="fa-solid fa-rotate-right"></i></span>
          </button>
      </div>

      <Playlist
        subset={selectedSubset}
        setSelectedSubset={setSelectedSubset}
        isDraggable={true}
        setActivePodcast={setActivePodcast}
      />
      <div className="name-playlist-container">
        <label className="save-playlist-label" htmlFor="playlist-name">
          Name Your Playlist
        </label>
        <input
          className="save-playlist-input"
          type="text"
          id="playlist-name"
          value={playlistName}
          onChange={(e) => {
            setPlaylistName(e.target.value);
          }}
        />
      </div>

          <button
            onClick={() => savePlaylist(playlistName, selectedSubset)}
            className="button-pushable"
          >
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">Save Playlist</span>
          </button>
    </section>
  );
};

export default SearchResults;
