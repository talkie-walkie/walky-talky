const getBestPodcast = (time, data) => {
  return data.reduce((prev, curr) => {
    if (
      Math.abs(prev.audio_length_sec - time) >
      Math.abs(curr.audio_length_sec - time)
    ) {
      return curr;
    } else {
      return prev;
    }
  });
};

export default getBestPodcast;
