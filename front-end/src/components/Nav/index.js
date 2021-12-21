import React from "react";
import willy from "../Assets/willy.jpg";
import Link from "../Link";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-container__heading">
        <img src={willy} alt="William Francoletti" />
        <h1>William Francoletti</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/Calendar">Calendar</a>
          <a href="/About">About</a>
          <a href="/About">About</a>
        </li>
      </ul>

      <ul>
        <li>
          <Link text="Log In" />
        </li>
        <li>
          <Link text="Register" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
