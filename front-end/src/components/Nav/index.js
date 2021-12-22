import React from "react";
import willy from "../Assets/willy.jpg";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Nav() {
  const [currentLocation, setCurrentLocation] = useState("");
  useEffect(() => {
    let url = window.location.href;
    let location = url.split("/")[3];

    setCurrentLocation(location);
    console.log(location);
  }, [currentLocation]);

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
            <a href="/" className={currentLocation == "" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/Calendar"
              className={currentLocation == "Calendar" ? "active" : ""}
            >
              Calendar
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className={currentLocation == "Contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Philosophy"
              className={currentLocation == "Philosophy" ? "active" : ""}
            >
              Philosophy
            </a>
          </li>
        </ul>
      </div>
    </AppBar>
  );
}

export default Nav;
