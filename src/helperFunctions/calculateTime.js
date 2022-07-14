const calculateTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = (time % 3600) % 60;
  return [hours, minutes, seconds];
};

export default calculateTime;