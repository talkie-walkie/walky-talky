import Playlist from "./Playlist";

const SavedPlaylist = ({ playlist, index, setActivePlaylist, displayedPlaylist, deletePlaylist }) => {

    return (
        <div className='displayed-playlist'  >
            <div className='displayed-playlist-title'>
                <h4>{playlist.name}</h4>
                <p> Length {playlist.hours}:{playlist.minutes}</p>
                <div className="playlist-displayed" >
                    <i className={`fa-solid fa-chevron-${displayedPlaylist[index]
                        ? 'up'
                        : 'down'
                        }`} onClick={() => setActivePlaylist(index)}></i>

                </div>
            </div>
            {displayedPlaylist[index] ?
                <div className="playlist-container">
                    <Playlist subset={playlist.podcasts} isDraggable={false} />
                    <button onClick={() => deletePlaylist(playlist.id)}>delete please</button>
                </div>

                : null}

        </div>


    )

}



export default SavedPlaylist;