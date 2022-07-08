import { useState, useEffect } from "react";
import GenreSearch from "./GenreSearch";
const TimeSearch = () => {
    const [timeHours, setTimeHours] = useState(0);
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeSeconds, setTimeSeconds] = useState(0);
    const [genre, setGenre] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!timeSeconds) {
            console.log('hello')
            let hours = (timeHours * 60) * 60;
            let minutes = (timeMinutes * 60);
            setTimeSeconds(hours + minutes);
        } else {
            // TO DO set app states
            console.log(timeSeconds, typeof genre)
        }
    }
    return (
        <div>
            <p>How long would you like to listen?</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="hours">hours</label>
                <input name="hours" type="number" id="hours" onChange={(e) => setTimeHours(e.target.value)}></input>
                <label htmlFor="minutes">minutes</label>
                <input name="minutes" type="number" id="minutes" onChange={(e) => setTimeMinutes(e.target.value)}></input>
                {timeSeconds
                    ? <GenreSearch setGenre={setGenre} />
                    : null
                }
                <button className="time-submit-button"
                >Submit</button>
            </form>
        </div>
    )
}
export default TimeSearch;