// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const UsersModel = require("./models/Users");
// const password = process.env.DB_PASSWORD;
// const authRoutes = require("./routes/authRoutes");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(express.json());

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// mongoose.connect(
//   `mongodb+srv://root:${password}@cluster0.ftrze.mongodb.net/William?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//   }
// );

// //routes
// app.use("/users", authRoutes);
// app.get("/", async (req, res) => {
//   const users = new UsersModel({ email: "Britton", password: "12345" });

//   try {
//     await users.save();
//   } catch (err) {
//     console.log(err);
//   }
// // });

// app.listen(process.env.PORT || 3001, () => {
//   console.log("Server is running on port 3001");
// });

const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//routes
const Months = require("./routes/calendar");
const authRoutes = require("./routes/authRoutes");

app.use(morgan("dev"));
app.use(express.json());

const mongoose = require("mongoose");

//middleware
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

app.use("/months", Months);
app.use("/users", authRoutes);

app.use(express.static(path.join(__dirname, "../front-end/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/build", "index.html"));
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  console.log(err);
  res.send("error");
});

app.listen(port || 5000, () => {
  console.log(`app is live on ${port}`);
});
