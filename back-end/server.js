const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const UsersModel = require("./models/Users");
const password = process.env.DB_PASSWORD;
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose.connect(
  `mongodb+srv://root:${password}@cluster0.ftrze.mongodb.net/William?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

//routes
app.use("/users", authRoutes);
app.get("/", async (req, res) => {
  const users = new UsersModel({ email: "Britton", password: "12345" });

  try {
    await users.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});
