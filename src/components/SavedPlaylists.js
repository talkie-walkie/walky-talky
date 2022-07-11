import firebase from '../firebase';
import { ref, getDatabase, onValue, remove } from 'firebase/database';
import { useEffect, useState } from 'react';
import '../styles/SavedPlaylists.css';
import SavedPlaylist from './SavedPlaylist';


const SavedPlaylists = () => {
  const [displayedPlaylist, setDisplayedPlaylist] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const playlistsArray = [];
        for (let playlist in data) {
          playlistsArray.push({ ...data[playlist], id: playlist })
        }
        setPlaylists(playlistsArray)
        setDisplayedPlaylist(new Array(playlistsArray.length).fill(false))
      } else {
        console.log('No Data Available');
      }
    });
  }, []);

  const setActivePlaylist = (position) => {
    const newActivePlaylist = displayedPlaylist.map((playlist, index) => {
      if (index === position && playlist === false) {
        return true
      } else {
        return false
      }
    })
    setDisplayedPlaylist(newActivePlaylist)
  }
  const deletePlaylist = (id) => {
    const database = getDatabase(firebase)
    const dbRef = ref(database, `/${id}`)
    remove(dbRef)
  }

  return (
    <section className='saved-playlists' >
      {
        playlists.map((playlist, index) => (
          <SavedPlaylist playlist={playlist}
            index={index}
            deletePlaylist={deletePlaylist}
            setActivePlaylist={setActivePlaylist}
            displayedPlaylist={displayedPlaylist}
            key={`playlist.playlistName-${index}`} />
        ))
      }
    </section >
  )
}

export default SavedPlaylists;