import { useEffect, useState } from 'react';
import calculateTime from '../helperFunctions/calculateTime';

const PodcastTile = ({ podcastInfo, handleDragStart, handleDragEnter, isDraggable }) => {
  const [displayDescription, setDisplayDescription] = useState(false);
  const [time, setTime] = useState({});

  useEffect(() => {
    const [hours, minutes, seconds] = calculateTime(podcastInfo.audio_length_sec);
    setTime({hours, minutes, seconds});
  }, [podcastInfo.audio_length_sec]);

  // Use regex to remove html tags, opening and closing ellipses
  const description = podcastInfo.description_highlighted
    .replace(/<.+>/g, '')
    .replace(/^\.\.\./, '')
    .replace(/\.\.\.$/, '');

  return (
    <div id={podcastInfo.id} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={(e) => e.preventDefault()} className="podcast-tile" draggable={isDraggable}>
      <div className="podcast-tile-img">
        <img
            src={podcastInfo.thumbnail}
            alt={`Cover art for ${podcastInfo.title_original}`}
        />
      </div>
      <div className="podcast-tile-header">
        <h4>{podcastInfo.publisher_original}</h4>
        <h5>{podcastInfo.title_original}</h5>
      </div>
      <div className="podcast-tile-description">
        <p>{description}</p>
      </div>
      <div className="podcast-tile-play">
        <i class="fa-solid fa-circle-play"></i>
      </div>
      <div className="podcast-tile-length">
        <p>
          {
            time.hours > 0
              ? `${time.hours} ${time.hours > 1 ? 'hrs' : 'hr'} ${time.minutes} ${time.minutes > 1 ? 'mins' : 'min'}`
              : `${time.minutes} ${time.minutes > 1 ? 'mins' : 'min'} ${time.seconds} ${time.seconds > 1 ? 'secs' : 'sec'}`
          }
        </p>
      </div>
      <div className="podcast-tile-links">
          <a href={podcastInfo.link}>Site</a>
      </div>
    </div>
    // <div id={podcastInfo.id} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={(e) => e.preventDefault()} className="podcast-tile" draggable={isDraggable} onClick={() => setDisplayDescription(!displayDescription)}>
    //   <div className="podcast-img-and-details">
    //     <div className="podcast-img">
    //       <img
    //         src={podcastInfo.thumbnail}
    //         alt={`Cover art for ${podcastInfo.title_original}`}
    //       />
    //     </div>
    //     <div className="podcast-details">
    //       <h4>{podcastInfo.publisher_original}</h4>
    //       <h5>{podcastInfo.title_original}</h5>
    //     </div>
    //   </div>
    //   {displayDescription ? (
    //     <div className="podcast-description">
    //       <p>{description}</p>
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default PodcastTile;
