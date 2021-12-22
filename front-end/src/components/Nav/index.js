import React from "react";
import willy from "../Assets/willy.jpg";
import Link from "../Link";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";

function Nav() {
  return (
    <AppBar className="nav-container">
      <div className="nav-container-top">
        <Button variant="outlined" size="small">
          Login
        </Button>

        <Button variant="outlined" size="small">
          Register
        </Button>
      </div>

      <div className="nav-container-bottom">
        <div className="nav-container-bottom__heading">
          <img src={willy} alt="William Francoletti" />
          <h1>William Francoletti</h1>
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Calendar">Calendar</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Philosophy">Philosophy</a>
          </li>
        </ul>
      </div>
    </AppBar>
  );
}

export default Nav;
