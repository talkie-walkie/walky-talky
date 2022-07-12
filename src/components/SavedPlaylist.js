import Playlist from "./Playlist";

const SavedPlaylist = ({
  playlist,
  index,
  setActivePlaylist,
  displayedPlaylist,
  deletePlaylist,
}) => {
  return (
    <div className="displayed-playlist">
      <div
        className="displayed-playlist-title"
        onClick={() => setActivePlaylist(index)}
      >
        <h4>{playlist.name}</h4>
        <div className="playlist-displayed">
          <p>
            {" "}
            Length {playlist.hours}:{playlist.minutes}
          </p>
          <i
            className={`fa-solid fa-chevron-${
              displayedPlaylist[index] ? "up" : "down"
            }`}
          ></i>
        </div>
      </div>
      {displayedPlaylist[index] ? (
        <div className="playlist-container">
          <Playlist subset={playlist.podcasts} />
          <button
            onClick={() => deletePlaylist(playlist.id)}
            className="search-button-pushable"
          >
            <span className="search-button-shadow"></span>
            <span className="search-button-edge"></span>
            <span className="search-button-front text">Delete List</span>
          </button>
        </div>
      ) : null}
      {displayedPlaylist[index] ? (
        <div className="playlist-container">
          <Playlist subset={playlist.podcasts} />
          <button
            onClick={() => deletePlaylist(playlist.id)}
            className="search-button-pushable"
          >
            <span className="search-button-shadow"></span>
            <span className="search-button-edge"></span>
            <span className="search-button-front text">Delete List</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SavedPlaylist;
