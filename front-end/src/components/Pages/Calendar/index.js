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

      const day = (
        <div key={`A${i}`} className="calendar-container__days__day">
          <a
            href={`/Day?day=${getMonthString2(currentMonth.month)},${
              i >= 10 ? i : "0" + i
            },${date.getFullYear()}`}
          >
            <div className="events">
              {findEvent(i).length > 0
                ? findEvent(i).map((event, key) => {
                    if (i % 2 && key <= 1) {
                      return (
                        <span key={key} className="event color-one">
                          {event.name} {event.time}
                        </span>
                      );
                    } else if (i % 3 && key <= 1) {
                      return (
                        <span key={key} className="event color-two">
                          {event.name} {event.time}
                        </span>
                      );
                    } else if (key > 1) {
                      if (limit === 0) {
                        limit = limit + 1;
                        return <span key={key}>View All</span>;
                      }
                    }
                  })
                : null}
            </div>
            <p>{i}</p>
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
    let switchTo = 0;

    switch (temp) {
      case "january":
        switchTo = 0;
        break;
      case "february":
        switchTo = 1;
        break;
      case "march":
        switchTo = 2;
        break;
      case "april":
        switchTo = 3;
        break;
      case "may":
        switchTo = 4;
        break;
      case "june":
        switchTo = 5;
        break;
      case "july":
        switchTo = 6;
        break;
      case "august":
        switchTo = 7;
        break;
      case "september":
        switchTo = 8;
        break;
      case "october":
        switchTo = 9;
        break;
      case "november":
        switchTo = 10;
        break;
      case "december":
        switchTo = 11;
        break;
      default:
        break;
    }

    months.forEach((month) => {
      if (month.month == switchTo) {
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
