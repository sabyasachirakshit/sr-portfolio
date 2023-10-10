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
        <b style={{ fontSize: 50 }}>SR</b>
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
        <span>about</span>
        <span>contact</span>
        <span>work</span>
        <span>playground</span>
      </div>
    </div>
  );
}

export default Navbar;
