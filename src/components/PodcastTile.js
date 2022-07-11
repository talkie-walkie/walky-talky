import { useState } from 'react';

const PodcastTile = ({ podcastInfo, handleDragStart, handleDrop, isDraggable }) => {
  const [displayDescription, setDisplayDescription] = useState(false);

  // console.log(podcastInfo);
  // Use regex to remove html tags, opening and closing ellipses
  const description = podcastInfo.description_highlighted
    .replace(/<.+>/g, '')
    .replace(/^\.\.\./, '')
    .replace(/\.\.\.$/, '');

  return (
    <div id={podcastInfo.id} onDragStart={handleDragStart} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="podcast-tile" draggable={isDraggable} onClick={() => setDisplayDescription(!displayDescription)}>
      <div className="podcast-img-and-details">
        <div className="podcast-img">
          <img
            src={podcastInfo.thumbnail}
            alt={`Cover art for ${podcastInfo.title_original}`}
          />
        </div>
        <div className="podcast-details">
          <h4>{podcastInfo.publisher_original}</h4>
          <h5>{podcastInfo.title_original}</h5>
        </div>
      </div>
      {displayDescription ? (
        <div className="podcast-description">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PodcastTile;
