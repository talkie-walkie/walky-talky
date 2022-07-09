import { useWindowWidth } from '@react-hook/window-size';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = (props) => {
  const { time } = props;

  const width = useWindowWidth({ wait: 500 });

  return (
    <header className={time > 0 && width <= 600 ? 'shrink' : null}>
      <div className="header-title">
        <h1>
          Walky <span className="talky">Talky</span>
        </h1>
        <h2 className="header-subheader">A Podcast Planner</h2>
      </div>
      {/* this is from font-awesome */}
      <div className="playlist-button">
        <i className="fa-solid fa-list"></i>
        <p className={time === 0 ? 'visible' : null}>View Saved Playlists</p>
      </div>
    </header>
  );
};

export default Header;
