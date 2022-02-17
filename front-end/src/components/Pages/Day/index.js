import { useEffect, useState } from "react";
import axios from "axios";

function Day() {
  const [currentDate, setCurrentDate] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url = window.location.href;
    let params = url.split("=")[1];
    let tempDate = new Date(params);
    setCurrentDate(tempDate);

    getEvents(tempDate);
  }, []);

  const getEvents = async (date) => {
    let tempArr = [];
    let formattedDate =
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    console.log(date.getMonth());
    await axios
      .get(`http://localhost:5000/months/events/${date.getMonth()}`)
      .then((res) => {
        res.data.forEach((event) => {
          if (event.date === formattedDate) {
            console.log(event);
            setEvents([...events, event]);
          }
        });
      });

    // setEvents([...events, tempArr]);
  };

  return (
    <div className="page day-container">
      <h2>{currentDate ? currentDate.toDateString() : null}</h2>

      {console.log(events)}
      {events.length > 0
        ? events.map((event, key) => {
            return (
              <h3 key={key}>
                {event.name} {event.time}
              </h3>
            );
          })
        : null}
    </div>
  );
}

export default Day;
