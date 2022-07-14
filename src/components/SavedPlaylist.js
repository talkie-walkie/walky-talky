import Playlist from "./Playlist";

const SavedPlaylist = ({
  playlist,
  index,
  setActivePlaylist,
  displayedPlaylist,
  deletePlaylist,
  setActivePodcast,
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
            {playlist.hours > 0
              ? `${playlist.hours} ${playlist.hours > 1 ? "hrs" : "hr"} ${
                  playlist.minutes
                } ${playlist.minutes > 1 ? "mins" : "min"}`
              : `${playlist.minutes} ${playlist.minutes > 1 ? "mins" : "min"} ${
                  playlist.seconds
                } ${playlist.seconds > 1 ? "secs" : "sec"}`}
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
          <Playlist subset={playlist.podcasts} setActivePodcast={setActivePodcast} />
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
