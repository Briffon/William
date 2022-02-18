import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Calendar() {
  const [months, setMonths] = useState([]);
  const [date, setDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState({});

  //if there are no months, fetch them from the api and add to state; update current month
  useEffect(() => {
    //set day to current date
    const tempDate = new Date();
    let tempMonths = [];
    setDate(tempDate);

    //fetch
    if (months.length == 0) {
      axios.get("http://localhost:5000" + "/months").then((res) => {
        const months = res.data;

        months.forEach((month) => {
          if (month.month === tempDate.getMonth()) {
            setCurrentMonth(month);
          }
        });

        //organize months by month number
        for (let i = 0; i < 12; i++) {
          months.map((month) => {
            if (month.month === i) {
              tempMonths.push(month);
            }
          });
        }

        setMonths(tempMonths);
      });
    }
  }, [currentMonth]);

  //Convert month num to string
  const getMonthString = () => {
    switch (currentMonth.month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        break;
    }
  };

  //function for manual month to string
  const getMonthString2 = (monthNum) => {
    switch (monthNum) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        break;
    }
  };

  const findEvent = (day) => {
    let tempEvents = [];

    currentMonth.events.map((event) => {
      // if (parseInt(event.date) === day) console.log(event);
      if (parseInt(event.date) === day) {
        tempEvents.push(event);
      }
    });

    return tempEvents;
  };

  const makeDays = () => {
    const tempDate = new Date();
    const fdotw = new Date(
      `${getMonthString(currentMonth.month)} 01,${tempDate.getFullYear()}`
    );
    let startIndex = 0;
    startIndex = fdotw.getDay();
    const days = [];

    for (let i = 1; i <= startIndex; i++) {
      days.push(<div key={i} className="hidden-day"></div>);
    }
    for (let i = 1; i <= currentMonth.days; i++) {
      let limit = 0;
      console.log(date.getDay());
      const day = (
        <div
          key={`A${i}`}
          className={
            date.getDay() === i && currentMonth.month === date.getMonth()
              ? "active-day calendar-container__days__day"
              : "calendar-container__days__day"
          }
        >
          <a
            href={`/Day?day=${getMonthString2(currentMonth.month)},${
              i >= 10 ? i : "0" + i
            },${date.getFullYear()}`}
          >
            <p>{i}</p>
            {findEvent(i).length > 0 ? (
              <div className="events">
                {findEvent(i).map((event, key) => {
                  if (i % 2 && key <= 1) {
                    return (
                      <span key={key} className="event color-one">
                        {event.name} {event.time}
                        <div className="corner">
                          <div className="fold"></div>
                        </div>
                      </span>
                    );
                  } else if (i % 3 && key <= 1) {
                    return (
                      <span key={key} className="event color-two">
                        {event.name} {event.time}
                        <div className="corner">
                          <div className="fold"></div>
                        </div>
                      </span>
                    );
                  } else if (key > 1) {
                    if (limit === 0) {
                      limit = limit + 1;
                      return (
                        <span key={key} className="view-all">
                          View All
                        </span>
                      );
                    }
                  }
                })}
              </div>
            ) : null}
          </a>
        </div>
      );
      days.push(day);
    }

    let indX = 0;
    while (days.length % 7 != 0) {
      days.push(<div key={`B${indX}`} className="hidden-day"></div>);
      indX += 1;
    }

    return days;
  };

  const previous = () => {
    // console.log(`current month: ${currentMonth.month}`);
    let index = currentMonth.month - 1;
    if (index > -1) {
      // setCurrentMonth(months[currentMonth.month - 1]);
      // console.log(index);
      months.forEach((month) => {
        if (month.month == index) {
          setCurrentMonth(month);
        }
      });
    }
  };

  const next = () => {
    // console.log(`current month: ${currentMonth.month}`);
    let index = currentMonth.month + 1;
    if (index <= 11) {
      // setCurrentMonth(months[currentMonth.month - 1]);
      // console.log(index);
      months.forEach((month) => {
        if (month.month == index) {
          setCurrentMonth(month);
        }
      });
    } else if (index < 11) {
      let dif = dif - 11;
    }
  };

  const selectChange = (e) => {
    let temp = e.target.value.toLowerCase();

    months.forEach((month) => {
      if (month.month == temp) {
        setCurrentMonth(month);
      }
    });
  };

  return (
    <div className="page">
      <div className="calendar-container">
        <div className="calendar-container__util">
          <Button onClick={previous}>Prev</Button>
          <select
            onChange={(e) => selectChange(e)}
            name="month"
            id="months"
            value={currentMonth.month}
          >
            {months.length !== 0
              ? months.map((month, index) => {
                  return (
                    <option key={index} value={month.month}>
                      {getMonthString2(month.month)}
                    </option>
                  );
                })
              : null}
          </select>
          <Button onClick={next}>Next</Button>
        </div>
        <ul className="calendar-container__heading">
          <li>
            <h3>Sun</h3>
          </li>
          <li>
            <h3>Mon</h3>
          </li>
          <li>
            <h3>Tue</h3>
          </li>
          <li>
            <h3>Wens</h3>
          </li>
          <li>
            <h3>Thr</h3>
          </li>
          <li>
            <h3>Fri</h3>
          </li>
          <li>
            <h3>Sat</h3>
          </li>
        </ul>
        <div className="calendar-container__days">
          {currentMonth.days ? makeDays() : null}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
