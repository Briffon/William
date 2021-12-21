const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

router.get("/", (req, res) => {
  User.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    console.log(user);

    if (user) {
      return res.status(402).json({ msg: "user already exists!" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      //encrypt password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json(user);
            })
            .catch((err) => {
              return res.status(400).json(err);
            });
        });
      });
    }
  });
});

module.exports = router;
