import firebase from './firebase';
import { ref, getDatabase, onValue } from 'firebase/database';
import { useEffect, /* useState */ } from 'react';

const SavedPlaylists = () => {
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        // const data = snapshot.val();
      } else {
        console.log('No Data Available');
      }
    });
  }, []);

  return (
    <p>This is where Saved Playlist will go!</p>
  )
}

export default SavedPlaylists;