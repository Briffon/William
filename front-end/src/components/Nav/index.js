import React from "react";
import willy from "../Assets/willy.jpg";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import x from "../Assets/x.svg";
import { useHistory } from "react-router";

function Nav() {
  const [currentLocation, setCurrentLocation] = useState("");

  const history = useHistory();

  useEffect(() => {
    let url = window.location.href;
    let location = url.split("/")[3];

    setCurrentLocation(location);
  }, [currentLocation]);

  const openMobile = (e) => {
    document.getElementsByClassName("mobile-nav")[0].style = "display:flex;";
  };

  const closeMobile = (e) => {
    let mobileNav = document.getElementsByClassName("mobile-nav")[0];

    mobileNav.style = "display:none;";
  };

  const switchPage = (e, page) => {
    e.preventDefault();
    switch (page) {
      case "home":
        history.push("/");
        closeMobile();
        break;

      case "contact":
        history.push("/Contact");
        closeMobile();
        break;

      case "calendar":
        history.push("/Calendar");
        closeMobile();
        break;

      case "philosophy":
        history.push("/Philosophy");
        closeMobile();
        break;

      default:
        break;
    }
  };

  return (
    <AppBar className="nav-container">
      <div className="mobile-nav">
        <img onClick={closeMobile} src={x} alt="modal close" />

        <ul>
          <li>
            <button onClick={(e) => switchPage(e, "home")}>Home</button>
          </li>
          <li>
            <button onClick={(e) => switchPage(e, "calendar")}>Calendar</button>
          </li>
          <li>
            <button onClick={(e) => switchPage(e, "contact")}>Contact</button>
          </li>
          <li>
            <button onClick={(e) => switchPage(e, "philosophy")}>
              Philosophy
            </button>
          </li>
        </ul>
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
              className={
                currentLocation == "Calendar" || currentLocation.includes("Day")
                  ? "active"
                  : ""
              }
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

        <div onClick={openMobile} className="hamburger">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </div>
    </AppBar>
  );
}

export default Nav;
