import PodcastTile from "./PodcastTile";

const Playlist = ({subset}) => {
  return (
    subset.map((podcast) => (
      <PodcastTile key={podcast.id} podcastInfo={podcast} />
    ))
  )
};

export default Playlist;