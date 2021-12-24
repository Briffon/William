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
module.exports = router;
