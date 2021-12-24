import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

function Calendar() {
  const [months, setMonths] = useState([]);
  const [date, setDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState({});

  useEffect(() => {
    const tempDate = new Date();
    setDate(tempDate);
    // console.log(tempDate.getMonth());
    if (months.length == 0) {
      axios
        .get(process.env.URL || `http://localhost:5000` + "/months")
        .then((res) => {
          const months = res.data;

          months.forEach((month) => {
            if (month.month === tempDate.getMonth()) {
              setCurrentMonth(month);
            }
          });

          setMonths(months);
        });
    }
  }, [currentMonth]);

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

  const makeDays = () => {
    const tempDate = new Date();
    const fdotw = new Date(
      `${getMonthString(currentMonth.month)} 01,${tempDate.getFullYear()}`
    );
    let startIndex = 0;
    // console.log(
    //   `${getMonthString(currentMonth.month)} 01,${tempDate.getFullYear()}`
    // );
    // console.log(fdotw.getDay());
    startIndex = fdotw.getDay();

    const days = [];

    for (let i = 1; i <= startIndex; i++) {
      days.push(<div className="hidden-day"></div>);
    }

    for (let i = 1; i <= currentMonth.days; i++) {
      const day = (
        <div className="calendar-container__days__day">
          <a
            href={`/Day?day=${getMonthString2(currentMonth.month)},${
              i >= 10 ? i : "0" + i
            },${new Date().getFullYear()}`}
          >
            {i}
          </a>
        </div>
      );
      days.push(day);
    }

    while (days.length % 7 != 0) {
      days.push(<div className="hidden-day"></div>);
    }
    return days;
  };

  const previous = () => {
    // console.log(`current month: ${currentMonth.month}`);
    let index = currentMonth.month - 1;
    if (index > 0) {
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
    <div class="page">
      {/* {getMonthString(currentMonth.month)} */}
      <div className="calendar-container">
        <div className="calendar-container__util">
          <Button onClick={previous}>Prev</Button>
          <select onChange={(e) => selectChange(e)} name="month" id="months">
            {months.length !== 0
              ? months.map((month) => {
                  return (
                    <option
                      value={getMonthString2(month.month)}
                      selected={
                        month.month == currentMonth.month ? "selected" : null
                      }
                    >
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
          {currentMonth ? makeDays() : null}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
