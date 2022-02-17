const express = require("express");
const router = express.Router();
const Month = require("../models/Months");

router.post("/publish", (req, res) => {
  console.log(req.body.month);
  const newMonth = new Month({
    month: req.body.month,
    days: req.body.days,
  });

  newMonth.save().then((month) => {
    res.json(month);
  });
  console.log("month has been saved!");
});

//update events for a month
router.patch("/event", async (req, res) => {
  console.log("BODY:", req.body);
  const newEvent = {
    name: req.body.name,
    date: req.body.date,
    month: req.body.month,
    time: req.body.time,
  };
  let month;

  console.log(newEvent.month);
  await Month.findOne({ month: newEvent.month })
    .then((res) => {
      if (res) {
        console.log("res", res);
        month = res;
      }
    })
    .catch(function (err) {
      console.log("err:", err);
    });

  console.log("month: ", month);
  if (month !== undefined) {
    month.events.push(newEvent);

    month
      .save()
      .then((month) => {
        return res.status(200).json(month);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
});

//get all months
router.get("/", (req, res) => {
  // const date = new Date();

  // const jan = new Month({ month: 0, days: 31 });
  // const feb = new Month({ month: 1, days: date.getFullYear() % 4 ? 28 : 29 });
  // const mar = new Month({ month: 2, days: 31 });
  // const apr = new Month({ month: 3, days: 30 });
  // const may = new Month({ month: 4, days: 31 });
  // const jun = new Month({ month: 5, days: 30 });
  // const jul = new Month({ month: 6, days: 31 });
  // const aug = new Month({ month: 7, days: 31 });
  // const sep = new Month({ month: 8, days: 30 });
  // const oct = new Month({ month: 9, days: 31 });
  // const nov = new Month({ month: 10, days: 30 });
  // const dec = new Month({ month: 11, days: 31 });

  // const months = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

  // months.forEach((month) => {
  //   month.save();
  // });

  Month.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get month by id
router.get("/month/:month", (req, res) => {
  Month.findOne({ month: req.params.month }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//get all events for one month
router.get("/events/:month", (req, res) => {
  console.log(req.params.month);
  Month.findOne({ month: req.params.month }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result.events);
    }
  });
});

module.exports = router;
