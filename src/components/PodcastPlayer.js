import { useState, useEffect } from "react";

const PodcastPlayer = ({ activePodcast, setActivePodcast }) => {
  const [audio, setAudio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const toggle = () => setPlaying(!playing);

  const handleChangeVolume = (e) => {
    setAudioVolume(e.target.value / 100);
    audio.volume = e.target.value / 100;
  };

  const handleMuting = () => {
    if (isMuted) {
      audio.volume = audioVolume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const closePlayer = () => {
    setActivePodcast(null);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  // Prepares audio element to play when it is ready and pause when it has ended
  useEffect(() => {
    const shouldIStartPlaying = () => {
      if (audio.readyState >= 3) {
        setPlaying(true);
        audio.removeEventListener("loadeddata", shouldIStartPlaying);
      }
    };
    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("loadeddata", shouldIStartPlaying);
    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  // Sets new audio state whenever activePodcast changes
  useEffect(() => {
    setAudio(new Audio(activePodcast.audio));
  }, [activePodcast.audio]);

  return (
    <section className="player">
      <div className="player-info">
        <div className="player-info-img">
          <img
            src={activePodcast.thumbnail}
            alt={`Cover art for ${activePodcast.title_original}`}
          />
        </div>
        <div className="player-info-details">
          <h5>{activePodcast.title_original}</h5>
          <h6>{activePodcast.publisher_original}</h6>
        </div>
      </div>
      <div className="player-controls">
        <div className="player-controls-buttons">
          <i
            className={
              playing ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"
            }
            onClick={toggle}
          ></i>
        </div>
        <div className="player-controls-scrubber"></div>
      </div>
      <div className="player-volume">
        <div className="player-volume-icon" onClick={handleMuting}>
          <i
            className={
              isMuted ? "fa-solid fa-volume-off" : "fa-solid fa-volume-high"
            }
          ></i>
        </div>
        <div className="player-volume-slider">
          <label className="sr-only" htmlFor="volume">
            Volume Slider
          </label>
          <input
            type="range"
            value={audioVolume * 100}
            onChange={handleChangeVolume}
          />
        </div>
      </div>
      <div className="close-player" title="Close Player">
        <button onClick={closePlayer} className="button-pushable">
          <span className="button-shadow"></span>
          <span className="button-edge"></span>
          <span className="button-front text"><i className="fa-solid fa-xmark"></i></span>
        </button>
      </div>
    </section>
  );
};

export default PodcastPlayer;
