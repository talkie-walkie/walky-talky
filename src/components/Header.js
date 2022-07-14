import { useWindowWidth } from '@react-hook/window-size';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Logo from '../assets/walkie-talkie.png';

const Header = (props) => {
  const { time } = props;

  const width = useWindowWidth({ wait: 500 });

  return (
    <header className={(time > 0 && width <= 600) || !props.home ? 'shrink' : null}>
      <Link className='header-title-link' to="/">
        <div className="header-title">
          <div className='logo-container'>
            <h1>
              Walky <span className="talky">Talky</span>
            </h1>
            <img className="logo" src={Logo} alt="A walkie talkie with arms and legs walking" />
          </div>
          <h2 className="header-subheader">A Podcast Planner</h2>
        </div>
      </Link>
      {/* this is from font-awesome */}
      {props.home ? <Link to="SavedPlaylist" className="saved-playlist-link">
        <div className="playlist-button" aria-labelledby="playlist-button-label">
          <i className="fa-solid fa-list"></i>
          <p className="playlist-button-label" id="playlist-button-label">View Saved Playlists</p>
        </div>
      </Link> : <Link to="/">
        <i className="fa-solid fa-house-chimney"></i>
      </Link>}
    </header>
  );
};

export default Header;
