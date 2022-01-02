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

    //axios request for events
  }, [currentDate]);

  return (
    <div className="page day-container">
      <h2>{currentDate ? currentDate.toDateString() : null}</h2>
    </div>
  );
}

export default Day;
