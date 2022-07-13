import { useEffect, useState } from "react";
import calculateTime from "../helperFunctions/calculateTime";
import getPubDate from "../helperFunctions/determineDate";

const PodcastTile = ({
  podcastInfo,
  handleDragStart,
  handleDragEnter,
  isDraggable,
}) => {
  console.log(getPubDate(new Date(podcastInfo.pub_date_ms)));
  // const [displayDescription, setDisplayDescription] = useState(false);
  const [time, setTime] = useState({});
  const [expandDescription, setExpandDescription] = useState(false);

  useEffect(() => {
    const [hours, minutes, seconds] = calculateTime(
      podcastInfo.audio_length_sec
    );
    setTime({ hours, minutes, seconds });
  }, [podcastInfo.audio_length_sec]);

  const toggleDescription = () => {
    setExpandDescription(!expandDescription);
  };

  // Use regex to remove html tags, opening and closing ellipses
  const description = podcastInfo.description_highlighted
    .replace(/<.+>/g, "")
    .replace(/^\.\.\./, "")
    .replace(/\.\.\.$/, "");

  return (
    <>
      <div
        id={podcastInfo.id}
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        className="podcast-tile"
        draggable={isDraggable}
      >
        <div className="podcast-tile-img">
          <img
            src={podcastInfo.thumbnail}
            alt={`Cover art for ${podcastInfo.title_original}`}
          />
        </div>
        <div className="podcast-tile-heading">
          <div className="podcast-tile-heading-name">
            <h4>{podcastInfo.publisher_original}</h4>
          </div>
          <div className="podcast-tile-heading-episode">
            <h5>{podcastInfo.title_original}</h5>
          </div>
        </div>
        <div
          className={
            expandDescription
              ? "podcast-tile-description podcast-tile-description-full"
              : "podcast-tile-description"
          }
          onClick={toggleDescription}
        >
          <p>{description}</p>
        </div>
        <div className="podcast-tile-play">
          <i className="fa-solid fa-circle-play"></i>
        </div>
        <div className="podcast-tile-data">
          <p>
            <span className="podcast-tile-date">{getPubDate(new Date(podcastInfo.pub_date_ms))} • </span>
            <span className="podcast-tile-length">
              {time.hours > 0
                ? `${time.hours} ${time.hours > 1 ? "hrs" : "hr"} ${
                    time.minutes
                  } ${time.minutes > 1 ? "mins" : "min"}`
                : `${time.minutes} ${time.minutes > 1 ? "mins" : "min"} ${
                    time.seconds
                  } ${time.seconds > 1 ? "secs" : "sec"}`}
            </span>
          </p>
        </div>
        <div className="podcast-tile-links">
          <a className="podcast-tile-link" href={podcastInfo.link}>
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
      <hr className="podcast-tile-divider" />
    </>
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
