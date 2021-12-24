import { useEffect, useState } from "react";

function Day() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let url = window.location.href;
    let params = url.split("=")[1];
    let tempDate = new Date(params);

    setCurrentDate(tempDate);
  }, [currentDate]);

  return (
    <div className="page day-container">
      <h2>{currentDate ? currentDate.toDateString() : null}</h2>
    </div>
  );
}

export default Day;
