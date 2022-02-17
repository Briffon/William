const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MonthSchema = new Schema(
  {
    month: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    events: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = Month = mongoose.model("months", MonthSchema);

//make a new model
//replace event with a new model
