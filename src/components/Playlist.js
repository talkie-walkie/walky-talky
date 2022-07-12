import PodcastTile from "./PodcastTile";
import {useState} from 'react';

const Playlist = ({ subset, setSelectedSubset, isDraggable}) => {
  
  const [dragId, setDragId] = useState('');

  const handleDragStart = (event) => {
    setDragId(event.currentTarget.id);
  }

  const handleDragEnter = (event) => {
    const dragPodcast = subset.find((podcast) => podcast.id === dragId);
    const enterPodcast = subset.find((podcast) => podcast.id === event.currentTarget.id);
    const enterPodcastOrder = enterPodcast.order;

    let newSubset = subset.filter((podcast) => podcast !== dragPodcast);
    newSubset.splice(enterPodcastOrder, 0, dragPodcast);
    newSubset = newSubset.map((podcast, index) => {
      return {...podcast, order: index};
    })

    setSelectedSubset(newSubset);
    event.preventDefault();
  }

  // const handleDrop = (event) => {
  //   const dragPodcast = subset.find((podcast) => podcast.id === dragId);
  //   const dropPodcast = subset.find((podcast) => podcast.id === event.currentTarget.id);
  //   const dropPodcastOrder = dropPodcast.order;

  //   let newSubset = subset.filter((podcast) => podcast !== dragPodcast);
  //   newSubset.splice(dropPodcastOrder, 0, dragPodcast);
  //   newSubset = newSubset.map((podcast, index) => {
  //     return {...podcast, order: index};
  //   })

  //   setSelectedSubset(newSubset);
  // };

  return (
    <section className="playlist">
      {subset.map((podcast) => (
        <PodcastTile key={podcast.id} podcastInfo={podcast} handleDragStart={handleDragStart} handleDragEnter={handleDragEnter} isDraggable={isDraggable} />
      ))}
    </section>
  );
};

export default Playlist;
