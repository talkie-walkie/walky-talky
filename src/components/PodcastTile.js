import { useState } from 'react';

const PodcastTile = ({podcastInfo}) => {

  const [displayDescription, setDisplayDescription] = useState(false);

  console.log(podcastInfo);
  // Use regex to remove html tags, opening and closing ellipses
  const description = podcastInfo.description_highlighted.replace(/<.+>/, '').replace(/^\.\.\./, '').replace(/\.\.\.$/, '');

  return (
    <div className="podcast-tile" onClick={() => setDisplayDescription(!displayDescription)}>
      <div className="podcast-img-and-details">
        <div className="podcast-img">
          <img src={podcastInfo.thumbnail} alt={`Cover art for ${podcastInfo.title_original}`} />
        </div>
        <div className="podcast-details">
          <h4>{podcastInfo.publisher_original}</h4>
          <h5>{podcastInfo.title_original}</h5>
          {/* <p className="see-description" role="button" onClick={() => setDisplayDescription(!displayDescription)}>
            {
              displayDescription
              ? <>
                <i className="fa-solid fa-chevron-down"></i> Hide description
              </>
        
              : <>
              <i className="fa-solid fa-chevron-right"></i> Display description
            </>
            }
          </p> */}
        </div>
      </div>
      {
        displayDescription
          ? <div className="podcast-description">
              <p>{description}</p>
            </div>
          : null
      }
    </div>
  );
}

export default PodcastTile;