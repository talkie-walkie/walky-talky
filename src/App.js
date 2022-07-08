
import './App.css';
import firebase from './firebase';
import { ref, getDatabase, onValue } from 'firebase/database'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';

// API-Key c17f9dde6c0743f195a962da663f6626

function App() {

  const [data, setData] = useState([])

  const database = getDatabase(firebase)
  const dbRef = ref(database)

  // useEffect(() => {
  //   onValue(dbRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       const data = snapshot.val()
  //       console.log(data);
  //     } else {
  //       console.log('No Data Available');
  //     }
  //   })


  // }, [])
  // useEffect(() => {
  //   axios({
  //     url: 'https://listen-api-test.listennotes.com/api/v2/genres',
  //     // headers: {
  //     //   'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626'
  //     // },
  //     params: {
  //       top_level_only: 1,
  //     }
  //   }).then((response) => {
  //     console.log(response);
  //   })
  // }, [])

  // useEffect(() => {
  //   axios({
  //     url: 'https://listen-api-test.listennotes.com/api/v2/best_podcasts',
  //     // headers: {
  //     //   'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626'
  //     // },
  //     params: {
  //       gener_id: 133,
  //       page: 1,
  //     }
  //   }).then((response) => {
  //     console.log(response);
  //   })
  // }, [])

  return (
    <>
      <h1>Talkie Walkie 😊</h1>
      <Search />
    </>
  );
}

export default App;
