const PodcastTile = ({podcastInfo}) => {
  console.log(podcastInfo);
  return (
    <div class="podcast-tile">
      <div class="podcast-img">
        <img src={podcastInfo.thumbnail} alt={`Cover art for ${podcastInfo.title}`} />
      </div>
      <div class="podcast-details">
        <h4>{podcastInfo.title}</h4>
      </div>
    </div>
  );
}

export default PodcastTile;