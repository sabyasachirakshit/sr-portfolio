import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div
      className="sr-navbar"
      style={{
        display: "flex",
        padding: 40,
        justifyContent: "space-between",
      }}
    >
      <div className="srn-1" style={{ paddingLeft: 60 }}>
        <a href="#" style={{ color: "black", textDecoration: "none" }}>
          <b style={{ fontSize: 50 }}>SR</b>
        </a>
      </div>
      <div
        className="srn-2"
        style={{
          display: "flex",
          gap: 28,
          paddingRight: 100,
          fontSize: 25,
          position: "relative",
          top: 14,
        }}
      >
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/work">work</a>
        <a href="/playground">playground</a>
      </div>
    </div>
  );
}

export default Navbar;
