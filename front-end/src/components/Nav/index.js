import React from "react";
import willy from "../Assets/willy.jpg";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-container__heading">
        <img src={willy} alt="William Francoletti" />
        <h1>William Francoletti</h1>
      </div>
      <ul>
        <li>
          <a href="/Landing">Home</a>
          <a href="/About">About</a>
          <a href="/About">About</a>
          <a href="/About">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
