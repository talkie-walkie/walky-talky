const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const getPubDate = (dateObj) => {
  const year = dateObj.getUTCFullYear();
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  return `${month} ${day}, ${year}`;
}

export default getPubDate;