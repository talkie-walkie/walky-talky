import './App.css';
import firebase from './firebase';
import { ref, getDatabase, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchResults from './components/SearchResults';

// API-Key c17f9dde6c0743f195a962da663f6626

function App() {
  const [time, setTime] = useState(0);
  const [genreId, setGenreId] = useState(null);

  const database = getDatabase(firebase);
  const dbRef = ref(database);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
      } else {
        console.log('No Data Available');
      }
    });
  }, []);

  //leaving commented out until we need to use API call with real data

  // useEffect(() => {
  //   axios({
  //     url: 'https://listen-api-test.listennotes.com/api/v2/genres',
  //     // headers: {
  //     //   'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626'
  //     // },
  //     params: {
  //       top_level_only: 1,
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios({
  //     url: 'https://listen-api-test.listennotes.com/api/v2/best_podcasts',
  //     // headers: {
  //     //   'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626'
  //     // },
  //     params: {
  //       gener_id: 133,
  //       page: 1,
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="container">
      <Header time={time} />
      <SearchResults time={time} genreId={genreId} />
    </div>
  );
}

export default App;
