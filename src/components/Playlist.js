import PodcastTile from "./PodcastTile";
import {useState} from 'react';

const Playlist = ({ subset, setSelectedSubset, isDraggable}) => {
  
  const [dragId, setDragId] = useState('');

  const handleDragStart = (event) => {
    setDragId(event.currentTarget.id);
  }

  const handleDrop = (event) => {
    const dragPodcast = subset.find((podcast) => podcast.id === dragId);
    const dropPodcast = subset.find((podcast) => podcast.id === event.currentTarget.id);
    const dropPodcastOrder = dropPodcast.order;

    let newSubset = subset.filter((podcast) => podcast !== dragPodcast);
    newSubset.splice(dropPodcastOrder, 0, dragPodcast);
    newSubset = newSubset.map((podcast, index) => {
      return {...podcast, order: index};
    })

    setSelectedSubset(newSubset);
  };

  return (
    <section className="playlist">
      {subset.map((podcast) => (
        <PodcastTile key={podcast.id} podcastInfo={podcast} handleDragStart={handleDragStart} handleDrop={handleDrop} isDraggable={isDraggable} />
      ))}
    </section>
  );
};

export default Playlist;
