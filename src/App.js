import './App.css';
import firebase from './firebase';
import { ref, getDatabase, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import Search from './Search';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import {Route, Routes} from 'react-router-dom';

// API-Key c17f9dde6c0743f195a962da663f6626

function App() {
  const [time, setTime] = useState(500);
  const [genreId, setGenreId] = useState(114);
  const [searchTerm, setSearchTerm] =useState('')
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


  return (
    <div className="container">

      <Routes>
        <Route path="SavedPlaylist" element={<Header home={false}/>}/>
        <Route path="/" element={
          <>
            <Header time={time} home={true}/>
            <Search />
            <SearchResults time={time} genreId={genreId} searchTerm={searchTerm} />
          </>} />
          <Route path="*" element={<p>ERROR</p>}/>
      </Routes>

      
    </div>

  );
}

export default App;
