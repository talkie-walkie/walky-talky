import './App.css';
import './styles/Search.css'
import { useState } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import SearchResults from './components/SearchResults';

// API-Key c17f9dde6c0743f195a962da663f6626

function App() {
  const [time, setTime] = useState(0);
  const [genreId, setGenreId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  


  return (
    <div className="container">
      <Header time={time} />
      <Search time={time} setTime={setTime} setGenreId={setGenreId} setSearchTerm={setSearchTerm} />
      <SearchResults time={time} genreId={genreId} />
    </div>

  );
}

export default App;
